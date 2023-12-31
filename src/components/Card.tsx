import classNames from "classnames";

type CardProps = React.DetailedHTMLProps<
  React.HTMLAttributes<HTMLDivElement>,
  HTMLDivElement
>;

export function Card(props: CardProps) {
  return (
    <div
      {...props}
      className={classNames(
        "overflow-clip rounded-xl bg-gradient-to-r to-amber-200 from-orange-300 bg-clip-border text-gray-700 shadow-md",
        props.className
      )}
    />
  );
}

type CardImageProps = React.DetailedHTMLProps<
  React.ImgHTMLAttributes<HTMLImageElement>,
  HTMLImageElement
> & {
  containerClassName?: string;
};
export function CardImage({
  className,
  containerClassName,
  ...props
}: CardImageProps) {
  return (
    <div
      className={classNames(
        "overflow-clip rounded-xl bg-gradient-to-r from-stone-50 to-stone-100 bg-clip-content text-gray-700 shadow-lg flex items-center",
        containerClassName
      )}
    >
      <img
        className={classNames("mx-auto", className)}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
        {...props}
      />
    </div>
  );
}
