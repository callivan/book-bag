import { Empty, Error } from '@entities';
import { Scroll } from '@shared/ui';
import {
  LIMIT,
  setBooks,
  setPage,
  setSearch,
  setTotal,
  useDispatchTyped,
  useGetBooks,
  useGetBooksQuery,
  useGetCategory,
  useGetPage,
  useGetSearch,
  useGetSorting,
  useGetToral,
} from '@store';
import { IBookAttributes } from '@types';
import { FooterLoading, ListLoading } from '@widgets';
import { lazy, Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';

import styles from './styles.module.scss';

const List = lazy(() => import('../../widgets/List/List'));
const Footer = lazy(() => import('../../widgets/Footer/Footer'));

// eslint-disable-next-line sonarjs/cognitive-complexity
export default function Books() {
  const dispatch = useDispatchTyped();
  const navigate = useNavigate();

  const search = useGetSearch();
  const category = useGetCategory();
  const orderBy = useGetSorting();
  const page = useGetPage();
  const books = useGetBooks();
  const total = useGetToral();

  const isSkip = !search || !search.replace(/\+subject:\w+/gi, '');

  const { data, isError, isLoading, isFetching } = useGetBooksQuery(
    { search, category, orderBy, startIndex: page },
    { skip: isSkip },
  );

  const isPending = isLoading || isFetching;
  const isLoadMore = !!data?.items && total > page && total > LIMIT;

  const title = isPending ? 'Loading...' : `List has ${total}`;

  const handleReset = () => {
    dispatch(setSearch(''));
    location.reload();
  };

  const handleLoad = () => {
    dispatch(setPage(page + LIMIT));
  };

  useEffect(() => {
    isError && navigate('/serverError', { replace: true });

    return () => {
      dispatch(setSearch(''));
      dispatch(setBooks([]));
      dispatch(setPage(0));
      dispatch(setTotal(0));
    };
  }, [isError]);

  useEffect(() => {
    if (data) {
      data.items && dispatch(setBooks(books.concat(data.items)));
      data.totalItems && dispatch(setTotal(data.totalItems));
    }
  }, [data]);

  return (
    <>
      <Helmet>
        <title>{`Book bag | ${title}`}</title>
        <meta property="og:title" content={`Book bag | ${title}`} />
        <meta name="twitter:title" content={`Book bag | ${title}`} />
      </Helmet>

      <div className={styles.books}>
        <div className={styles.books__wrapper}>
          <Scroll>
            <>
              <ListElement data={books} onReset={handleReset} />
              <ListLoadingElement isPending={isPending} />
              <EmptyElement search={search} isPending={isPending} data={books} />
            </>
          </Scroll>

          <div className={styles.books__footer}>
            <FooterElement
              count={total}
              isPending={isPending}
              isLoadMore={isLoadMore}
              onLoad={handleLoad}
            />
            <FooterLoadingElement isPending={isPending} />
          </div>
        </div>
      </div>
    </>
  );
}

function ListElement({ data, onReset }: { data: IBookAttributes[]; onReset: () => void }) {
  return data.length ? (
    <Suspense>
      <ErrorBoundary
        FallbackComponent={() => (
          <Error text="Problems with the list component! 😢" onReset={onReset} />
        )}
      >
        <List items={data} />
      </ErrorBoundary>
    </Suspense>
  ) : null;
}

function ListLoadingElement({ isPending }: { isPending: boolean }) {
  return isPending ? <ListLoading length={30} /> : null;
}

function EmptyElement({
  search,
  isPending,
  data,
}: {
  search: string;
  isPending: boolean;
  data: IBookAttributes[];
}) {
  return !data.length && !isPending ? (
    <Empty
      text={!search ? 'Specify the search criteria! 🔍' : 'There is nothing on your request! 🧐'}
    />
  ) : null;
}

function FooterElement({
  count = 0,
  isPending,
  isLoadMore,
  onLoad,
}: {
  isPending: boolean;
  isLoadMore: boolean;
  count?: number;
  onLoad: () => void;
}) {
  return !isPending ? (
    <Suspense>
      <Footer isLoad={isLoadMore} count={count} onLoad={onLoad} />
    </Suspense>
  ) : null;
}

function FooterLoadingElement({ isPending }: { isPending: boolean }) {
  return isPending ? <FooterLoading /> : null;
}
