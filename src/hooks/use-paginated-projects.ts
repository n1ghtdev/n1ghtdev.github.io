import React from 'react';
import { IProject } from '@typings/project';

function usePaginatedProjects(projects: IProject[], perPage: number = 5) {
  const [paginatedProjects, setPaginatedProjects] = React.useState(projects);
  const [currentPage, setCurrentPage] = React.useState(0);
  const [hasNextPage, setHasNextPage] = React.useState(
    projects.length > perPage,
  );

  React.useEffect(() => {
    const start = 0;
    const end = perPage * (currentPage + 1);

    const nextPageProjects = projects.slice(start, end);
    const isNextPageNotEmpty = projects.length - end > 0;

    setHasNextPage(isNextPageNotEmpty);
    setPaginatedProjects(nextPageProjects);
  }, [currentPage, perPage, projects]);

  function loadMore() {
    setCurrentPage(currentPage + 1);
  }

  return {
    paginatedProjects,
    loadMore,
    hasNextPage,
  };
}

export default usePaginatedProjects;
