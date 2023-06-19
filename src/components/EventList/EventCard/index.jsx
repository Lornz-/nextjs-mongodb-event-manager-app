// vendors
import React from 'react';
import PropTypes from 'prop-types';
import Image from 'next/image';
import Link from 'next/link';

// styles
import { Container, StyledEventCard, Wrapper } from './EventCard.styles';

const EventCard = ({ name, description, start, end }) => {
  return (
    <StyledEventCard as={Link} href="#">
      <Wrapper rounded padded overlaid>
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
          <div
            css={`
              grid-column: 3;
              grid-row: 1;
              padding: 4px 0;
            `}
          >
            <strong>Starts</strong>
            <div>{start.date}</div>
            <div>{start.time}</div>
          </div>
          <div
            css={`
              grid-column: 4;
              grid-row: 1;
              padding: 4px 0;
            `}
          >
            <strong>Ends</strong>
            <div>{end.date}</div>
            <div>{end.time}</div>
          </div>
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
};

export default EventCard;
