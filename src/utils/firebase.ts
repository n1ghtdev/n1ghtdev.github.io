import * as firebase from 'firebase/app';
import 'firebase/database';
import { config } from '../config';

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