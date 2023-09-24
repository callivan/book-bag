interface ISetPositionProps {
  portalId: string;
  containerElement: HTMLElement | null;
  wrapperElement: HTMLElement | null;
}

export function setPosition({ portalId, containerElement, wrapperElement }: ISetPositionProps) {
  if (!containerElement) return;

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
