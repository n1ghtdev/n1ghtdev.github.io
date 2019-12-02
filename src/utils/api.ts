import { readData } from '../utils/firebase';

export const getProjects = async () => {
  const response = await readData('/projects');
  return response;
};

export const getProject = async (projectId: string) => {
  const response = await readData('/projects', projectId);
  return response;
};