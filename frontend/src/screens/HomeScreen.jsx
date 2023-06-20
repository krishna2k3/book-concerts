import { useEffect, useState } from "react";
import { useGetEventsQuery } from "../slices/eventsApiSlice";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import Loader from "../components/Loader";

const HomeScreen = () => {
  const { data, isLoading, error } = useGetEventsQuery({});
  const events = data;
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="sr-only">Products</h2>
        {isLoading ? (
          <div className="flex justify-center">
            <Loader />
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {events.map((event) => (
              <Link
                key={event._id}
                to={`/event/${event._id}`}
                className="group"
              >
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={event.imageSrc}
                    alt={event.eventName}
                    className="h-full w-full object-cover object-center group-hover:opacity-75"
                  />
                </div>
                <h3 className="mt-4 text-xl text-gray-700">{event.eventName}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">
                  Rs. {event.price * 100}
                </p>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HomeScreen;
