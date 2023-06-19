import PropTypes from 'prop-types';
import styled from 'styled-components';

/**
 * @module Frame
 * @description
 * The **Frame** layout is mostly useful for cropping media (videos and images)
 * to a desired aspect ratio (16:9 is the default)
 *
 * @see [https://every-layout.dev/](https://every-layout.dev/)
 *
 * @example
 *
 * <Frame ratio="4:3">
 *   <img src="/path/to/image" alt="description of the image here" />
 * </Frame>
 */
const Frame = styled.div`
  position: relative;

  padding-bottom: ${({ ratio }) =>
    (ratio.split(':')[1] / ratio.split(':')[0]) * 100}%;

  > * {
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;

    overflow: hidden;
  }

  > img,
  > video {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

Frame.propTypes = {
  /**
   * The element's aspect ratio (16:9 is the default)
   */
  ratio: PropTypes.string,
};

Frame.defaultProps = {
  ratio: '16:9',
};

export default Frame;
