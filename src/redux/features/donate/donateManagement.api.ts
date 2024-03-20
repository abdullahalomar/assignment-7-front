/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../api/baseApi";

const donateManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add donate
    addDonate: builder.mutation({
      query: (data) => ({
        url: "/create-donate",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["donate"],
    }),

    // get all donate
    getAllDonates: builder.query({
      query: () => {
        return { url: "/donate", method: "GET" };
      },
      providesTags: ["donate"],
      transformResponse: (response: any) => {
        console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),
  }),
});

export const { useAddDonateMutation, useGetAllDonatesQuery } =
  donateManagementApi;
