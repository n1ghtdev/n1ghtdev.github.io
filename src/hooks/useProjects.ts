import React from 'react';
import { FirebaseContext } from '../modules/Firebase';

const useProjects = (orderBy: string, orderByValue: string) => {
  const { firebaseDB }: any = React.useContext(FirebaseContext);
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    const eventRef = firebaseDB.ref('/projects').orderByChild(orderBy).equalTo(orderByValue);
    const readProjects = async () => {
      try {
        setLoading(true);
        const snapshot = await eventRef.once('value');
        setData(snapshot.val());
        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }

      // await eventRef.push({ a: 'a', b: 'qwe' });


    };

    readProjects();
  }, []);

  return { data, error, loading };
};

export default useProjects;
