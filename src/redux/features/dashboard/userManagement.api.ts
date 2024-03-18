/* eslint-disable @typescript-eslint/no-explicit-any */

import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const clothManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // all user
    getAllUsers: builder.query({
      query: () => {
        return { url: "/users", method: "GET" };
      },
      providesTags: ["user"],
      transformResponse: (response: TResponseRedux<any>) => {
        console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    // get single cloth
    getSingleUser: builder.query({
      query: (userId) => `/users/${userId}`,
    }),
  }),
});

export const { useGetAllUsersQuery, useGetSingleUserQuery } =
  clothManagementApi;
