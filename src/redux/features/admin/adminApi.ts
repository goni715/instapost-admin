/* eslint-disable @typescript-eslint/no-explicit-any */
import TagTypes from "@/constants/tagType.constant";
import { SetAdminCreateError, SetAdminUpdateError } from "./adminSlice";
import { ErrorToast, SuccessToast } from "@/helpers/ValidationHelper";
import { IParam } from "@/types/global.type";
import { apiSlice } from "../api/apiSlice";

export const adminApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getAdmins: builder.query({
      query: (args) => {
        const params = new URLSearchParams();
        if (args !== undefined && args.length > 0) {
          args.forEach((item: IParam) => {
            if (item.value) {
              params.append(item.name, item.value);
            }
          });
        }
        return {
          url: "/admin/get-admins",
          method: "GET",
          params: params,
        };
      },
      keepUnusedDataFor: 600,
      providesTags: [TagTypes.admins]
    }),
    createAdmin: builder.mutation({
      query: (data) => ({
        url: "/admin/create-admin",
        method: "POST",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.admins];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Admin is added successfully");
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            dispatch(SetAdminCreateError("Something Went Wrong"));
          }
          else {
            dispatch(SetAdminCreateError(message));
          }
        }
      },
    }),
    updateAdmin: builder.mutation({
      query: ({ id, data }) => ({
        url: `/admin/update-admin/${id}`,
        method: "PATCH",
        body: data,
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.admins];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled, dispatch }) {
        try {
          await queryFulfilled;
          SuccessToast("Admin is updated successfully");
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            dispatch(SetAdminUpdateError("Something Went Wrong"));
          }
          else {
            dispatch(SetAdminUpdateError(message));
          }
        }
      },
    }),
    deleteAdmin: builder.mutation({
      query: (id) => ({
        url: `/admin/delete-admin/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: (result) => {
        if (result?.success) {
          return [TagTypes.admins];
        }
        return [];
      },
      async onQueryStarted(_arg, { queryFulfilled }) {
        try {
          await queryFulfilled;
          SuccessToast("Admin is deleted successfully");
        } catch (err: any) {
          const status = err?.error?.status;
          const message = err?.error?.data?.message || "Something Went Wrong";
          if (status === 500) {
            ErrorToast("Something Went Wrong");
          }
          else {
            ErrorToast(message);
          }
        }
      },
    }),
  }),
});

export const { useGetAdminsQuery, useCreateAdminMutation, useUpdateAdminMutation, useDeleteAdminMutation } = adminApi;
