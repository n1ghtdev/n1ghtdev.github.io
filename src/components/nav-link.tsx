import React from 'react';
import { Link } from 'gatsby';
import { useSection } from '@hooks/use-active-section';

type Props = {
  [key: string]: any;
};

const NavLink = (props: Props) => {
  const { activeSection } = useSection();

  if (props.href) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  }

  return (
    <Link
      {...(props as any)}
      onClick={props.onClick}
      getProps={({ location }) => {
        const { to } = props;
        if (`/#${activeSection}` === to) return { className: 'active' };
      }}
    />
  );
};

export default NavLink;
