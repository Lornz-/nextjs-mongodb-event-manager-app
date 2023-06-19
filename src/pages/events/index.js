// vendors
import React from 'react';
import { toast } from 'react-hot-toast';

// hooks
import useEvents from '@/hooks/useUsers';

// views
import EventsPageView from './EventsPageView';

const EventsPage = () => {
  const { events, isLoading, isError } = useEvents();

  if (isError) {
    toast.error(
      `Something wrong happened on our end. Please try again later.
      If the problem persists, please contact our technical support.`
    );

    return;
  }

  return <EventsPageView events={events} isLoading={isLoading} />;
};

export default EventsPage;
