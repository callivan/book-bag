import './select.css';

import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';

import { Portal } from './components';
import { IRequiredProps, TSelectProps } from './types/component';
import { setPosition } from './utils/setPosition';

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

  const handleClick = () => {
    isOpen ? setAnimationEnd(true) : setOpen(true);
  };

  useEffect(() => {
    if (!isOpen) return;

    setPosition({ portalId, containerElement: containerRef.current });

    const handleScroll = () => {
      setPosition({ portalId, containerElement: containerRef.current });
    };

    document.addEventListener('scroll', handleScroll, { capture: true });

    return () => document.removeEventListener('scroll', handleScroll, { capture: true });
  }, [isOpen]);

  useEffect(() => {
    if (!containerRef.current || !isOpen) return;

    const container = containerRef.current;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target;

      if (!target || !(target instanceof HTMLElement) || !container.contains(target)) {
        isOpen && setAnimationEnd(true);
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [containerRef.current, isOpen]);

  useEffect(() => {
    animationEnd &&
      setTimeout(() => {
        setOpen(false);
        setAnimationEnd(false);
      }, 300);
  }, [animationEnd]);

  return (
    <div
      ref={containerRef}
      className={classNames(
        //Custom class name
        className,

        //Flex
        'flex flex-col',
      )}
      {...props}
    >
      <button
        className={classNames(
          //Position
          'relative',

          //Flex
          'flex items-center justify-between gap-1',

          //Size
          'w-full h-max',

          //Color
          'stroke-gray-medium text-gray-medium',
          //Transition
          'transition-colors duration-200',
          isOpen && !animationEnd && 'bg-gray-dark text-gray-light stroke-gray-light',
          //Hover
          'hover:text-gray-light hover:stroke-gray-light hover:bg-gray-dark',

          //Font
          'font-regular text-body1',

          //Indent
          'pl-[12px] pr-1 py-1',
        )}
        onClick={handleClick}
      >
        <span
          className={classNames(
            //Position
            'absolute',

            //Transform
            'origin-top-left scale-[0.65] translate-y-[-12px]',

            //Font
            'whitespace-pre-wrap break-all text-left',

            //Effect
            !activeItem && 'opacity-0',
            //Transition
            'transition-opacity duration-200',

            //Size
            'w-full',
          )}
        >
          {placeholder}
        </span>

        <span
          className={classNames(
            //Font
            'whitespace-pre-wrap break-all text-left',

            //Size
            'w-full',
          )}
        >
          {activeItem || placeholder}
        </span>

        <div
          className={classNames(
            //Size
            'w-max h-max',

            //Visibility
            'pointer-events-none',

            //Flex
            'flex-shrink-0',

            //Transform
            isOpen && !animationEnd && 'rotate-180',
            //Transition
            'transition-transform duration-200',
          )}
        >
          {icon}
        </div>
      </button>

      <div
        className={classNames(
          //Custom class name
          'wrapper',

          //Size
          'w-full',
        )}
      >
        {isOpen && (
          <Portal
            id={portalId}
            styles="position: absolute; width: max-content; height: max-content;"
          >
            <div
              className={classNames(
                //Custom class name
                'scroll',

                //Visibility
                'overflow-y-scroll overflow-x-hidden',
                !isOpen && 'pointer-events-none',

                //Size
                'w-full max-h-[300px]',

                //Transform
                'translate-x-2',

                //Animation
                isOpen && !animationEnd
                  ? 'animate-[movingFromRight_0.3s_ease-in-out_forwards] 1s'
                  : 'animate-[movingLeft_0.3s_ease-in-out_forwards]',

                //Color
                'bg-gray-bg',

                //Effect
                'backdrop-blur-custom',
                animationEnd && 'opacity-0',
                //Transition
                'transition-opacity duration-300',

                //Indent
                'py-1',
              )}
            >
              <ul
                className={classNames(
                  //Flex
                  'flex flex-col',

                  //Size
                  'w-full h-max',
                )}
              >
                {data.map((d) => (
                  <li
                    className={classNames(
                      //Size
                      'w-full h-max',
                    )}
                    key={d.id}
                  >
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
