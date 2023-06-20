import { EVENTS_URL, UPLOAD_URL } from "../constants";
import { apiSlice } from "./apiSlice";

export const eventsApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    getEvents: builder.query({
      query: () => ({
        url: EVENTS_URL,
      }),
      providesTags: ["Event"],
      keepUnusedDataFor: 5,
    }),
    getEventById: builder.query({
      query: (eventId) => ({
        url: `${EVENTS_URL}/${eventId}`,
      }),
      keepUnusedDataFor: 5,
    }),
  }),
});

export const { useGetEventsQuery } = eventsApiSlice;
