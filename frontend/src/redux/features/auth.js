// import { fetchBaseQuery } from "@reduxjs/toolkit/query/react";
// import { createApi } from "@reduxjs/toolkit/query/react";

// export const auth = createApi({
//   reducerPath: "auth",
//   baseQuery: fetchBaseQuery({
//     baseUrl: `/auth`,
//     credentials: "include",
//   }),
//   tagTypes: ["User"],
//   endpoints: (builder) => ({
//     loginUser: builder.mutation({
//       query: (body) => ({
//         url: "/login",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["User"],
//     }),
//     registerUser: builder.mutation({
//       query: (body) => ({
//         url: "/register",
//         method: "POST",
//         body,
//       }),
//       invalidatesTags: ["User"],
//     }),
//     logoutUser: builder.mutation({
//       query: () => ({
//         url: "/logout",
//         method: "POST",
//       }),
//       invalidatesTags: ["User"],
//     }),
//     getUser: builder.query({
//       query: () => "/user-data",
//       providesTags: ["User"],
//     }),
//   }),
// });

// export const {
//   useLoginUserMutation,
//   useRegisterUserMutation,
//   useLogoutUserMutation,
//   useGetUserQuery,
// } = auth;
