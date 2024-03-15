import { TClothManagement } from "../../../types/clothManagement.type";
import { TResponseRedux } from "../../../types/global";
import { baseApi } from "../../api/baseApi";

const clothManagementApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // add cloth
    addCloth: builder.mutation({
      query: (data) => ({
        url: "/create-winter-clothes",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["winterCloth"],
    }),

    // get all cloth
    getAllCloths: builder.query({
      query: () => {
        return { url: "/winter-clothes", method: "GET" };
      },
      providesTags: ["winterCloth"],
      transformResponse: (response: TResponseRedux<TClothManagement[]>) => {
        console.log(response);
        return {
          data: response.data,
          meta: response.meta,
        };
      },
    }),

    // get single cloth
    getSingleCloth: builder.query({
      query: (clothId) => `/winter-clothes/${clothId}`,

      // {
      //   return { url: `/winter-clothes/${clothId}`, method: "GET" };
      // },
      // providesTags: ["winterCloth"],
      // transformResponse: (response: TResponseRedux<TClothManagement[]>) => {
      //   console.log(response);
      //   return {
      //     data: response.data,
      //     meta: response.meta,
      //   };
      // },
    }),

    // update cloth
    updateCloth: builder.mutation({
      query: ({ clothId, data }) => ({
        url: `/winter-clothes/${clothId}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["winterCloth"],
    }),

    // delete cloth
    deleteCloth: builder.mutation({
      query: (clothId) => ({
        url: `/winter-clothes/${clothId}`,
        method: "DELETE",
      }),
      invalidatesTags: ["winterCloth"],
    }),
  }),
});

export const {
  useAddClothMutation,
  useGetAllClothsQuery,
  useGetSingleClothQuery,
  useUpdateClothMutation,
  useDeleteClothMutation,
} = clothManagementApi;
