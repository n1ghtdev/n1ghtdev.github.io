import React from 'react';
import { StoreContext, StoreContextType, initialState } from './StoreContext';
import { projectReducer } from './reducers/projectReducer';

export const StoreProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = React.useReducer(projectReducer, initialState);

  return (
    <StoreContext.Provider value={{ state, dispatch } as StoreContextType}>
      {children}
    </StoreContext.Provider>
  );
};

export const useStore = () => React.useContext(StoreContext);
