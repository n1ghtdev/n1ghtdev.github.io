import {
  FETCH_REQUEST,
  FETCH_SUCCESS,
  FETCH_FAILURE,
  ProjectsActionTypes,
  IProjectsState
} from '../../types/ProjectTypes';

export const projectReducer = (state: IProjectsState, action: ProjectsActionTypes): IProjectsState => {
  switch (action.type) {
    case FETCH_REQUEST:
      return { ...state, loading: true };
    case FETCH_SUCCESS:
      return { ...state, loading: false, projects: action.payload };
    case FETCH_FAILURE:
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};