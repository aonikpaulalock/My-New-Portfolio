import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseQuery = fetchBaseQuery({
  // baseUrl: "http://localhost:5000/api/v1",
  baseUrl: "https://portfolio-server-eight-kappa.vercel.app/api/v1",
  credentials: "include",
  prepareHeaders: function (headers, { getState }) {
    const token = getState().auth.token;
    if (token) {
      headers.set('authorization', `${token}`);
    }
    return headers;
  }
});

export const baseApi = createApi({
  reducerPath: "baseApi",
  baseQuery: baseQuery,
  tagTypes: ["experince", "projects", "skills", "blogs"],
  endpoints: () => ({}),
});