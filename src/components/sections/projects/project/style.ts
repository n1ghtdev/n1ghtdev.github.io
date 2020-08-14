import styled from 'styled-components';

export const Wrapper = styled.article`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 10px;
`;

export const Poster = styled.img`
  border-radius: 10px;
`;

export const Content = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
`;

export const Header = styled.div`
  padding-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.h3``;

export const Description = styled.div`
  flex: 1;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: justify;
  line-height: 1.35;
`;

export const Tags = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

export const Tag = styled.li`
  color: #5c6c8c;
  font-size: 14px;
  font-weight: bold;
  margin-right: 10px;

  &:before {
    content: '#';
  }

  &:last-child {
    margin-right: 0;
  }
`;

export const Links = styled.div`
  svg {
    width: 24px;
    height: 24px;
  }
  & > a:first-child {
    margin-right: 20px;
  }
  & > a.disabled {
    opacity: 0.4;
    pointer-events: none;
  }
`;
