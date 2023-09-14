import { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';

import { IPortalProps } from './types/component';

function createWrapper(wrapperId: string, styles?: string, rootElmentId?: string) {
  let root = null;

  if (rootElmentId) {
    root = document.querySelector('#' + rootElmentId);
  }

  const wrapperElement = document.createElement('div');

  wrapperElement.style.cssText =
    `
    pointer-events: none;
    position: fixed;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    overflow: hidden;
  ` + styles;
  wrapperElement.setAttribute('id', wrapperId);
  root ? root.append(wrapperElement) : document.body.append(wrapperElement);

  return wrapperElement;
}

export function Portal({ id, children, styles, rootElementId }: IPortalProps) {
  const [wrapperElement, setWrapperElement] = useState<HTMLElement>();

  useEffect(() => {
    let element = document.getElementById(id);
    let systemCreated = false;

    if (!element) {
      systemCreated = true;
      element = createWrapper(id, styles, rootElementId);
    }

    setWrapperElement(element);

    return () => {
      if (systemCreated && element && element.parentNode) {
        element.parentNode.removeChild(element);
      }
    };
  }, [id]);

  return wrapperElement ? ReactDOM.createPortal(children, wrapperElement) : null;
}
