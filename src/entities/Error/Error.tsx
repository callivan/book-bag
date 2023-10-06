import { IconArrow } from '@shared/icons';
import { Button, Text } from '@shared/ui';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { IErrorProps } from './types/components';

export function Error({ text, onReset }: IErrorProps) {
  return (
    <div className={styles.error}>
      <Text className={styles.error__title}>Ooops!!!</Text>
      <Text className={styles.error__text}>{text}</Text>

      <div
        className={classNames(
          //Indent
          'mt-auto',
        )}
      >
        <Button
          size="md"
          textSide="right"
          icon={<IconArrow width="100%" height="100%" className="rotate-[135deg]" />}
          onClick={onReset}
          className={styles['error__reset-md']}
        >
          Reset error
        </Button>

        <Button
          size="sm"
          textSide="right"
          icon={<IconArrow width="100%" height="100%" className="rotate-[135deg]" />}
          onClick={onReset}
          className={styles['error__reset-sm']}
        >
          Reset
        </Button>
      </div>
    </div>
  );
}
