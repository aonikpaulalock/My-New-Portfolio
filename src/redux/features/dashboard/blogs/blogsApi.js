import { baseApi } from "../../../api/baseApi";


const blogsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllBlogs: builder.query({
      query: () => ({
        url: "/blogs",
        method: "GET",
      }),
      providesTags: ["blogs"],
    }),

    addBlogs: builder.mutation({
      query: (data) => ({
        url: "/blogs/create-blog",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["blogs"],
    }),
  }),
});

export const {
  useAddBlogsMutation,
  useGetAllBlogsQuery
} = blogsApi;