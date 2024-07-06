import { baseApi } from "../../../api/baseApi";

const experinceApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllExperince: builder.query({
      query: () => ({
        url: "/experince",
        method: "GET",
      }),
      providesTags: ["experince"],
    }),

    addExperince: builder.mutation({
      query: (data) => ({
        url: "/experince/create-experince",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["experince"],
    }),
  }),
});

export const {
  useAddExperinceMutation,
  useGetAllExperinceQuery
} = experinceApi;