export interface IProject {
  id: string;
  title: string;
  description: string;
  demo: string;
  code: string;
  images: string[];
  poster: string;
  type: string;
  year: string;
  tools: string;
}

export interface IProjectsState {
  projects: IProject[];
  loading: boolean;
  error: null | Error;
}

export const FETCH_REQUEST = 'projects/fetchRequest';
export const FETCH_SUCCESS = 'projects/fetchSuccess';
export const FETCH_FAILURE = 'projects/fetchFailure';

interface Action {
  type: string;
}

interface ProjectsFetchRequest extends Action {
  type: typeof FETCH_REQUEST;
}

interface ProjectsFetchSuccess extends Action {
  type: typeof FETCH_SUCCESS;
  payload: IProject[];
}

interface ProjectsFetchFailure extends Action {
  type: typeof FETCH_FAILURE;
  payload: Error;
}

export type ProjectsActionTypes =
  | ProjectsFetchRequest
  | ProjectsFetchSuccess
  | ProjectsFetchFailure;
