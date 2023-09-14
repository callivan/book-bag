type TDiv = React.ComponentPropsWithRef<'div'>;

interface IErrorOwnProps {
  text: string;
}

export type TErrorProps = Omit<TDiv, keyof IErrorOwnProps> & IErrorOwnProps;
