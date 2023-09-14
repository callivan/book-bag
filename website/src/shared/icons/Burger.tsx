export function IconBurger(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={props.className ?? 'fill-[currentColor]'}
      {...props}
    >
      <path
        d="M3 9.00098H21M3 15.001H21"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
