import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { config } from '../config';

type FirebaseProviderProps = {
  children: React.ReactNode;
};

interface IFirebaseContext {
  firebaseDB: null | object;
}

export const FirebaseContext = React.createContext({} as IFirebaseContext);

const FirebaseProvider = (props: FirebaseProviderProps) => {
  const app: any = React.useRef(firebase.initializeApp(config));
  const db: any = React.useRef(app.current.database());

  // React.useEffect(() => {
  //   app.current = firebase.initializeApp(config);
  //   db.current = app.current.database();
  // }, []);

  return (
    <FirebaseContext.Provider value={{ firebaseDB: db.current }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
