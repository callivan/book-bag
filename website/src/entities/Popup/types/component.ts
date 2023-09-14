import { IPortalProps, TButtonProps } from '@shared/ui';

export interface IPoupOwnProps {
  children: React.ReactElement;
  portalProps: Omit<IPortalProps, 'children'>;
  buttonProps?: Partial<TButtonProps>;
}

export interface IPopuRefProps {
  onClose: () => void;
  onOpen: () => void;
}
