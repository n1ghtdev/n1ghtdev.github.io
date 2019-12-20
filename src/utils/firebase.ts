import * as firebase from 'firebase/app';
import 'firebase/database';
import { config } from '../config';

// function connectFirebase(config) {
//   if (!config) {
//     throw new Error("You must provide an API configuration file to initialize Firebase application");
//   }

//   const _app = firebase.initializeApp(config);
//   const _database = _app.database();
//   const _storage = _app.storage();


//   function push(ref: string, data: object) {
//     return Promise.resolve(_database.ref(ref).push(data));
//   }
//   function read(ref: string) {
//     return Promise.resolve(_database.ref(ref));
//   }
//   function readBy(ref: string, key: string, value: string) {
//     return Promise.resolve(_database.ref(ref).orderByChild(key).equalTo(value));
//   }
// };

type Response = {
  data?: object | Promise<any>;
  error: Error | null;
};

let app: any = {};
let db: any = {};

export const initializeFirebase = () => {
  app = firebase.initializeApp(config);
  db = app.database();
};

export const readData = async (ref: string, value?: string): Promise<Response> => {
  let response: Response = { data: {}, error: null };
  const eventRef = db.ref(ref);
  try {
    const snapshot = await eventRef.once(value || 'value');

    response.data = snapshot.val();
    return response;
  } catch (error) {
    response.error = error;
    throw response;
  }
};

export const writeData = async (ref: string, value: object): Promise<Response> => {
  let response: Response = { error: null };
  const eventRef = db.ref(ref);
  try {
    await eventRef.set(value);

    return response;
  } catch (error) {
    response.error = error;
    return response;
  }
};