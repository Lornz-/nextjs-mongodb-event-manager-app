// vendors
import React from 'react';
import PropTypes from 'prop-types';

// styles
import Container from './Paper.styles';

/**
 *
 * @module Paper
 *
 *  A flat, opaque or overlaid background mimicking the look of a sheet of paper
 *
 * @example
 *
 * <Paper lightColor='#fff' darkColor='#b654d1' rounded overlaid>
 *    <!-- Paper content 🦄 -->
 * </Paper>
 */
const Paper = ({
  lightColor,
  darkColor,
  rounded,
  padded,
  inverted,
  overlaid,
  elevation,
  children,
  ...rest
}) => (
  <Container
    lightColor={lightColor}
    darkColor={darkColor}
    padding={padded ? `16px` : `0`}
    invert={inverted}
    $rounded={rounded}
    $overlaid={overlaid}
    $elevation={elevation}
    noBorder
    {...rest}
  >
    {children}
  </Container>
);

Paper.propTypes = {
  /**
   * Child node elements
   */
  children: PropTypes.node.isRequired,
  /**
   * The light theme color
   */
  lightColor: PropTypes.string.isRequired,
  /**
   * The dark theme color
   */
  darkColor: PropTypes.string.isRequired,
  /**
   * Whether corners are rounded
   */
  rounded: PropTypes.bool,
  /**
   * Whether to apply a padding
   */
  padded: PropTypes.bool,
  /**
   * Whether to invert theme colors
   */
  inverted: PropTypes.bool,
  /**
   * Whether to apply an overlay to the background.
   */
  overlaid: PropTypes.bool,
  /**
   * Whether to apply a shadow elevation.
   */
  elevation: PropTypes.string,
};

Paper.defaultProps = {
  rounded: false,
  padded: false,
  inverted: false,
  overlaid: false,
  elevation: undefined,
};

export default Paper;
