import React from 'react';

type Props = {
  href?: string;
  children: React.ReactElement;
};

export default function IconLink(props: Props) {
  if (props.href) {
    return (
      <a href={props.href} target="_blank" rel="noopener noreferrer">
        {props.children}
      </a>
    );
  }
  return props.children;
}
