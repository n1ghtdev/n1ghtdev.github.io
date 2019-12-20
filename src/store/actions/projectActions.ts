import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ProjectsActionTypes,
  IProject,
} from '../../types/ProjectTypes';

export const fetchRequest = (): ProjectsActionTypes => ({
  type: FETCH_REQUEST,
});

export const fetchSuccess = (projects: IProject[]): ProjectsActionTypes => ({
  type: FETCH_SUCCESS,
  payload: projects,
});

export const fetchFailure = (error: Error): ProjectsActionTypes => ({
  type: FETCH_FAILURE,
  payload: error,
});
