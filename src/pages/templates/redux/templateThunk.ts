import { createAsyncThunk } from "@reduxjs/toolkit";
import { handleGetRequest } from "services/axios";
import { ITemplate } from "sharable/interface";
import { FETCH_TEMPLATES } from "./templateActionTypes";

export const fetchFormTemplates = createAsyncThunk(
  FETCH_TEMPLATES,
  async (taskTemplateApi: string) => {
    const response = await handleGetRequest<ITemplate[]>(taskTemplateApi);
    return response;
  }
);
