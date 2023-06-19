// vendors
import React, { useCallback, useMemo } from 'react';

// utils
import randomString from '@/utils/math/randomString';

// components
import EventList from '@/components/EventList';
import EventCard from '@/components/EventList/EventCard';
import IconButton from '@/components/IconButton';
import Paper from '@/components/Paper';
import Modal from '@/components/Modal';
import EventForm from '@/components/EventForm';
import Center from '@/components/LayoutSections/Center';
import CloseButton from '@/components/CloseButton';
import { useModal } from '@/components/Modal/Modal.context';
import { useRouter } from 'next/router';
import { toast } from 'react-hot-toast';
import normalize from '@/utils/normalize';
import { fetcher } from '@/utils/fetch';

// images
import IconPlus from '@/images/IconPlus';

// styles
import { h1Style } from '@/styles/global';
import {
  ModalContent,
  ModalHeader,
  Title,
  h2Style,
  modalTitleStyle,
  wrapperStyle,
} from './EventsPageView.styles';

const EventsPageView = ({ events, isLoading }) => {
  const { isOpen, open, close } = useModal();
  // const router = useRouter();

  const customId = useMemo(() => randomString(), []);

  const handleCreateEvent = (event) =>
    fetcher('/api/events', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: event.name,
        description: event.description,
        startDate: event.startDate,
        endDate: event.endDate,
      }),
    });

  return (
    <>
      <div>
        <div
          css={`
            display: flex;
            justify-content: space-between;
          `}
        >
          <h1 css={h1Style}>Events</h1>

          <IconButton
            primary
            label="New event"
            renderIcon={<IconPlus />}
            onClick={open}
          />
        </div>

        <section>
          <Title>
            <h2 css={h2Style}>Your upcoming events</h2>
          </Title>

          {isLoading ? (
            <Center intrinsic>Loading...</Center>
          ) : (
            <EventList>
              {events.map((event) => (
                <EventCard
                  key={`event-${event.name}`}
                  name={event.name}
                  description={event.description}
                  start={event.start}
                  end={event.end}
                />
              ))}
            </EventList>
          )}
        </section>
      </div>

      <Modal
        isOpen={isOpen}
        aria={{ labelledby: customId }}
        closeTimeoutMS={450}
        fullScreen
        noBorder
        noTransition
        noClose
      >
        <Center
          maxWidth="620px"
          gutters="var(--container-gutters)"
          css={wrapperStyle}
        >
          <Paper rounded overlaid>
            <ModalHeader>
              <h2 id={customId} css={modalTitleStyle}>
                Create your event
              </h2>

              <CloseButton onClose={close} small />
            </ModalHeader>

            <ModalContent>
              <EventForm onSubmit={handleCreateEvent} />
            </ModalContent>
          </Paper>
        </Center>
      </Modal>
    </>
  );
};

export default EventsPageView;
