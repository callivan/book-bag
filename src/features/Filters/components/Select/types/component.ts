export type TSelectCustomData = { id: string; name: string };

type TDiv = React.ComponentPropsWithRef<'div'>;

interface ISelectCustomOwnProps {
  portalId: string;
  data: TSelectCustomData[];
  activeItem?: TSelectCustomData;
  placeholder?: string;
  onClick?: (data: TSelectCustomData) => void;
}

export type TSelectCustomProps = Omit<TDiv, keyof ISelectCustomOwnProps> & ISelectCustomOwnProps;
