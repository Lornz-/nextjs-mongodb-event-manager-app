import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @module Cluster
 *
 * @see [https://every-layout.dev/](https://every-layout.dev/)
 *
 * @example
 *
 * <Cluster space='2rem'>
 *   <div> <!-- intermediary wrapper (required) -->
 *     <div><!-- child element --></div>
 *     <div><!-- another child element --></div>
 *     <div><!-- etc --></div>
 *   </div>
 * </Cluster>
 */
const Cluster = styled.div`
  --space: ${({ space }) => space};
  overflow: hidden;

  > * {
    display: flex;
    flex-wrap: wrap;
    align-items: ${({ align }) => align};
    justify-content: ${({ justify }) => justify};

    margin: calc(var(--space) / 2 * -1);
  }

  > * > * {
    margin: calc(var(--space) / 2);
  }
`;

Cluster.propTypes = {
  /**
   * The space (margin) between each of the clustered elements
   */
  space: PropTypes.string,
  /**
   * The align-items value (for vertical alignment)
   */
  align: PropTypes.string,
  /**
   * The justify-content value (for horizontal alignment)
   */
  justify: PropTypes.string,
};

Cluster.defaultProps = {
  space: '1rem',
  align: 'center',
  justify: 'flex-start',
};

export default Cluster;
