import { IconBurger, IconCross } from '@shared/icons';
import { Button, Portal, Scroll } from '@shared/ui';
import classNames from 'classnames';
import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from 'react';

import styles from './styles.module.scss';
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
            <div data-open={isOpen} data-animation={animationEnd} className={styles.popup__button}>
              <IconBurger width="100%" height="100%" className={styles['popup__button-svg']} />
              <IconCross width="100%" height="100%" className={styles['popup__button-svg']} />
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
            data-open={isOpen}
            data-animation={animationEnd}
            ref={containerRef}
            className={styles.popup__content}
          >
            <Scroll>{children}</Scroll>
          </div>
        </Portal>
      )}
    </>
  );
});

export default Popup;
