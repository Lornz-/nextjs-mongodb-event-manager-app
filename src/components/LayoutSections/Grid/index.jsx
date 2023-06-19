import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @module Grid
 * @description
 * The **Grid** layout offers a true responsive grid formation
 * making items grow, shrink, and wrap together without breaching the column boundaries.
 *
 * @see [https://every-layout.dev/](https://every-layout.dev/)
 *
 * @example
 * <Grid minWidth='350px' space='2rem'>
 *   <div><!-- child element --></div>
 *   <div><!-- another child element --></div>
 *   <div><!-- etc --></div>
 * </Grid>
 */
const Grid = styled.div`
  display: grid;
  grid-gap: ${({ space }) => space};
  grid-template-columns: repeat(
    ${({ collapsed }) => (collapsed ? 'auto-fit' : 'auto-fill')},
    minmax(min(${({ minWidth }) => minWidth}, 100%), 1fr)
  );
`;

Grid.propTypes = {
  space: PropTypes.string,
  minWidth: PropTypes.string,
  collapsed: PropTypes.bool,
};

Grid.defaultProps = {
  /**
   * The minimum value for the CSS min() function
   */
  minWidth: '250px',
  /**
   * The space (grid-gap) between the grid children / cells
   */
  space: '1rem',
  /**
   * Whether any empty repeated children must collapse
   */
  collapsed: false,
};

export default Grid;
