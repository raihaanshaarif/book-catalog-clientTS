import { api } from "../api/apiSlice";

const bookApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getBooks: builder.query({
      query: () => "/book",
    }),
    getSingleBooks: builder.query({
      query: (id) => `/book/${id}`,
    }),
    getComments: builder.query({
      query: (id) => `/book/comment/${id}`,
      providesTags: ["comments"],
    }),
    postComments: builder.mutation({
      query: ({ id, data }) => ({
        url: `/book/comment/${id}`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comments"],
    }),
  }),
});

export const {
  useGetBooksQuery,
  useGetSingleBooksQuery,
  useGetCommentsQuery,
  usePostCommentsMutation,
} = bookApi;
