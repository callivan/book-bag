import { Img } from '@shared/ui';
import classNames from 'classnames';

export function Wrapper({ children }: { children: React.ReactNode }) {
  return (
    <div
      className={classNames(
        //Position
        'relative',

        //Size
        'w-screen h-screen',
      )}
    >
      <div
        className={classNames(
          //Position
          'absolute top-[0px] left-[0px]',

          //Size
          'w-full h-full',
        )}
      >
        <Img
          src="/bg/bg-desktop.png"
          className={classNames(
            //Size
            'w-full h-full',
          )}
        />
      </div>

      <div
        className={classNames(
          //Size
          'w-full h-full',

          //Effect
          'backdrop-blur-custom',

          //Color
          'bg-gray-bg',
        )}
      >
        {children}
      </div>
    </div>
  );
}
