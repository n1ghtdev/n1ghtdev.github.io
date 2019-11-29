import styled from 'styled-components';

type WrapperProps = {
  as?: 'div' | 'header';
}

type TitleProps = {
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h5';
}

export const Wrapper = styled.div.attrs(({ as }: WrapperProps) => ({
  as: as || 'div',
}))`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h1.attrs(({ as }: TitleProps) => ({
  as: as || 'h1',
}))`
  font-size: initial;
`;

export const TitleBlock = styled.span`
  display: inline-block;
`;

export const TitleSpanPrimary = styled.span`
  color: ${({ theme }: { theme: any }) => theme.primary || 'initial'};
`;