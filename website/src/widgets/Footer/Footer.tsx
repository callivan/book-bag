import { IconArrow } from '@shared/icons';
import { Button, Text } from '@shared/ui';
import classNames from 'classnames';

import { IFooterProps } from './types/component';

export default function Footer({ count, isLoad = false, onLoad }: IFooterProps) {
  return (
    <footer
      className={classNames(
        //Size
        'w-full h-max',

        //Flex
        'flex items-baseline justify-between gap-1',

        //Border
        'border-t border-solid border-gray-clean',

        //Indent
        'pt-2',
      )}
    >
      <Text
        className={classNames(
          //Font
          'tracking-[5%]',
          //Mobile big
          's:text-body3',
        )}
      >
        {`Found ${count} results`}
      </Text>

      <div
        className={classNames(
          //Visibility
          !isLoad && 'pointer-events-none',
          's:hidden',

          //Effect
          !isLoad && 'opacity-0',
          //Transition
          'transition-opacity duration-200',
        )}
      >
        <Button
          size="md"
          icon={<IconArrow width="100%" height="100%" className="-rotate-45" />}
          onClick={onLoad}
        >
          Load more
        </Button>
      </div>

      <div className="hidden s:block">
        <Button
          size="sm"
          icon={<IconArrow width="100%" height="100%" className="-rotate-45" />}
          onClick={onLoad}
        >
          More
        </Button>
      </div>
    </footer>
  );
}
