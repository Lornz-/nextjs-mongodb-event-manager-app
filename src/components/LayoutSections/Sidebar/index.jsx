// vendors
import PropTypes from 'prop-types';
import styled from 'styled-components';

// utils
import selectSpace from '../../../utils/selectSpace';

/**
 * @module Sidebar
 * @description
 * The **Sidebar** layout is named for the element that forms the diminutive sidebar:
 * the narrower of two adjacent elements.
 *
 * @see [https://every-layout.dev/](https://every-layout.dev/)
 *
 * @example
 *
 * <Sidebar contentMin='50%' sideWidth='30ch'>
 *   <div> <!-- intermediary wrapper (required) -->
 *     <div><!-- sidebar --></div>
 *     <div><!-- non-sidebar --></div>
 *   </div>
 * </Sidebar>
 *
 */
const Sidebar = styled.div`
  overflow: hidden;

  > * {
    display: flex;
    flex-wrap: wrap;
    align-items: ${({ noStretch }) => (noStretch ? 'flex-start' : '')};

    margin: calc(${({ space }) => selectSpace(space)} / 2 * -1);
  }

  > * > * {
    flex-grow: 1;
    ${({ sideWidth }) => (sideWidth ? `flex-basis: ${sideWidth}` : '')};

    margin: calc(${({ space }) => selectSpace(space)} / 2);
  }

  > * > ${({ side }) => (side !== 'left' ? ':first-child' : ':last-child')} {
    flex-basis: 0;
    flex-grow: 999;

    min-width: calc(
      ${({ contentMin }) => contentMin} - ${({ space }) => selectSpace(space)}
    );
  }
`;

Sidebar.propTypes = {
  /**
   * The narrowest the content (main) element can be before wrapping. Should be a percentage.
   */
  contentMin: PropTypes.string,
  /**
   * The width of the sidebar (empty means not set; defaults to the content width)
   */
  sideWidth: PropTypes.string,
  /**
   * Which element to treat as the sidebar (all values but "left" are considered "right")
   */
  side: PropTypes.string,
  /**
   * The space (margin) between the sidebar and non-sidebar
   */
  space: PropTypes.string,
  /**
   * Make the adjacent elements adopt their natural height
   */
  noStretch: PropTypes.bool,
};

Sidebar.defaultProps = {
  contentMin: '50%',
  sideWidth: '25%',
  side: 'left',
  space: '1rem',
  noStretch: false,
};

export default Sidebar;
