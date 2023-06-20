// vendors
import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

// styles
import { StyledLink } from './ActiveLink.styles';

const ActiveLink = ({ children, activeClassName, className, ...props }) => {
  const { asPath, isReady } = useRouter();
  const [computedClassName, setComputedClassName] = useState(className);

  useEffect(() => {
    // Check if the router fields are updated client-side
    if (isReady) {
      // Dynamic route will be matched via props.as
      // Static route will be matched via props.href
      const linkPathname = new URL(props.as || props.href, location.href)
        .pathname;

      // Using URL().pathname to get rid of query and hash
      const activePathname = new URL(asPath, location.href).pathname;

      const newClassName =
        linkPathname === activePathname
          ? `${className} ${activeClassName}`.trim()
          : className;

      if (newClassName !== computedClassName) {
        setComputedClassName(newClassName);
      }
    }
  }, [
    asPath,
    isReady,
    props.as,
    props.href,
    activeClassName,
    className,
    computedClassName,
  ]);

  return (
    <StyledLink className={computedClassName} {...props}>
      {children}
    </StyledLink>
  );
};

ActiveLink.propTypes = {
  children: PropTypes.node.isRequired,
  activeClassName: PropTypes.string,
  className: PropTypes.string,
};
ActiveLink.defaultProps = {
  activeClassName: 'active',
  className: '',
};

export default ActiveLink;
