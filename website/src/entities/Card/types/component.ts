type TDiv = React.ComponentPropsWithRef<'div'>;

interface ICardOwnProps {
  title: string;
  img: {
    basic: string;
    placeholder?: string;
  };
  authors?: string[];
  category?: string;
}

export type TCardProps = Omit<TDiv, keyof ICardOwnProps> & ICardOwnProps;
