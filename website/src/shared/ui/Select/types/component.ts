type TDiv = React.ComponentPropsWithRef<'div'>;

interface ISelectOwnProps<D> {
  icon: JSX.Element;
  data: D[];
  itemElement: (data: D) => JSX.Element;

  portalId?: string;
  placeholder?: string;
  activeItem?: string;
}

export type TSelectProps<D> = Omit<TDiv, keyof ISelectOwnProps<D>> & ISelectOwnProps<D>;

export interface IRequiredProps {
  id: string;
  name: string;
}
