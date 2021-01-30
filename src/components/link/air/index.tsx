import React, { AnchorHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { THEME } from '@styles/theme';
import { LinkBase } from '../styles';

type Props = { to?: string } & AnchorHTMLAttributes<any>;

const Styles = css`
  ${LinkBase};

  font-weight: bold;
  display: inline-block;
  border-radius: 6px;

  transition-duration: 300ms;
  transition-property: background-color;

  &:hover {
    background-color: ${THEME.PRIMARY};
  }
`;

const LinkExternal = styled.a(() => Styles);

const LinkInternal = styled(Link)(() => Styles);

const LinkAir: FC<Props> = (props) => {
  const { children, to, href, ...rest } = props;

  if (to) {
    return <LinkInternal to={to}>{children}</LinkInternal>;
  }
  return (
    <LinkExternal href={href} {...rest}>
      {children}
    </LinkExternal>
  );
};

export { LinkAir };
