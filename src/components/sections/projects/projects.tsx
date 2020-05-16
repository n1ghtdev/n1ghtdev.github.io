import React from 'react';

import Section from '@components/section';

import Project from './project';
import SearchBar from './search-bar';
import { Tags, Tag } from './tags';

import useInView from '@hooks/useInView';

import { ejectTags } from '@utils/eject-tags';

import * as styles from './projects.styles';

const Projects = ({ data }: { data: any }) => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { threshold: 0.15 }, true);

  const visibleClassname = isInView ? 'visible' : '';

  const [query, setQuery] = React.useState('');
  const [projects, setProjects] = React.useState(data);
  const [selectedTags, setSelectedTags] = React.useState<string[]>([]);

  React.useEffect(() => {
    const queryRegex = new RegExp(query, 'i');

    // TODO: throttle
    const filteredProjects = data.filter(({ node }: { node: any }) => {
      const { title, tech } = node.frontmatter;

      const filteredByQuery =
        queryRegex.test(title) || queryRegex.test(node.html);

      const filteredByTags = selectedTags.every((tag: string) =>
        tech.includes(tag),
      );

      if (selectedTags.length > 0) {
        if (query.length > 2) {
          return filteredByQuery && filteredByTags;
        } else {
          return filteredByTags;
        }
      } else {
        return filteredByQuery;
      }
    });

    setProjects(filteredProjects);
  }, [query, selectedTags, data]);

  function handleTagSelection(tag: string) {
    setSelectedTags((prev) => {
      const isSelected = prev.findIndex((prevTag: string) => prevTag === tag);

      if (isSelected === -1) {
        return [...prev, tag];
      }

      return prev.filter((prevTag: string) => prevTag !== tag);
    });
  }

  const tags = data
    .reduce(
      (acc: any[], cur: any) => ejectTags(acc, cur.node.frontmatter.tech),
      [],
    )
    .sort((a: any, b: any) => b.count - a.count);

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
            <SearchBar value={query} onChange={setQuery} />
            <Tags>
              {tags.map((tag: any) => (
                <Tag
                  key={tag.title}
                  tag={tag.title}
                  active={selectedTags.some(
                    (selTag: string) => selTag === tag.title,
                  )}
                  onClick={handleTagSelection}
                />
              ))}
            </Tags>
          </styles.Aside>
          <styles.List>
            {projects.map((el: any) => {
              const { frontmatter, id, html } = el.node;
              const {
                date,
                title,
                tech,
                github,
                external,
                poster,
              } = frontmatter;

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
            })}
          </styles.List>
        </styles.FlexContainer>
      </styles.Wrapper>
    </Section>
  );
};

export default Projects;
