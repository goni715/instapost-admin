/* eslint-disable @typescript-eslint/no-unused-vars */
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import TagTypes from "@/constants/tagType.constant";

const baseUrl = "http://localhost:5000";


const baseQuery = fetchBaseQuery({
  baseUrl: baseUrl,
  credentials: "include",
  prepareHeaders: async (headers) => {
    // if (getToken()) {
    //   headers.set("Authorization", getToken() as string);
    // }
    return headers;
  },
});

export const apiSlice = createApi({
  reducerPath: "api",
  baseQuery: async (args, api, extraOptions) => {
    const result = await baseQuery(args, api, extraOptions);
    if (result?.error?.status === 401) {
      //console.log(`Sending Refresh Token`);
      const res = await fetch(`${baseUrl}/auth/refresh-token`, {
        method: 'POST',
        credentials: 'include'
      });

      const data = await res.json();

      // if (data?.data?.accessToken) {
      //   setToken(data?.data?.accessToken)
      // }
      // else { //invalid or expired refreshToken
      //   localStorage.clear();
      //   ErrorToast("Session expired. Please log in again.");
      //   window.location.href = "/";
      // }
    }
    return result;
  },
  tagTypes: Object.values(TagTypes), //TagS WhiteLists
  endpoints: (_builder) => ({}),
});
