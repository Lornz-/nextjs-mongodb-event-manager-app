// vendors
import useSWR from 'swr';

// utils
import { getDateTimeWithTZ } from '@/utils/date';
import { fetcher } from '@/utils/fetch';

const useEvents = () => {
  // const [events, setEvents] = React.useState([]);
  const { data, error, isLoading } = useSWR('/api/events', fetcher);

  const normalizedEvents =
    data?.events
      ?.sort((a, b) => new Date(a.startDate) - new Date(b.startDate))
      .map((event) => ({
        ...event,
        start: getDateTimeWithTZ(event.startDate, navigator?.language),
        end: getDateTimeWithTZ(event.endDate, navigator?.language),
      })) || [];

  return {
    events: [...normalizedEvents],
    isLoading,
    isError: error,
  };
};

export default useEvents;
