import axios from "axios";

console.log(process.env.REACT_APP_API_URL);
const instance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
});

//on successful response
instance.interceptors.response.use(
  async (response) => {
    console.log({ response });
    return response;
  },
  async (error) => {
    console.log({ error });
    if (error?.response?.status === 401) {
      // client received an error response (5xx, 4xx)
      // got 401 => clean jwt => refresh page
      return Promise.reject(error);
    } else if (error.request) {
      // client never received a response, or request never left
      return Promise.reject(error);
    } else {
      // anything else
      return Promise.reject(error);
    }
  }
);

export type RequestType = {
  method: "POST" | "GET" | "PATCH" | "DELETE" | "PUT",
  path: String,
  data?: any,
  params?: any,
};

export const request = <T, R>({
  method,
  path,
  data,
  params,
}: T): Promise<R> => {
  switch (method) {
    case "DELETE":
      return instance.delete(path);
    case "GET":
      return instance.get(path, { params });
    case "PATCH":
      return instance.patch(path, data, { params });
    case "POST":
      return instance.post(path, data, { params });
    case "PUT":
      return instance.put(path, data, { params });
    default:
      return instance.get(path, { params });
  }
};
