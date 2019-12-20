import React from 'react';
import { FirebaseContext } from '../modules/Firebase';
import { IProject } from '../types/ProjectTypes';

const useProject = (projectId: number | string): { data: IProject, error: boolean, loading: boolean } => {
  const { firebaseDB }: any = React.useContext(FirebaseContext);
  const [data, setData] = React.useState();
  const [error, setError] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const readProject = async () => {
      const eventRef = firebaseDB.ref(`/projects/${projectId}`);
      try {
        setLoading(true);
        const snapshot = await eventRef.once('value');
        console.log(snapshot);
        setData(snapshot.val());
        setLoading(false);
      } catch (error) {
        console.error(error)
        setError(true);
        setLoading(false);
      }
    };
    readProject();
  }, [projectId, firebaseDB]);

  return { data, error, loading };
};

export default useProject;
