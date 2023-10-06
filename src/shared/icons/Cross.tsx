export function IconCross(props: React.SVGProps<SVGSVGElement>) {
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
        d="M17.7143 17.7143L6.28572 6.28577M17.7143 6.28577L6.28572 17.7143"
        fill="transparent"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
