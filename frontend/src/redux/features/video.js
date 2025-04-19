// import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi } from "@reduxjs/toolkit/query/react";

// export const video = createApi({
//   reducerPath: "video",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `/video`,
//     credentials: "include",
//   }),
//   tagTypes: ["Video"],
//   endpoints: (builder) => ({
//     allVideos: builder.query({
//       query: () => "/",
//       providesTags: ["Video"],
//     }),
//     videoDetail: builder.query({
//       query: (id) => `/single-video/${id}`,
//       providesTags: ["Video"],
//     }),
//     likeVideo: builder.mutation({
//       query: (body) => ({
//         url: "/like",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["Video"],
//     }),
//     uploadVideo: builder.mutation({
//       query: (body) => ({
//         url: "/",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["Video"],
//     }),
//     updateVideo: builder.mutation({
//       query: (body) => ({
//         url: `/video-file`,
//         method: "PATCH",
//         body,
//       }),
//       invalidatesTags: ["Video"],
//     }),
//     updateThumbnail: builder.mutation({
//       query: (body) => ({
//         url: `/thumbnail`,
//         method: "PATCH",
//         body,
//       }),
//       invalidatesTags: ["Video"],
//     }),
//     // channelVideos: builder.mutation({
//     //   query: (body) => ({
//     //     url: "/auth/register",
//     //     method: "POST",
//     //     body,
//     //   }),
//     // }),
//   }),
// });

// export const {
//   useAllVideosQuery,
//   useVideoDetailQuery,
//   useLikeVideoMutation,
//   useUploadVideoMutation,
//   useUpdateVideoMutation,
//   useUpdateThumbnailMutation,
// } = video;
