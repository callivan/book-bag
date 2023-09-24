import classNames from 'classnames';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';
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

          styles.img,
        )}
      >
        <div data-hide={!!src} className={styles.img__wrapper}>
          {loader}
        </div>

        <img
          className={styles.img__content}
          src={src || placeholder}
          srcSet={generateSrcSet}
          {...props}
        />
      </div>
    )
  );
}
