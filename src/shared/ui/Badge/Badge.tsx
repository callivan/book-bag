import classNames from 'classnames';

import styles from './styles.module.scss';
import { INadgeProps } from './types/component';

export function Badge({ label, size = 'md', className, ...props }: INadgeProps) {
  return (
    <div
      data-size={size}
      className={classNames(
        //Custom class name
        className,

        styles.bage,
      )}
      {...props}
    >
      <span data-size={size} className={styles.bage__text}>
        {label}
      </span>
    </div>
  );
}
