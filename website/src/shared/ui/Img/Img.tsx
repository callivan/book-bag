import classNames from 'classnames';
import { useEffect, useState } from 'react';

import { TImageProps } from './types/component';

export function Img({ className, loader, placeholder, responsive, ...props }: TImageProps) {
  const [src, setSrc] = useState<string>('');

  useEffect(() => {
    const img = new Image();

    img.src = props.src ?? '';

    const handleLoad = () => {
      setSrc(props.src || '');
    };

    img.addEventListener('load', handleLoad);

    return () => img.removeEventListener('load', handleLoad);
  }, []);

  const generateSrcSet = responsive
    ? responsive.reduce((acc: string, { url, viewSize }) => (acc += url + ` ${viewSize}w,`), '')
    : '';

  return (
    (placeholder || src) && (
      <div
        className={classNames(
          //Custom class name
          className,

          //Position
          'relative',
        )}
      >
        <div
          className={classNames(
            //Position
            'absolute top-[0px] left-[0px]',

            //Size
            'w-full h-full',

            //Effect
            'backdrop-blur-custom',
            src && 'opacity-0',
            //Transition
            'transition-opacity duration-200',

            //Color
            'bg-gray-bg',
          )}
        >
          {loader}
        </div>

        <img
          className={classNames(
            //Image
            'object-cover object-center',
            //Size
            'w-full h-full',
          )}
          src={src || placeholder}
          srcSet={generateSrcSet}
          {...props}
        />
      </div>
    )
  );
}
