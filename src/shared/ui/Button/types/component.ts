type TButton = React.ComponentPropsWithRef<'button'>;

interface IButtonOwnProps {
  icon: JSX.Element;
  textSide?: 'left' | 'right';
  size?: 'md' | 'sm';
  children?: string;
}

export type TButtonProps = Omit<TButton, keyof IButtonOwnProps> & IButtonOwnProps;
