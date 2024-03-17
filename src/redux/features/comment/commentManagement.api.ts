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

    // get single cloth
    // getSingleCloth: builder.query({
    //   query: (clothId) => `/winter-clothes/${clothId}`,
    // }),

    // update cloth
    // updateCloth: builder.mutation({
    //   query: ({ clothId, data }) => ({
    //     url: `/winter-clothes/${clothId}`,
    //     method: "PUT",
    //     body: data,
    //   }),
    //   invalidatesTags: ["winterCloth"],
    // }),

    // delete cloth
    // deleteCloth: builder.mutation({
    //   query: (clothId) => ({
    //     url: `/winter-clothes/${clothId}`,
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["winterCloth"],
    // }),
  }),
});

export const { useAddCommentMutation, useGetAllCommentsQuery } =
  commentManagementApi;
