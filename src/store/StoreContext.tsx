import React from 'react';
import { ProjectsActionTypes } from '../types/ProjectTypes';

export const initialState = {
  projects: [],
  loading: false,
  error: null,
};

export type StoreContextType = {
  state: typeof initialState;
  dispatch: (action: ProjectsActionTypes) => void;
  //React.Dispatch<ProjectsActionTypes>
};

export const StoreContext = React.createContext<StoreContextType>({
  state: initialState,
  dispatch: () => {},
});
