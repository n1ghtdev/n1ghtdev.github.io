import React from 'react';
import * as firebase from 'firebase/app';
import 'firebase/database';
import { config } from '../config';

type FirebaseProviderProps = {
  children: React.ReactNode;
};

type Response = {
  data?: object | Promise<any>;
  error: Error | null;
};

interface IFirebaseContext {
  readData: (ref: string, value?: string) => Promise<Response>;
  writeData: (ref: string, value: object) => Promise<Response>;
}

const FirebaseContext = React.createContext<IFirebaseContext | null>(null);

const FirebaseProvider = (props: FirebaseProviderProps) => {
  const app: any = React.useRef();
  const db: any = React.useRef();

  React.useEffect(() => {
    app.current = firebase.initializeApp(config);
    db.current = app.current.database();
  }, []);

  const readData = async (ref: string, value?: string): Promise<Response> => {
    let response: Response = { data: {}, error: null };
    const eventRef = db.current.ref(ref);
    try {
      const snapshot = await eventRef.once(value || 'value');

      response.data = snapshot.val();
      return response;
    } catch (error) {
      response.error = error;
      throw response;
    }
  };

  const writeData = async (ref: string, value: object): Promise<Response> => {
    let response: Response = { error: null };
    const eventRef = db.current.ref(ref);
    try {
      await eventRef.set(value);

      return response;
    } catch (error) {
      response.error = error;
      return response;
    }
  };
  return (
    <FirebaseContext.Provider value={{ readData, writeData }}>
      {props.children}
    </FirebaseContext.Provider>
  );
};

export default FirebaseProvider;
