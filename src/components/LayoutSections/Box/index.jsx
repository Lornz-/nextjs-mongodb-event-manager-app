import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const outlineStyle = css`
  outline: 0.125rem solid transparent;
  outline-offset: -0.125rem;
`;

const invertStyle = css`
  color: ${({ lightColor }) => lightColor};

  background-color: ${({ darkColor }) => darkColor};
`;

/**
 * @module Box
 * @description
 * The **Box** layout creates a box shape :
 * - by providing padding on all sides, or no sides at all
 * - by taking care of properties that can be easily inherited to children elements from their parent ancestors
 * - by providing two-tone boxes, including light-on-dark and dark-on-light ('inverted') themes
 *
 * @see [https://every-layout.dev/](https://every-layout.dev/)
 *
 * @example
 *
 * <Box padding='1.5em' borderWidth='2px'>
 *   <-- the box's contents -->
 * </Box>
 */
const Box = styled.div`
  padding: ${({ padding }) => padding};

  color: ${({ darkColor }) => darkColor};

  background-color: ${({ lightColor }) => lightColor};
  border: ${({ noBorder, borderWidth }) => !noBorder && `${borderWidth} solid`};

  * {
    color: inherit;
  }

  ${({ invert }) => invert && invertStyle};

  /* Apply a transparent outline in the absence of a border
   to restore the box shape on high contrast themes */
  ${({ noBorder }) => noBorder && outlineStyle}
`;

Box.propTypes = {
  /**
   * The amount by with the Box is padded on all sides
   */
  padding: PropTypes.string,
  /**
   * The width of the (solid) border
   */
  borderWidth: PropTypes.string,
  /**
   * The dark theme color
   */
  darkColor: PropTypes.string,
  /**
   * The light theme color
   */
  lightColor: PropTypes.string,
  /**
   * Whether to apply an inverted theme
   */
  invert: PropTypes.bool,
  /**
   * Whether to apply a border
   */
  noBorder: PropTypes.bool,
};

Box.defaultProps = {
  padding: '1rem',
  borderWidth: '1px',
  darkColor: '#000',
  lightColor: '#fff',
  invert: false,
  noBorder: false,
};

export default Box;
