import { useEffect, useState } from 'react';

interface IUseMatchMediaProps {
  sizeNames: string[];
  queries: string[];
}

export function useMatchMedia({ sizeNames, queries }: IUseMatchMediaProps) {
  const [queriesList, setQueriesList] = useState<MediaQueryList[]>([]);
  const [matches, setMatches] = useState<boolean[]>([]);

  const result: Record<string, boolean> = {};

  const getMatches = () => queriesList.map((media) => media.matches);
  const handleSetMatches = () => {
    setMatches(getMatches());
  };

  useEffect(() => {
    if (typeof window === 'undefined') return;

    setQueriesList(queries.map((query) => window.matchMedia(query)));
  }, []);

  useEffect(() => {
    if (!queriesList.length) return;

    setMatches(getMatches());
  }, [queriesList]);

  useEffect(() => {
    queriesList.forEach((media) => media.addEventListener('change', handleSetMatches));

    return () => {
      queriesList.forEach((media) => media.removeEventListener('change', handleSetMatches));
    };
  });

  sizeNames.forEach((name, index) => {
    result[name] = matches[index];
  });

  return result;
}
