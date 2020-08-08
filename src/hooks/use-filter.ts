import React from 'react';
import { IProject } from '@typings/project';

function useFilter(projects: any[]) {
  const [query, setQuery] = React.useState('');
  const [activeTags, setActiveTags] = React.useState<string[]>([]);
  const [filteredProjects, setFilteredProjects] = React.useState<any[]>(
    projects
  );

  React.useEffect(() => {
    if (activeTags.length !== 0 || query.length !== 0) {
      const queryRegex = new RegExp(query, 'i');

      const newFilteredProjects = projects.filter(({ node }: { node: any }) => {
        const { title, tech } = node.frontmatter;

        const filteredByQuery =
          queryRegex.test(title) || queryRegex.test(node.html);

        const filteredByTags = activeTags.every((tag: string) =>
          tech.includes(tag)
        );

        if (activeTags.length > 0) {
          return filteredByTags && filteredByQuery;
        } else {
          return filteredByQuery;
        }
      });

      setFilteredProjects(newFilteredProjects);
    } else {
      setFilteredProjects(projects);
    }
  }, [query, activeTags, projects]);

  function handleSetActiveTags(tag: string) {
    setActiveTags((prev) => {
      const isSelected = prev.findIndex((prevTag: string) => prevTag === tag);

      if (isSelected === -1) {
        return [...prev, tag];
      }
      return prev.filter((prevTag: string) => prevTag !== tag);
    });
  }

  return {
    filteredProjects,
    query,
    setQuery,
    activeTags,
    setActiveTags: handleSetActiveTags,
  };
}

export default useFilter;
