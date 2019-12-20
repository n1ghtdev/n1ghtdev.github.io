import React from 'react';
import { FirebaseContext } from '../modules/Firebase';
import { useStore } from '../store';
import {
  fetchRequest,
  fetchSuccess,
  fetchFailure,
} from '../store/actions/projectActions';

// utility function adds object key to object as property
// ex. [{key: {}}] -> [{id: key}]
const setObjectKeyAsProperty = (pair: any) => ({ id: pair[0], ...pair[1] });

const useProjects = () => {
  const { firebaseDB }: any = React.useContext(FirebaseContext);
  const { state, dispatch } = useStore();

  React.useEffect(() => {
    const projectsRef = firebaseDB.ref('/projects');

    const getProjects = async () => {
      dispatch(fetchRequest());

      try {
        const response = await projectsRef.once('value');

        dispatch(
          fetchSuccess(
            Object.entries(response.val()).map(setObjectKeyAsProperty),
          ),
        );
      } catch (error) {
        dispatch(fetchFailure(error));
      }
    };
    getProjects();
  }, [dispatch, firebaseDB]);

  return { ...state };
};

export default useProjects;
