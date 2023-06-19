import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

/**
 * @module Stack
 * @description
 * The **Stack** layout primitive injects margin between elements via their common parent
 *
 * @see [https://every-layout.dev/](https://every-layout.dev/)
 *
 * @example
 *
 * Basic
 *
 * <Stack space='1.5rem'>
 *   <div><!-- child --></div>
 *   <div><!-- child --></div>
 *   <div><!-- etc --></div>
 * </Stack>
 *
 * Recursive
 *
 * <Stack recursive>
 *   <div><!-- first level child --></div>
 *   <div><!-- first level sibling --></div>
 *   <div>
 *     <div><!-- second level child --></div>
 *     <div><!-- second level sibling --></div>
 *   </div>
 * </Stack>
 *
 */
const Stack = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;

  ${({ recursive }) => (recursive ? '*' : '> *')} {
    /* margin-top: 0;
    margin-bottom: 0; */
    margin-block: 0;
  }

  ${({ recursive }) => (recursive ? '* + *' : '> * + *')} {
    /* margin-top: ${({ space }) => space}; */
    margin-block-start: ${({ space }) => space};
  }

  ${({ splitAfter }) =>
    splitAfter &&
    css`
      :only-child {
        /* height: 100%; */
        block-size: 100%;
      }

      > :nth-child(${splitAfter}) {
        /* margin-bottom: auto; */
        margin-block-end: auto;
      }
    `}
`;

Stack.propTypes = {
  /**
   * The space (margin) between successive sibling elements
   */
  space: PropTypes.string,
  /**
   * The element index after which to split the stack. Leave empty for no splitting
   */
  splitAfter: PropTypes.number,
  /**
   * Whether spaces apply recursively (i.e. regardless of nesting level)
   */
  recursive: PropTypes.bool,
};

Stack.defaultProps = {
  space: '1rem',
  splitAfter: undefined,
  recursive: false,
};

export default Stack;
