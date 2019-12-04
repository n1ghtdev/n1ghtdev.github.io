import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/storage';
import { config } from '../config';

type FirebaseProviderProps = {
  children: React.ReactNode;
};

interface IFirebaseContext {
  firebaseDB: null | object;
  firebase: null | object;
  storage: null | object;
}

export const FirebaseContext = React.createContext({} as IFirebaseContext);

const FirebaseProvider = (props: FirebaseProviderProps) => {
  const app: any = React.useRef(firebase.initializeApp(config));
  const db: any = React.useRef(app.current.database());
  const storage: any = React.useRef(app.current.storage());
  // React.useEffect(() => {
  //   app.current = firebase.initializeApp(config);
  //   db.current = app.current.database();
  // }, []);

  return (
    <FirebaseContext.Provider
      value={{
        firebaseDB: db.current,
        firebase: app.current,
        storage: storage.current,
      }}
    >
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
