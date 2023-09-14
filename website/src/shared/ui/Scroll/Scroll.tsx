import './scroll.css';

import classNames from 'classnames';
import { useEffect, useRef } from 'react';

import { TScrollProps } from './types/component';

export function Scroll({
  className,
  children,
  disabledHoverOnScroll = true,
  isOff = false,
  ...props
}: TScrollProps) {
  const wrapperRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!wrapperRef.current) return;

    const wrapper = wrapperRef.current;

    const handleScroll = () => {
      const container = wrapper.querySelector<HTMLDListElement>('.container');

      if (!container || !disabledHoverOnScroll) return;

      container.style.pointerEvents = 'none';

      setTimeout(() => {
        container.style.pointerEvents = 'visible';
      }, 300);
    };

    wrapper.addEventListener('scroll', handleScroll);

    return () => wrapper.removeEventListener('scroll', handleScroll);
  }, [wrapperRef.current, disabledHoverOnScroll]);

  return (
    <div
      ref={wrapperRef}
      className={classNames(
        //Custom class name
        'scroll',
        className,

        //Size
        'w-full h-full',

        //Scroll
        'overflow-auto',
        isOff && 'overflow-hidden',

        //Indent
        'mr-1',
      )}
      {...props}
    >
      <div
        className={classNames(
          //Custom class name
          'container',

          //Size
          'w-full h-full',
        )}
      >
        {children}
      </div>
    </div>
  );
}
