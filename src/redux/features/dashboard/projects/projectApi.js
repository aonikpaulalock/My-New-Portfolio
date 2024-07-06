import { baseApi } from "../../../api/baseApi";



const projectsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllProjects: builder.query({
      query: () => ({
        url: "/projects",
        method: "GET",
      }),
      providesTags: ["projects"],
    }),

    addProjects: builder.mutation({
      query: (data) => ({
        url: "/projects/create-project",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["projects"],
    }),
  }),
});

export const {
  useAddProjectsMutation,
  useGetAllProjectsQuery
} = projectsApi;