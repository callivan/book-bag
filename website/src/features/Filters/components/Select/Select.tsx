import { IconCheck, IconChevron } from '@shared/icons';
import { Select, Text } from '@shared/ui';
import classNames from 'classnames';

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
      )}
      itemElement={(data) => (
        <button
          onClick={() => onClick && onClick(data)}
          className={classNames(
            //Flex
            'flex items-center justify-between gap-1',

            //Indent
            'pl-[12px] pr-1 py-1',

            //Size
            'w-full h-max',

            //Color
            'text-gray-medium stroke-gray-medium',
            //Transition
            'transition-colors duration-200',
            //Hover
            'hover:bg-gray-dark hover:text-gray-light hover:stroke-gray-light',
          )}
        >
          <Text>{data.name}</Text>

          <IconCheck
            className={classNames(
              //Effect
              activeItem?.id !== data.id && 'opacity-0',
              //Transition
              'transition-opacity duration-200',
            )}
          />
        </button>
      )}
      {...props}
    />
  );
}
