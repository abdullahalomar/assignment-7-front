/* eslint-disable @typescript-eslint/no-explicit-any */

import { baseApi } from "../../api/baseApi";

const authApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    // login user
    login: builder.mutation({
      query: (userInfo) => ({
        url: "/login",
        method: "POST",
        body: userInfo,
      }),
    }),

    // register user
    register: builder.mutation({
      query: (userData) => ({
        url: "/register",
        method: "POST",
        body: userData,
      }),
    }),
  }),
});

export const { useLoginMutation, useRegisterMutation } = authApi;
