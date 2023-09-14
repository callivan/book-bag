import { IconArrow } from '@shared/icons';
import { Button, Text } from '@shared/ui';
import classNames from 'classnames';

import { IErrorProps } from './types/components';

export function Error({ text, onReset }: IErrorProps) {
  return (
    <div
      className={classNames(
        //Size
        'w-full h-full',

        //Flex
        'flex flex-col justify-center items-center g-2',

        //Indent
        'p-2 pb-3',
      )}
    >
      <Text
        className={classNames(
          //Font
          'font-medium text-h3 text-center',

          //Indent
          'mt-auto',
        )}
      >
        Ooops!!!
      </Text>
      <Text
        className={classNames(
          //Font
          'text-h3 text-center',
        )}
      >
        {text}
      </Text>

      <div
        className={classNames(
          //Indent
          'mt-auto',
        )}
      >
        <div
          className={classNames(
            //Visibility
            //Mobile big
            's:hidden',
          )}
        >
          <Button
            size="md"
            textSide="right"
            icon={<IconArrow width="100%" height="100%" className="rotate-[135deg]" />}
            onClick={onReset}
          >
            Reset error
          </Button>
        </div>

        <div
          className={classNames(
            //Visibility
            'hidden',
            //Mobile big
            's:block',
          )}
        >
          <Button
            size="sm"
            textSide="right"
            icon={<IconArrow width="100%" height="100%" className="rotate-[135deg]" />}
            onClick={onReset}
          >
            Reset
          </Button>
        </div>
      </div>
    </div>
  );
}
