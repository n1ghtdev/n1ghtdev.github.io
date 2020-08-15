import styled from 'styled-components';
import Img from 'gatsby-image';

export const Wrapper = styled.article`
  height: 100%;
  display: flex;
  flex-flow: column nowrap;
  padding: 10px;
`;

export const Poster = styled(Img)`
  border-radius: 10px;
  height: 260px;
`;

export const PosterWrapper = styled.a`
  display: block;
  position: relative;
  cursor: pointer;
  -webkit-user-select: none;
  -webkit-user-drag: none;
  -webkit-app-region: no-drag;
`;

export const PosterHover = styled.div`
  opacity: 0;
  transition: opacity 250ms;

  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background: rgba(0, 0, 0, 0.5);
  border-radius: 10px;

  &:hover {
    opacity: 1;

    svg {
      animation: fadeIn 250ms linear forwards;
    }
  }

  svg {
    width: 72px;
    height: 72px;
    opacity: 0;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate3d(0, 20px, 0);
    }
    to {
      opacity: 1;
      transform: translate3d(0, 0, 0);
    }
  }
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
