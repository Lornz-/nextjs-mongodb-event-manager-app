// vendors
import React, { useMemo } from 'react';

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
import { fetcher } from '@/utils/fetch';

// images
import IconPlus from '@/images/IconPlus';

// styles
import { h1Style } from '@/styles/global';
import {
  Container,
  ModalContent,
  ModalHeader,
  Title,
  h2Style,
  modalTitleStyle,
  wrapperStyle,
} from './EventsPageView.styles';
import Stack from '@/components/LayoutSections/Stack';
import { em } from 'polished';
import VectorLoader from '@/images/VectorLoader';

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

  const pastEvents = useMemo(
    () =>
      events.filter(
        (event) => new Date(event.startDate).getTime() < new Date().getTime()
      ),
    [events]
  );

  const upcomingEvents = useMemo(
    () =>
      events.filter(
        (event) => new Date(event.startDate).getTime() > new Date().getTime()
      ),
    [events]
  );

  return (
    <>
      <Container>
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

        <Stack space="calc(var(--container-gutters) * 2)">
          <section>
            <Title>
              <h2 css={h2Style}>Your upcoming events</h2>
            </Title>

            {isLoading ? (
              <Center
                intrinsic
                css={`
                  padding: ${em(90)} 0;
                `}
              >
                <VectorLoader fill="var(--color-accent)" />
              </Center>
            ) : (
              <>
                {upcomingEvents.length === 0 && (
                  <Center
                    intrinsic
                    css={`
                      padding: ${em(90)} 0;
                    `}
                  >
                    No event found -_-
                  </Center>
                )}

                <EventList>
                  {upcomingEvents.map((event) => (
                    <EventCard
                      key={`event-${event.name}`}
                      name={event.name}
                      description={event.description}
                      start={event.start}
                      end={event.end}
                    />
                  ))}
                </EventList>
              </>
            )}
          </section>

          {pastEvents.length > 0 && (
            <section>
              <Title>
                <h2 css={h2Style}>Your past events</h2>
              </Title>

              {isLoading ? (
                <Center
                  intrinsic
                  css={`
                    padding: ${em(90)} 0;
                  `}
                >
                  <VectorLoader fill="var(--color-accent)" />
                </Center>
              ) : (
                <EventList>
                  {pastEvents.map((event) => (
                    <EventCard
                      key={`event-${event.name}`}
                      name={event.name}
                      description={event.description}
                      start={event.start}
                      end={event.end}
                      faded
                    />
                  ))}
                </EventList>
              )}
            </section>
          )}
        </Stack>
      </Container>

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
