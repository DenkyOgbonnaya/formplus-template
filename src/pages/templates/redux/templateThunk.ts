import { createAsyncThunk } from "@reduxjs/toolkit";
import { GET_TASK_TEMPLATES } from "constants/api";
import { handleGetRequest } from "services/axios";
import { ITemplate } from "sharable/interface";
import { FETCH_TEMPLATES } from "./templateActionTypes";

export const fetchFormTemplates = createAsyncThunk(
  FETCH_TEMPLATES,
  async () => {
    const response = await handleGetRequest<ITemplate[]>(GET_TASK_TEMPLATES);
    return response;
  }
);
