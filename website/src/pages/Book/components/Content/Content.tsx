import { IconArrow } from '@shared/icons';
import { Button, Img, Text } from '@shared/ui';
import classNames from 'classnames';

import { Info } from './components';
import { IContentProps } from './types/component';

export default function Content({ book: { volumeInfo }, onBack }: IContentProps) {
  return (
    <div
      className={classNames(
        //Size
        'w-full min-h-full max-h-max',

        //Grid
        'grid grid-cols-book grid-rows-book gap-4',
        //Tablet small
        'md:gap-2',
      )}
    >
      <Text
        as="h1"
        className={classNames(
          //Font
          'font-medium text-h1 text-left',
          //Mobile big
          's:text-h2 s:text-center',

          //Size
          'w-full',

          //Grid
          'col-span-1',
        )}
      >
        {volumeInfo.title}
      </Text>

      <Text
        as="p"
        className={classNames(
          //Font
          'text-center',

          //Size
          'w-full max-w-[1020px]',

          //Indent
          'mx-auto',

          //Grid
          'col-span-1',
        )}
      >
        {volumeInfo.description}
      </Text>

      <div
        className={classNames(
          //Grid
          'col-span-1',

          //Size
          'w-full h-full',

          //Flex
          'flex items-stretch justify-center gap-3',
          //Tablet small
          'md:gap-2 md:flex-wrap',
        )}
      >
        <Img
          src={volumeInfo.imageLinks?.thumbnail ?? '/book/default-desktop.png'}
          placeholder={volumeInfo.imageLinks?.smallThumbnail ?? '/book/default-preview.png'}
          responsive={[
            {
              url: volumeInfo.imageLinks?.thumbnail ?? '/book/default-thumbnail.png',
              viewSize: 128,
            },
            {
              url: volumeInfo.imageLinks?.thumbnail ?? '/book/default-mobile.png',
              viewSize: 395,
            },
            {
              url: volumeInfo.imageLinks?.thumbnail ?? '/book/default-tablet.png',
              viewSize: 1024,
            },
            {
              url: volumeInfo.imageLinks?.thumbnail ?? '/book/default-desktop.png',
              viewSize: 1440,
            },
          ]}
          alt={`Book ${volumeInfo.title}`}
          className={classNames(
            //Size
            'max-w-[700px] min-w-[300px] w-full h-[500px]',
            //Tablet small
            'md:min-w-full',
          )}
        />

        <div
          className={classNames(
            //Size
            'w-full max-w-[800px] h-full',
            //Tablet small
            'md:h-max',

            //Flex
            'flex flex-col gap-2 items-center justify-between',

            //Indent
            'pb-3 pr-1',
          )}
        >
          <Info categories={volumeInfo.categories ?? []} authors={volumeInfo.authors ?? []} />

          <Button
            textSide="right"
            icon={<IconArrow width="100%" height="100%" className="rotate-[135deg]" />}
            className="ml-auto md:ml-[0px] s:hidden"
            onClick={onBack}
          >
            Back
          </Button>

          <Button
            textSide="right"
            size="sm"
            icon={<IconArrow width="100%" height="100%" className="rotate-[135deg]" />}
            className="hidden s:flex"
            onClick={onBack}
          >
            Back
          </Button>
        </div>
      </div>
    </div>
  );
}
