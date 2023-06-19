import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @module Cover
 * @description
 * The **Cover** layout  handle vertically centered content (under a min-height threshold)
 * and can accommodate top/header and bottom/footer elements.
 *
 * @see [https://every-layout.dev/](https://every-layout.dev/)
 *
 * @example
 *
 * Basic
 *
 * <Cover>
 *   <h1>Welcome!</h1>
 * </Cover>
 *
 * With a header and footer elements
 *
 * <Cover>
 *   <div><!-- header --></div>
 *   <div><!-- centered --></div>
 *   <div><!-- footer --></div>
 * </Cover>
 */
const Cover = styled.div`
  display: flex;
  flex-direction: column;
  min-height: ${({ minHeight }) => minHeight};
  padding: ${({ noPadding, space }) => (noPadding ? `0` : space)};

  > * {
    margin-top: ${({ space }) => space};
    margin-bottom: ${({ space }) => space};
  }

  > :first-child:not(${({ centered }) => centered}) {
    margin-top: 0;
  }

  > :last-child:not(${({ centered }) => centered}) {
    margin-bottom: 0;
  }

  > ${({ centered }) => centered} {
    margin-top: auto;
    margin-bottom: auto;
  }
`;

Cover.propTypes = {
  /**
   * A simple selector representing the centered (main) element in the cover
   */
  centered: PropTypes.string,
  /**
   * The minimum space between and around all of the child elements
   */
  space: PropTypes.string,
  /**
   * The minimum height for the Cover
   */
  minHeight: PropTypes.string,
  /**
   * Whether the spacing is also applied as padding to the container element
   */
  noPadding: PropTypes.bool,
};

Cover.defaultProps = {
  centered: 'h1',
  space: '1rem',
  minHeight: '100vh',
  noPadding: false,
};

export default Cover;
