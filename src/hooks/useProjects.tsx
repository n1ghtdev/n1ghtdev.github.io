import React from 'react';
import { FirebaseContext } from '../modules/Firebase';

const useProjects = () => {
  const { firebaseDB }: any = React.useContext(FirebaseContext);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const readProjects = async () => {
      const eventRef = firebaseDB.ref('/projects');
      try {
        setLoading(true);
        const snapshot = await eventRef.once('value');
        setData(snapshot.val());
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    readProjects();
  }, [firebaseDB]);

  return { data, error, loading };
};

export default useProjects;
