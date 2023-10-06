type TSearch = React.ComponentPropsWithRef<'input'>;

interface ISearchOwnProps {
  iconSearch: JSX.Element;
  onSubmit?: (value: string) => void;

  cleaner?: {
    iconCross: JSX.Element;
    onClean: (e: React.FormEvent<HTMLButtonElement>) => void;
  };
}

export type TSearchProps = Omit<TSearch, keyof ISearchOwnProps> & ISearchOwnProps;
