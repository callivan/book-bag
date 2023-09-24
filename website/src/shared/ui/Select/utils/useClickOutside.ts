import { useEffect } from 'react';

interface IUseClickOutsideProps {
  wrapper: HTMLElement | null;
  callback: () => void;
  isOff?: boolean;
}

export function useClickOutside({ wrapper, isOff = false, callback }: IUseClickOutsideProps) {
  useEffect(() => {
    if (!wrapper || isOff) return;

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target;

      if (!target || !(target instanceof HTMLElement) || !wrapper.contains(target)) {
        !isOff && callback();
      }
    };

    document.addEventListener('click', handleClickOutside);

    return () => document.removeEventListener('click', handleClickOutside);
  }, [wrapper, isOff, callback]);
}
