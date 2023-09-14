import { Text } from '@shared/ui';
import classNames from 'classnames';

export function Empty({ text }: { text: string }) {
  return (
    <div
      className={classNames(
        //Size
        'w-full h-full',

        //Flex
        'flex justify-center items-center',

        //Indent
        'p-2',
      )}
    >
      <Text
        className={classNames(
          //Font
          'text-h3 text-center',
        )}
      >
        {text}
      </Text>
    </div>
  );
}
