/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../api/baseApi";

const volunteerManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add volunteer
    addVolunteer: builder.mutation({
      query: (data) => ({
        url: "/create-volunteer",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["volunteer"],
    }),

    // get all volunteers
    getAllVolunteers: builder.query({
      query: () => {
        return { url: "/volunteer", method: "GET" };
      },
      providesTags: ["volunteer"],
      transformResponse: (response: any) => {
        console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    // delete volunteer
    deleteVolunteer: builder.mutation({
      query: (volunteerId) => ({
        url: `/volunteer/${volunteerId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["volunteer"],
    }),
  }),
});

export const {
  useAddVolunteerMutation,
  useGetAllVolunteersQuery,
  useDeleteVolunteerMutation,
} = volunteerManagementApi;
