// vendors
import React from 'react';
import PropTypes from 'prop-types';

// components
import Stack from '../LayoutSections/Stack';
import EventCard from './EventCard';

// styles
import { unstyledListStyle } from '@/styles/global';

const EventList = ({ children }) => {
  const nodes = React.Children.toArray(children);

  return (
    <Stack as="ul" space="1rem" css={unstyledListStyle}>
      {nodes.map(({ key, props }) => (
        <li key={`event-${key}`}>
          <EventCard {...props} />
        </li>
      ))}
    </Stack>
  );
};

EventList.propTypes = {
  children: PropTypes.node.isRequired,
};

export default EventList;
