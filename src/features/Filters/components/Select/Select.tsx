import { IconCheck, IconChevron } from '@shared/icons';
import { Select, Text } from '@shared/ui';
import classNames from 'classnames';

import styles from './styles.module.scss';
import { TSelectCustomProps } from './types/component';

export function SelectCustom({
  activeItem,
  placeholder,
  data,
  portalId,
  className,
  onClick,
  ...props
}: TSelectCustomProps) {
  return (
    <Select
      portalId={portalId}
      activeItem={activeItem?.name}
      placeholder={placeholder}
      data={data}
      icon={<IconChevron />}
      className={classNames(
        //Custom class name
        className,

        styles.select,
      )}
      itemElement={(data) => (
        <button onClick={() => onClick && onClick(data)} className={styles.select__button}>
          <Text>{data.name}</Text>

          <IconCheck data-active={activeItem?.id === data.id} className={styles.select__icon} />
        </button>
      )}
      {...props}
    />
  );
}
