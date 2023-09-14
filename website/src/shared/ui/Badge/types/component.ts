type TDiv = React.ComponentPropsWithRef<'div'>;

interface IBadgeOwnProps {
  label: string;
  size?: 'sm' | 'md';
}

export type INadgeProps = Omit<TDiv, keyof IBadgeOwnProps> & IBadgeOwnProps;
