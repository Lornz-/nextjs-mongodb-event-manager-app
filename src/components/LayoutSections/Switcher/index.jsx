import PropTypes from 'prop-types';
import styled from 'styled-components';
import { em } from 'polished';

// utils
import selectSpace from '@/utils/selectSpace';

/**
 * @module Switcher
 * @description
 * The **Switcher** layout switches a Flexbox context between a horizontal and
 * a vertical layout at a given, container-based breakpoint
 *
 * @see [https://every-layout.dev/](https://every-layout.dev/)
 *
 * @example
 *
 * <Switcher threshold='480px' space='1rem' limit={3}>
 *   <div> <!-- intermediary wrapper (required) -->
 *     <div><!-- child element --></div>
 *     <div><!-- another child element --></div>
 *     <div><!-- etc --></div>
 *   </div>
 * </Switcher>
 *
 */
const Switcher = styled.div`
  > * {
    display: flex;
    flex-wrap: wrap;
    margin: calc(${({ space }) => selectSpace(space)} / 2 * -1);

    /* overflow: hidden; */
  }

  > * > * {
    flex-basis: calc(
      (
          ${({ threshold }) => threshold} -
            (100% - ${({ space }) => selectSpace(space)})
        ) * 999
    );
    flex-grow: 1;
    margin: calc(${({ space }) => selectSpace(space)} / 2);
  }

  > * > :nth-last-child(n + ${({ limit }) => limit} + 1),
  > * > :nth-last-child(n + ${({ limit }) => limit} + 1) ~ * {
    flex-basis: 100%;
  }
`;

Switcher.propTypes = {
  /**
   * The container width at which the component switches between a horizontal and vertical layout
   */
  threshold: PropTypes.string,
  /**
   * The space (margin) between the (child) elements
   */
  space: PropTypes.string,
  /**
   * The maximum number of elements allowed to appear in the horizontal configuration
   */
  limit: PropTypes.number,
};

Switcher.defaultProps = {
  threshold: em(480),
  space: '1rem',
  limit: 3,
};

export default Switcher;
