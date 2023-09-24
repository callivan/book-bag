import { IconArrow } from '@shared/icons';
import { Button, Img, Text } from '@shared/ui';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Wrapper } from './components';
import styles from './styles.module.scss';
import { TErrorProps } from './types/component';

export default function Error({ className, text, ...props }: TErrorProps) {
  return (
    <Wrapper>
      <div
        className={classNames(
          //Custom class name
          className,

          styles.error,
        )}
        {...props}
      >
        <Img
          src="/logo/logo.png"
          placeholder="/logo/logo-preview.png"
          responsive={[
            { url: '/logo/logo-sm.png', viewSize: 595 },
            { url: '/logo/logo.png', viewSize: 1024 },
          ]}
          className={styles.error__bg}
        />

        <Text className={styles.error__title}>Ooops!!!</Text>
        <Text className={styles.error__text}>{text}</Text>

        <Link to="/" replace className={styles.error__link}>
          <Button
            size="md"
            textSide="right"
            icon={<IconArrow width="100%" height="100%" className={styles.error__icon} />}
            className={styles['error__back-md']}
          >
            Back home
          </Button>
          <Button
            size="sm"
            textSide="right"
            icon={<IconArrow width="100%" height="100%" className={styles.error__icon} />}
            className={styles['error__back-sm']}
          >
            Back
          </Button>
        </Link>
      </div>
    </Wrapper>
  );
}
