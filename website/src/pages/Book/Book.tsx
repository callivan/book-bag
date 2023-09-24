import { Error } from '@entities';
import { Scroll } from '@shared/ui';
import { useGetBookQuery } from '@store';
import { lazy, Suspense, useEffect } from 'react';
import { ErrorBoundary } from 'react-error-boundary';
import { Helmet } from 'react-helmet-async';
import { useNavigate, useParams } from 'react-router-dom';

import { ContentLoading } from './components';
import styles from './styles.module.scss';

const Content = lazy(() => import('./components/Content/Content'));

export default function Book() {
  const navigate = useNavigate();
  const { id } = useParams<{ id: string }>();

  const { data, isError, isLoading, isFetching } = useGetBookQuery({ bookId: id || '' });

  const isPending = isLoading || isFetching;

  const title = isPending ? 'Loading...' : data ? data.volumeInfo.title : '';

  const handleReset = () => {
    navigate('/', { replace: true });
  };

  const handleBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    isError && navigate('/serverError', { replace: true });
  }, [isError]);

  return (
    <>
      <Helmet>
        <title>{`Book bag | ${title}`}</title>
        <meta property="og:title" content={`Book bag | ${title}`} />
        <meta name="twitter:title" content={`Book bag | ${title}`} />
      </Helmet>

      <div className={styles.book}>
        <Scroll>
          <>
            {data ? (
              <Suspense>
                <ErrorBoundary
                  FallbackComponent={() => (
                    <Error text="Problems with the content component! 😢" onReset={handleReset} />
                  )}
                >
                  <Content book={data} onBack={handleBack} />
                </ErrorBoundary>
              </Suspense>
            ) : null}
            {isPending ? <ContentLoading /> : null}
          </>
        </Scroll>
      </div>
    </>
  );
}
