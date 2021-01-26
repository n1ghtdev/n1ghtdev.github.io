import styled, { css } from 'styled-components';

const ProjectBase = styled.article`
  height: 100%;
  display: flex;
  padding: 10px;
  flex-flow: column nowrap;
  flex-basis: calc(1 / 3 * 100%);
  flex-shrink: 0;
`;

const ProjectContent = styled.div`
  flex: 1;
  display: flex;
  flex-flow: column nowrap;
`;

const ProjectHeader = styled.div`
  padding-top: 20px;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const ProjectTitle = styled.h3``;

const ProjectDescr = styled.div`
  flex: 1;
  font-weight: 500;
  margin-bottom: 10px;
  text-align: justify;
  line-height: 1.35;
`;

const ProjectTags = styled.ul`
  display: flex;
  flex-wrap: wrap;
`;

const ProjectTag = styled.li`
  color: #7685a7;
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

const ProjectLinks = styled.div`
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

const image = css`
  border-radius: inherit;
  height: 100%;
`;

const ProjectLink = styled.a`
  display: block;
  position: relative;
  cursor: pointer;
  height: 260px;
  border-radius: 10px;

  & > .gatsby-img {
    ${image}
  }

  // -webkit-user-select: none;
  // -webkit-user-drag: none;
  // -webkit-app-region: no-drag;
`;

const ProjectHover = styled.div`
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

export {
  ProjectBase,
  ProjectContent,
  ProjectHeader,
  ProjectTitle,
  ProjectDescr,
  ProjectLink,
  ProjectHover,
  ProjectTags,
  ProjectTag,
  ProjectLinks,
};
