// import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi } from "@reduxjs/toolkit/query/react";

// export const comment = createApi({
//   reducerPath: "comment",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `/comment`,
//     credentials: "include",
//   }),
//   tagTypes: ["Comment"],
//   endpoints: (builder) => ({
//     addComment: builder.mutation({
//       query: (body) => ({
//         url: "/",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["Comment"],
//     }),
//     allComments: builder.query({
//       query: (id) => `/video-comments/${id}`,
//       providesTags: ["Comment"],
//     }),
//     likeComment: builder.mutation({
//       query: (body) => ({
//         url: "/like",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["Comment"],
//     }),
//   }),
// });

// export const {
//   useAddCommentMutation,
//   useAllCommentsQuery,
//   useLikeCommentMutation,
// } = comment;
