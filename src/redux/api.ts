import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl: "https://api.pay.ppnp.me/api/" }),
  endpoints: (builder) => ({
    getQR: builder.query<string, string>({
      query: (clientId) => ({
        url: `qr/generate/?client_id=${clientId}`,
        method: "GET",
      }),
    }),
    getBasket: builder.query<any, string>({
      query: (shopId) => ({
        url: `addons/get_basket/?shop_id=${shopId}`,
        method: "GET",
      }),
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useGetQRQuery, useGetBasketQuery } = api;
