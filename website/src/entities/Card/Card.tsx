import { Badge, Img, Scroll, Text } from '@shared/ui';
import classNames from 'classnames';

import { TCardProps } from './types/component';

export function Card({ img, title, authors, category, className, ...props }: TCardProps) {
  return (
    <div
      className={classNames(
        //Custom class name
        className,

        //Indent
        'p-1',

        //Effect
        'backdrop-blur-custom',

        //Color
        'bg-gray-bg',

        //Size
        'w-full h-full',

        //Flex
        'flex flex-col gap-1',
      )}
      {...props}
    >
      <Img
        src={img.basic}
        placeholder={img.placeholder}
        alt="Book"
        className="w-[224px] h-[248px]"
      />

      <div
        className={classNames(
          //Flex
          'flex flex-col justify-between flex-grow flex-shrink gap-1',
        )}
      >
        <Text
          as="h3"
          className={classNames(
            //Font
            'text-body1 tracking-[5%] text-left',

            //Size
            'w-full h-max',
          )}
        >
          {title}
        </Text>

        <div
          className={classNames(
            //Flex
            'flex flex-col gap-2',

            //Size
            'w-full h-max',
          )}
        >
          {authors && (
            <div
              className={classNames(
                //Flex
                'flex flex-col flex-wrap flex-grow flex-shrink gap-[4px]',
              )}
            >
              <Text className="text-body2 text-left w-full">Written by:</Text>

              <Scroll
                className={classNames(
                  //Size
                  'max-h-[80px] h-max',
                )}
              >
                <>
                  {authors.map((author, index) => (
                    <Text className="text-body2" key={index}>
                      {author}
                    </Text>
                  ))}
                </>
              </Scroll>
            </div>
          )}

          {category && (
            <Badge size="sm" label={category} className="flex-grow flex-shrink-0 max-w-full" />
          )}
        </div>
      </div>
    </div>
  );
}
