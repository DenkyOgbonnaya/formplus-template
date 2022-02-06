import axios from "axios";

const appAxios = axios.create({
  headers: {
    "Access-Control-Allow-Origin": true,
    crossorigin: true,
  },
});

export const handleGetRequest = async <T>(payload: string): Promise<T> => {
  try {
    const { data } = await appAxios.get(payload);
    return data;
  } catch (err) {
    console.log("");
    throw err;
  }
};

export const handlePostRequest = async <T>(path: string, payload: T) => {
  try {
    const { data } = await appAxios.post(`${path}`, payload);
    return data;
  } catch (err) {
    console.log("");
    throw err;
  }
};
export const handleDeleteRequest = async <T>(payload: T) => {
  try {
    const { data } = await appAxios.delete(`${payload}`);
    return data;
  } catch (err) {
    console.log("");
    throw err;
  }
};
