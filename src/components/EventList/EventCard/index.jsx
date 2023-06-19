// vendors
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

// styles
import { Container, Date, StyledEventCard, Wrapper } from './EventCard.styles';
import Stack from '@/components/LayoutSections/Stack';

const EventCard = ({ name, description, start, end, faded, ...rest }) => {
  return (
    <StyledEventCard as={Link} href="#" {...rest}>
      <Wrapper rounded padded overlaid $faded={faded}>
        <Container>
          <div
            css={`
              grid-column: 1;
              grid-row: 1;
              position: relative;
              width: 110px;
              height: 110px;
            `}
          >
            <Image
              src="https://images.pexels.com/photos/2747449/pexels-photo-2747449.jpeg"
              alt="Event thumbnail dummy"
              fill
              style={{ objectFit: 'cover' }}
            />
          </div>

          <div
            css={`
              grid-column: 2;
              grid-row: 1;
              padding: 4px 0;
            `}
          >
            <h3>{name}</h3>
            {/* <div>{description}</div> */}
          </div>
          <Stack
            space="3px"
            css={`
              grid-column: 3;
              grid-row: 1;
              padding: 4px 0;
            `}
          >
            <strong>Starts</strong>
            <Date>{start.date}</Date>
            <div>{start.time}</div>
          </Stack>
          <Stack
            space="3px"
            css={`
              grid-column: 4;
              grid-row: 1;
              padding: 4px 0;
            `}
          >
            <strong>Ends</strong>
            <Date>{end.date}</Date>
            <div>{end.time}</div>
          </Stack>
        </Container>
      </Wrapper>
    </StyledEventCard>
  );
};

EventCard.propTypes = {
  /**
   * The name of the event
   */
  name: PropTypes.string.isRequired,
  /**
   * The description of the event
   */
  description: PropTypes.string.isRequired,
  /**
   * The date and time when the event starts
   */
  start: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  /**
   * The date and time when the event ends
   */
  end: PropTypes.shape({
    date: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
  }).isRequired,
  /**
   * whether applying a faded style or not
   */
  faded: PropTypes.bool,
};
EventCard.defaultProps = {
  faded: false,
};

export default EventCard;
