import React from 'react';
import { Link, GatsbyLinkProps } from 'gatsby';
import { useSection } from '@hooks/useActiveSection';

const NavLink = (props: GatsbyLinkProps<any>) => {
  const { activeSection } = useSection();

  return (
    <Link
      {...(props as any)}
      getProps={({ location }) => {
        const { to } = props;
        if (`#${activeSection}` === to) return { className: 'active' };
      }}
    />
  );
};

export default NavLink;
