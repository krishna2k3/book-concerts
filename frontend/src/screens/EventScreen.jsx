import { useParams, useNavigate } from "react-router-dom";
import { useGetEventDetailsQuery } from "../slices/eventsApiSlice";
import Loader from "../components/Loader";

const EventScreen = () => {
  const { id: eventId } = useParams();

  const { data: event, isLoading, refetch, error } = useGetEventDetailsQuery(eventId);

  {
    if (!isLoading) console.log(event);
  }

  return (
    <div>
      EventScreen
      <p>{eventId}</p>
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <h1>{event.eventName}</h1>
          <p>{event.price}</p>
        </div>
      )}
    </div>
  );
};

export default EventScreen;
