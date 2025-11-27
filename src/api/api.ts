import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const baseUrl = "https://tasks-service-maks1394.amvera.io";

export const baseApi = createApi({
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Tasks"],
  endpoints: () => ({}),
});
