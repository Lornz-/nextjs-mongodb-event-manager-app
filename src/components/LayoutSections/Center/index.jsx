import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const textStyle = css`
  text-align: center;
`;

const intrinsicStyle = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const guttersStyle = css`
  padding-right: ${({ gutters }) => gutters};
  padding-left: ${({ gutters }) => gutters};
`;

/**
 * @module Center
 * @description
 * The **Center** layout is for centering a block-level element horizontally
 *
 * @see [https://every-layout.dev/](https://every-layout.dev/)
 *
 * @example
 *
 * <Center maxWidth='1280px' gutters='16px'>
 *   <!-- centered content -->
 * </Center>
 *
 */
const Center = styled.div`
  box-sizing: content-box;
  max-width: ${({ maxWidth }) => maxWidth};
  margin-right: auto;
  margin-left: auto;

  ${({ gutters }) => gutters && guttersStyle}

  ${({ withText }) => withText && textStyle}

  ${({ intrinsic }) => intrinsic && intrinsicStyle}
`;

Center.propTypes = {
  /**
   * The maximum width of the centered element
   */
  maxWidth: PropTypes.string,
  /**
   * The width of the gutters (leave empty for no gutters)
   */
  gutters: PropTypes.string,
  /**
   * Whether to center align the text (text-align: center)
   */
  withText: PropTypes.bool,
  /**
   * Center child elements based on their content width
   */
  intrinsic: PropTypes.bool,
};

Center.defaultProps = {
  maxWidth: '60ch',
  gutters: undefined,
  withText: false,
  intrinsic: false,
};

export default Center;
