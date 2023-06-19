// vendors
import React from 'react';
// import { Link } from 'gatsby';
import PropTypes from 'prop-types';

// styles
import StyledButton from './Button.styles';

// const defaultTags = {
//   link: Link,
//   href: 'a',
//   button: 'button',
// };

const Button = ({ type, primary, disabled, children, ...rest }) => {
  // const selectedTag = defaultTags[tag || `button`] || tag;

  const props = {
    // to: tag === `link` ? to : undefined,
    // href: tag === `href` ? to : undefined,
    type: type || `button`,
    ...rest,
  };

  return (
    <StyledButton disabled={disabled} primary={primary} {...props}>
      {children}
    </StyledButton>
  );
};

Button.propTypes = {
  /**
   * Specifies the type of button
   */
  type: PropTypes.oneOf(['button', 'reset', 'submit']),
  /**
   * Specifies the button should have primary style
   */
  primary: PropTypes.bool,
  /**
   * Specifies the button should be disabled
   */
  disabled: PropTypes.bool,
  /**
   * Specifies the content of the button
   */
  children: PropTypes.node,
};

Button.defaultProps = {
  children: undefined,
  type: undefined,
  primary: false,
  disabled: false,
};

export default Button;
