import classNames from 'classnames';

import styles from './styles.module.scss';
import { TButtonProps } from './types/component';

export function Button({
  icon,
  className,
  textSide = 'left',
  size = 'md',
  children,
  ...props
}: TButtonProps) {
  return (
    <button
      data-size={size}
      data-text={textSide}
      className={classNames(
        //Custom class name
        className,

        styles.button,
      )}
      {...props}
    >
      {children && <span className={styles.button__text}>{children}</span>}

      <div data-size={size} className={styles.button__wrapper}>
        <div className={styles.button__icon} />
        {icon}
      </div>
    </button>
  );
}
