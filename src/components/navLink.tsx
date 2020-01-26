import React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';

const NavLink = (props: GatsbyLinkProps<any>) => {
  return (
    <Link
      {...(props as any)}
      getProps={({ location }) => {
        const { hash } = location;
        const { to } = props;

        // if location.hash and Link to prop equal return className set to 'active'
        if (hash === to) return { className: 'active' };
        // if location.hash is empty set active to '#hero' Link
        else if (!hash && to === '#hero') return { className: 'active' };
      }}
    />
  );
};

export default NavLink;
