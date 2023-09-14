import { IconArrow } from '@shared/icons';
import { Button, Img, Text } from '@shared/ui';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

import { Wrapper } from './components';
import { TErrorProps } from './types/component';

export default function Error({ className, text, ...props }: TErrorProps) {
  return (
    <Wrapper>
      <div
        className={classNames(
          //Custom class name
          className,

          //Size
          'w-full h-full',

          //Flex
          'flex flex-col gap-2 items-center justify-center',

          //Indent
          'p-2',

          //Visibility
          'overflow-hidden',
        )}
        {...props}
      >
        <Img
          src="/bg/bg-desktop.png"
          placeholder="/bg/bg-preview.png"
          responsive={[
            { url: '/bg/bg-mobile.png', viewSize: 595 },
            { url: '/bg/bg-tablet.png', viewSize: 1024 },
            { url: '/bg/bg-desktop.png', viewSize: 1440 },
          ]}
          className={classNames(
            //Size
            'w-[82px] h-[54px]',
            //Mobile big
            's:w-[62px] s:h-[40px]',

            //Flex
            'flex-shrink-0',

            //Indent
            'mb-auto',
          )}
        />

        <Text
          className={classNames(
            //Font
            'font-medium text-h3 text-center',

            //Size
            'w-full',
          )}
        >
          Ooops!!!
        </Text>
        <Text
          className={classNames(
            //Font
            'font-medium text-h3 text-center',

            //Size
            'w-full',
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
          <Link to="/" replace>
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
              >
                Back home
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
              >
                Back
              </Button>
            </div>
          </Link>
        </div>
      </div>
    </Wrapper>
  );
}
