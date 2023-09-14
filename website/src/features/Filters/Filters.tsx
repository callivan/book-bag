import { IconCross, IconSearch } from '@shared/icons';
import { Search } from '@shared/ui';
import {
  setBooks,
  setCategory,
  setPage,
  setSearch,
  setSorting,
  useDispatchTyped,
  useGetCategory,
  useGetSearch,
  useGetSorting,
} from '@store';
import { ECategories, ESorting } from '@types';
import classNames from 'classnames';
import { useEffect, useMemo } from 'react';
import { useSearchParams } from 'react-router-dom';

import { SelectCustom, TSelectCustomData } from './components';
import { TDiv } from './types/component';

export function Filters({ className, ...props }: TDiv) {
  const dispatch = useDispatchTyped();

  const search = useGetSearch();
  const category = useGetCategory();
  const sorting = useGetSorting();

  const [searchParams, setSearchParams] = useSearchParams();

  const categories = [
    { id: '1', name: ECategories.ALL },
    { id: '2', name: ECategories.ART },
    { id: '3', name: ECategories.BIOGRAPHY },
    { id: '4', name: ECategories.COMPUTERS },
    { id: '5', name: ECategories.HISTORY },
    { id: '6', name: ECategories.MEDICAL },
    { id: '7', name: ECategories.POETRY },
  ];

  const sortingBy = [
    { id: '1', name: ESorting.NEWEST },
    { id: '2', name: ESorting.RELEVANCE },
  ];

  const activeCategory = useMemo(
    () => categories.find(({ name }) => name === category),
    [category],
  );

  const activeSorting = useMemo(() => sortingBy.find(({ name }) => name === sorting), [sorting]);

  const addSearchParams = (key: string, value: string) => {
    setSearchParams((params) => {
      params.set(key, value);
      return params;
    });
  };

  const deletSearchParams = (key: string) => {
    setSearchParams((params) => {
      params.delete(key);
      return params;
    });
  };

  const cleaneOptions = () => {
    dispatch(setPage(0));
    dispatch(setBooks([]));
  };

  const handleSubmit = (value: string) => {
    if (value === search) return;

    dispatch(setSearch(value));
    cleaneOptions();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const q = searchParams.get('q');
    const subject = q ? q.split('+')[1] : null;

    addSearchParams('q', `${e.currentTarget.value}${subject ? `+${subject}` : ''}`);
  };

  const handleClean = () => {
    const q = searchParams.get('q');
    const subject = q ? q.split('+')[1] : null;

    deletSearchParams('q');

    if (subject) {
      addSearchParams('q', `+${subject}`);
    }

    dispatch(setSearch(''));
    cleaneOptions();
  };

  const handleSelectCategory = (data: TSelectCustomData) => {
    if (data.id === activeCategory?.id) return;

    const q = searchParams.get('q');
    const search = q ? q.replace(/\+subject:\w+/gi, '') : '';

    addSearchParams('q', `${search}+subject:${data.name}`);
    dispatch(setCategory(data.name as ECategories));
    cleaneOptions();
  };

  const handleSelectSorting = (data: TSelectCustomData) => {
    if (data.id === activeSorting?.id) return;

    addSearchParams('orderBy', data.name);
    dispatch(setSorting(data.name as ESorting));
    cleaneOptions();
  };

  useEffect(() => {
    searchParams.forEach((value, key) => {
      if (key && key === 'orderBy' && value) {
        dispatch(setSorting(value as ESorting));
      }

      if (key && key === 'q' && value) {
        const matches = value.match(/(\w+)|(\+\w:)(\w+)/gi);

        matches && matches[2] && dispatch(setCategory(matches[2] as ECategories));
        matches && matches[0] && dispatch(setSearch(matches[0]));
      }
    });
  }, []);

  return (
    <div
      className={classNames(
        //Custom class name
        className,

        //Flex
        'flex items-center justify-end flex-grow gap-x-1 gap-y-4 flex-wrap-reverse',
        //Mobile big
        's:items-start s:flex-col-reverse',

        //Size
        'w-full',
      )}
      {...props}
    >
      <div
        className={classNames(
          //Flex
          'flex items-center justify-end flex-grow',
          //Mobile big
          's:flex-grow-0',

          //Size
          'max-w-[440px] min-w-[300px]',
          //Mobile big
          's:min-w-full s:max-w-full',
        )}
      >
        <SelectCustom
          portalId="select-categories"
          placeholder="Categories:"
          activeItem={activeCategory}
          data={categories}
          onClick={handleSelectCategory}
          className={classNames(
            //Flex
            'flex-shrink',
            //Mobile big
            's:flex-grow',

            //Size
            'w-full max-w-[220px]',
            //Mobile big
            's:max-w-full',
          )}
        />

        <SelectCustom
          portalId="select-sort"
          placeholder="Sorting by:"
          activeItem={activeSorting}
          data={sortingBy}
          onClick={handleSelectSorting}
          className={classNames(
            //Flex
            'flex-shrink',
            //Mobile big
            's:flex-grow',

            //Size
            'w-full max-w-[220px]',
            //Mobile big
            's:max-w-full',
          )}
        />
      </div>

      <Search
        placeholder="Search"
        cleaner={{
          iconCross: <IconCross width={16} height={16} />,
          onClean: handleClean,
        }}
        iconSearch={<IconSearch width={16} height={16} />}
        value={searchParams.get('q')?.replace(/\+subject:\w+/gi, '') ?? ''}
        name="search"
        className={classNames(
          //Size
          'w-[220px]',
          //Mobile big
          's:w-full',
        )}
        onSubmit={handleSubmit}
        onChange={handleChange}
      />
    </div>
  );
}
