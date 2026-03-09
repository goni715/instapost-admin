import { createSlice, type PayloadAction } from "@reduxjs/toolkit";


type TInitialState = {
  adminCreateError: string;
  adminUpdateError: string;
}

const initialState: TInitialState = {
  adminCreateError: "",
  adminUpdateError: "",
};

const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    SetAdminCreateError: (state, action: PayloadAction<string>) => {
      state.adminCreateError = action.payload;
    },
    SetAdminUpdateError: (state, action: PayloadAction<string>) => {
      state.adminUpdateError = action.payload;
    },
  },
});

export const {
  SetAdminCreateError,
  SetAdminUpdateError,
} = adminSlice.actions;

const adminSliceReducer = adminSlice.reducer;
export default adminSliceReducer;
