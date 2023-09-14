type TImage = Omit<React.ComponentPropsWithRef<'img'>, 'srcSet'>;

export type TImgResponsiveProps = { url: string; viewSize: number };

interface IImageOwmProps {
  loader?: JSX.Element;
  placeholder?: string;
  responsive?: TImgResponsiveProps[];
}

export type TImageProps = Omit<TImage, keyof IImageOwmProps> & IImageOwmProps;
