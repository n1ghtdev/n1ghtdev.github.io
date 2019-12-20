import { IProjectsState } from '../../types/ProjectTypes';

export const getProjectById = (state: IProjectsState, id: string) =>
  state.projects.find(el => el.id === id);
