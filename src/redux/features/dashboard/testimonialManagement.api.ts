/* eslint-disable @typescript-eslint/no-explicit-any */
import { baseApi } from "../../api/baseApi";

const testimonialManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add testimonial
    addTestimonial: builder.mutation({
      query: (data) => ({
        url: "/create-testimonial",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["testimonial"],
    }),

    // get all cloth
    getAllTestimonials: builder.query({
      query: () => {
        return { url: "/testimonials", method: "GET" };
      },
      providesTags: ["testimonial"],
      transformResponse: (response: any) => {
        console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

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

export const { useAddTestimonialMutation, useGetAllTestimonialsQuery } =
  testimonialManagementApi;
