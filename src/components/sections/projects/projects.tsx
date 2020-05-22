import React from 'react';

import Section from '@components/section';
import Project from './project';
import SearchBar from './search-bar';
import { Tags, Tag } from './tags';

import useInView from '@hooks/use-in-view';
import useFilter from '@hooks/use-filter';
import { ejectTags } from '@utils/eject-tags';
import { IProject, ITag } from '@typings/project';

import * as styles from './projects.styles';

const Projects = ({ projects }: { projects: IProject[] }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.15 }, true);
  const visibleClassname = isInView ? 'visible' : '';

  const {
    filteredProjects,
    query,
    setQuery,
    activeTags,
    setActiveTags,
  } = useFilter(projects);

  const tags = projects
    .reduce(
      (acc: any[], cur: any) => ejectTags(acc, cur.node.frontmatter.tech),
      [],
    )
    .sort((a: any, b: any) => b.count - a.count);

  function renderTags(tags: ITag[]) {
    return tags.map((tag: ITag) => (
      <Tag
        key={tag.title}
        tag={tag.title}
        onClick={setActiveTags}
        active={
          activeTags && activeTags.length > 0
            ? activeTags.some((activeTag: string) => activeTag === tag.title)
            : false
        }
      />
    ));
  }

  function renderProjects(projects: IProject[]) {
    return projects.map((el: any) => {
      const { frontmatter, id, html } = el.node;
      const { date, title, tech, github, external, poster } = frontmatter;

      return (
        <Project
          key={id}
          img={poster}
          title={title}
          description={html}
          github={github}
          external={external}
          tools={tech}
          date={date}
          className={visibleClassname}
        />
      );
    });
  }

  return (
    <Section id="projects">
      <styles.Wrapper ref={ref}>
        <styles.Header>
          <styles.Title className={visibleClassname}>
            Other projects
          </styles.Title>
          <styles.Subtitle>
            Includes work and side projects/experiments.
          </styles.Subtitle>
        </styles.Header>
        <styles.FlexContainer>
          <styles.Aside>
            <SearchBar query={query} onChangeQuery={setQuery} />
            <Tags>{renderTags(tags)}</Tags>
          </styles.Aside>
          <styles.List>{renderProjects(filteredProjects)}</styles.List>
        </styles.FlexContainer>
      </styles.Wrapper>
    </Section>
  );
};

export default Projects;
