/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const commentManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add comment
    addComment: builder.mutation({
      query: (data) => ({
        url: "/create-comment",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),

    // get all cloth
    getAllComments: builder.query({
      query: () => {
        return { url: "/comments", method: "GET" };
      },
      providesTags: ["comment"],
      transformResponse: (response: any) => {
        console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    // get single comment
    getSingleComment: builder.query({
      query: (commentId) => `/comments/${commentId}`,
    }),

    // update comment
    updateComment: builder.mutation({
      query: ({ commentId, data }) => ({
        url: `/comments/${commentId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["comment"],
    }),

    // delete cloth
    deleteComment: builder.mutation({
      query: (commentId) => ({
        url: `/comments/${commentId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["comment"],
    }),
  }),
});

export const {
  useAddCommentMutation,
  useGetAllCommentsQuery,
  useGetSingleCommentQuery,
  useUpdateCommentMutation,
  useDeleteCommentMutation,
} = commentManagementApi;
