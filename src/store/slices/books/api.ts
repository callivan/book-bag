import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ECategories, IBookAttributes } from '@types';

import { IBooksQueryProps, IBooksResponseAttributes } from './types';

// Для оптимизации запроса используем возможность "Частичного ответа":
// запрос, в котором вы указываете, какие поля включить в ответ (XPath формат).
const BOOKS_INCLUDED_FIELDS =
  'totalItems,items(id,volumeInfo(title,authors,categories,imageLinks))';

const BOOK_INCLUDED_FIELDS = 'id,volumeInfo(title,description,authors,categories,imageLinks)';

export const LIMIT = 30;

export const booksSlice = createApi({
  reducerPath: 'booksAPI',
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    headers: {
      'X-goog-api-key': import.meta.env.VITE_API_KEY,
      'Set-Cookie': 'SameSite=Lax; Secure',
    },
  }),
  endpoints: (builder) => ({
    getBooks: builder.query<IBooksResponseAttributes, IBooksQueryProps>({
      query: ({ category, orderBy, search, startIndex }) => {
        const subject = category && category !== ECategories.ALL ? `subject:${category}` : '';

        return {
          url: '/volumes',
          params: {
            q: search ? `${search}${subject ? `+${subject}` : ''}` : subject || undefined,
            fields: BOOKS_INCLUDED_FIELDS,
            orderBy: orderBy || undefined,
            maxResults: LIMIT,
            startIndex,
          },
        };
      },
    }),
    getBook: builder.query<IBookAttributes, { bookId: string }>({
      query: ({ bookId }) => ({
        url: `/volumes/${bookId}`,
        params: { fields: BOOK_INCLUDED_FIELDS },
      }),
    }),
  }),
});

export const { useGetBooksQuery, useGetBookQuery } = booksSlice;
