interface ISetPositionProps {
  portalId: string;
  containerElement: HTMLElement | null;
}

export function setPosition({ portalId, containerElement }: ISetPositionProps) {
  if (!containerElement) return;

  const wrapperElement = containerElement.querySelector<HTMLDivElement>('.wrapper');
  const portal = document.querySelector<HTMLDivElement>('#' + portalId);

  if (!portal || !wrapperElement) return;

  const rectWrapper = wrapperElement.getBoundingClientRect();
  const reactBody = document.body.getBoundingClientRect();
  const y = rectWrapper.y - reactBody.y;
  const x = rectWrapper.x - reactBody.x;

  portal.style.cssText = `
        position: absolute;
        top: ${y + rectWrapper.height}px;
        left: ${x}px;
        width: ${rectWrapper.width}px;
        height: max-content;
      `;
}
