import './popup.css';

import { IconBurger, IconCross } from '@shared/icons';
import { Button, Portal, Scroll } from '@shared/ui';
import classNames from 'classnames';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import { IPopuRefProps, IPoupOwnProps } from './types/component';

const Popup = forwardRef<IPopuRefProps, IPoupOwnProps>(function Popup(
  { buttonProps, portalProps, children },
  ref,
) {
  const [animationEnd, setAnimationEnd] = useState<boolean>(false);
  const [isOpen, setOpen] = useState<boolean>(false);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    buttonProps && buttonProps.onClick && buttonProps.onClick(e);

    isOpen ? setAnimationEnd(true) : setOpen(true);
  };

  useImperativeHandle(
    ref,
    () => ({
      onClose() {
        setOpen(false);
      },
      onOpen() {
        setOpen(true);
      },
    }),
    [],
  );

  useEffect(() => {
    animationEnd &&
      setTimeout(() => {
        setOpen(false);

        setTimeout(() => {
          setAnimationEnd(false);
        }, 200);
      }, 200);
  }, [animationEnd]);
  return (
    <>
      <Button
        icon={
          (buttonProps && buttonProps.icon) || (
            <div
              className={classNames(
                //Position
                'relative',

                //Flex
                'flex items-center justify-center',

                //Size
                'w-full h-full',

                //Visibility
                'overflow-hidden',
              )}
            >
              <IconBurger
                width="100%"
                height="100%"
                className={classNames(
                  //Position
                  'absolute',

                  //Animation
                  isOpen && 'icon-hide',
                  !isOpen && animationEnd && 'icon-show',
                )}
              />
              <IconCross
                width="100%"
                height="100%"
                className={classNames(
                  //Position
                  'absolute',

                  //Effect
                  'opacity-0',

                  //Animation
                  isOpen && 'icon-show',
                  !isOpen && animationEnd && 'icon-hide',
                )}
              />
            </div>
          )
        }
        className={classNames(
          //Custom class name
          buttonProps && buttonProps.className,
        )}
        size={(buttonProps && buttonProps.size) || 'sm'}
        onClick={handleClick}
        {...buttonProps}
      />

      {isOpen && (
        <Portal id={portalProps.id} styles={portalProps.styles}>
          <div
            ref={containerRef}
            className={classNames(
              //Custom class name
              isOpen && !animationEnd ? 'show' : 'hide',

              //Size
              'w-full h-full',

              //Effect
              'backdrop-blur-custom',

              //Visibility
              isOpen && 'pointer-events-auto',
            )}
          >
            <Scroll>{children}</Scroll>
          </div>
        </Portal>
      )}
    </>
  );
});

export default Popup;
