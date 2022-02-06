import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ITemplate } from "sharable/interface";
import { fetchFormTemplates } from "./templateThunk";

interface TemplateState {
  templates: ITemplate[];
  loading: boolean;
}
const initialState: TemplateState = {
  templates: [],
  loading: false,
};

export const TemplateSlice = createSlice({
  name: "templates",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchFormTemplates.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchFormTemplates.fulfilled, (state, { payload }) => {
        state.templates = payload;
        state.loading = false;
      });
  },
});

export default TemplateSlice.reducer;
