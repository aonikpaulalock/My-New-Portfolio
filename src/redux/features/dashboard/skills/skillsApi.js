import { baseApi } from "../../../api/baseApi";


const skillsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAllSkills: builder.query({
      query: () => ({
        url: "/skills",
        method: "GET",
      }),
      providesTags: ["skills"],
    }),

    addSkills: builder.mutation({
      query: (data) => ({
        url: "/skills/create-project",
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["skills"],
    }),
  }),
});

export const {
  useAddSkillsMutation,
  useGetAllSkillsQuery
} = skillsApi;