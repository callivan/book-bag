import { useEffect } from 'react';

interface IUseScrollProps {
  isOff?: boolean;
  callback: () => void;
}

export function useScroll({ isOff = false, callback }: IUseScrollProps) {
  useEffect(() => {
    if (isOff) return;

    callback();

    const handleScroll = () => {
      callback();
    };

    document.addEventListener('scroll', handleScroll, { capture: true });

    return () => document.removeEventListener('scroll', handleScroll, { capture: true });
  }, [isOff, callback]);
}
