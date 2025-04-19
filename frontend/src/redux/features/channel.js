// import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi } from "@reduxjs/toolkit/query/react";

// export const channel = createApi({
//   reducerPath: "channel",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `/channel`,
//     credentials: "include",
//   }),
//   tagTypes: ["channel"],
//   endpoints: (builder) => ({
//     subscribeChannel: builder.mutation({
//       query: (body) => ({
//         url: "/subscribe",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["channel"],
//     }),
//   }),
// });

// export const { useSubscribeChannelMutation } = channel;
