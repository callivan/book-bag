import classNames from 'classnames';
import { useEffect, useRef } from 'react';

import styles from './styles.module.scss';
import { TScrollProps } from './types/component';

export function Scroll({
  className,
  children,
  disabledHoverOnScroll = true,
  isOff = false,
  ...props
}: TScrollProps) {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!scrollRef.current) return;

    const scroll = scrollRef.current;

    const handleScroll = () => {
      const wrapper = scroll.querySelector<HTMLDListElement>('.scroll__wrapper');

      if (!wrapper || !disabledHoverOnScroll) return;

      wrapper.style.pointerEvents = 'none';

      setTimeout(() => {
        wrapper.style.pointerEvents = 'visible';
      }, 300);
    };

    scroll.addEventListener('scroll', handleScroll);

    return () => {
      scroll.removeEventListener('scroll', handleScroll);
    };
  }, [scrollRef.current, disabledHoverOnScroll]);

  return (
    <div
      data-off={isOff}
      ref={scrollRef}
      className={classNames(
        //Custom class name
        className,

        styles.scroll,
      )}
      {...props}
    >
      <div className={styles.wrapper}>{children}</div>
    </div>
  );
}
