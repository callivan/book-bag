import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { Portal } from './components';
import styles from './styles.module.scss';
import { IRequiredProps, TSelectProps } from './types/component';
import { setPosition } from './utils/setPosition';
import { useClickOutside } from './utils/useClickOutside';
import { useScroll } from './utils/useScroll';

export function Select<D extends IRequiredProps>({
  icon,
  itemElement,
  data,
  portalId = 'select-portal',
  placeholder,
  activeItem,
  className,
  ...props
}: TSelectProps<D>) {
  const [animationEnd, setAnimationEnd] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  const handleClick = () => {
    isOpen ? setAnimationEnd(true) : setOpen(true);
  };

  const calculatePosition = () => {
    setPosition({
      portalId,
      containerElement: containerRef.current,
      wrapperElement: wrapperRef.current,
    });
  };

  useScroll({ isOff: !isOpen, callback: calculatePosition });
  useClickOutside({
    wrapper: containerRef.current,
    isOff: !isOpen,
    callback: () => setAnimationEnd(true),
  });

  useEffect(() => {
    animationEnd &&
      setTimeout(() => {
        setOpen(false);

        setTimeout(() => {
          setAnimationEnd(false);
        }, 150);
      }, 150);
  }, [animationEnd]);

  return (
    <div
      ref={containerRef}
      className={classNames(
        //Custom class name
        className,

        styles.select,
      )}
      {...props}
    >
      <button data-open={isOpen} className={styles.select__button} onClick={handleClick}>
        <span data-show={activeItem} className={styles.select__label}>
          {placeholder}
        </span>

        <span className={styles.select__text}>{activeItem || placeholder}</span>

        <div data-open={isOpen} data-animation={animationEnd} className={styles.select__chevron}>
          {icon}
        </div>
      </button>

      <div ref={wrapperRef} className={styles.select__wrapper}>
        {isOpen && (
          <Portal
            id={portalId}
            styles="position: absolute; width: max-content; height: max-content;"
          >
            <div
              data-open={isOpen}
              data-animation={animationEnd}
              className={styles.select__content}
            >
              <ul className={styles.select__list}>
                {data.map((d) => (
                  <li className={styles.select__item} key={d.id}>
                    {itemElement(d)}
                  </li>
                ))}
              </ul>
            </div>
          </Portal>
        )}
      </div>
    </div>
  );
}
