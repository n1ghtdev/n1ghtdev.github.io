import React from 'react';
import { FirebaseContext } from '../modules/Firebase';

const useProject = (projectId: number | string) => {
  const { firebaseDB }: any = React.useContext(FirebaseContext);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
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
        setError(error);
        setLoading(false);
      }
    };
    readProject();
  }, [projectId, firebaseDB]);

  return { data, error, loading };
};

export default useProject;
