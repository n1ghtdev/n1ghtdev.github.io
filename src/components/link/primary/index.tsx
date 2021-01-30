import React, { AnchorHTMLAttributes, FC } from 'react';
import styled, { css } from 'styled-components';
import { Link } from 'gatsby';
import { THEME } from '@styles/theme';
import { LinkBase } from '../styles';

type Props = { to?: string } & AnchorHTMLAttributes<any>;

const Styles = css`
  ${LinkBase};

  position: relative;
  background-color: ${THEME.PRIMARY};

  &:before {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    display: block;
    background-color: inherit;
    filter: blur(10px);
    transform: translate3d(0, 0, 0);
    z-index: -1;
  }
`;

const LinkExternal = styled.a(() => Styles);

const LinkInternal = styled(Link)(() => Styles);

const LinkPrimary: FC<Props> = (props) => {
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

export { LinkPrimary };
