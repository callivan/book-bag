import { lazy, Suspense } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import { Layout } from './Layout';

const PageBooks = lazy(() => import('../pages/Books/Books'));
const PageBook = lazy(() => import('../pages/Book/Book'));
const PageError = lazy(() => import('../pages/Error/Error'));

export function App() {
  return (
    <RouterProvider
      router={createBrowserRouter([
        {
          path: '/',
          element: <Layout />,
          errorElement: (
            <Suspense>
              <PageError text="Page not found! 😩" />
            </Suspense>
          ),
          children: [
            {
              path: '/',
              element: (
                <Suspense>
                  <PageBooks />
                </Suspense>
              ),
            },
            {
              path: ':id',
              element: (
                <Suspense>
                  <PageBook />
                </Suspense>
              ),
            },
          ],
        },
        {
          path: '/serverError',
          element: (
            <Suspense>
              <PageError text="Server error! 😩" />
            </Suspense>
          ),
        },
      ])}
    />
  );
}
