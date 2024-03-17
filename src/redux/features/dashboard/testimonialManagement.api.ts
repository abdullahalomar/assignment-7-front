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

    // get all testimonial
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

    // get single testimonial
    getSingleTestimonial: builder.query({
      query: (testimonialId) => `/testimonials/${testimonialId}`,
    }),

    // update testimonial
    updateTestimonial: builder.mutation({
      query: ({ testimonialId, data }) => ({
        url: `/testimonials/${testimonialId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["testimonial"],
    }),

    // delete testimonial
    deleteTestimonial: builder.mutation({
      query: (testimonialId) => ({
        url: `/testimonials/${testimonialId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["testimonial"],
    }),
  }),
});

export const {
  useAddTestimonialMutation,
  useGetAllTestimonialsQuery,
  useDeleteTestimonialMutation,
  useGetSingleTestimonialQuery,
  useUpdateTestimonialMutation,
} = testimonialManagementApi;
