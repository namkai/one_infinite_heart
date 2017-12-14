import { applyMiddleware, createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import {rootEpic, rootReducer} from './index';

const epicMiddleware = createEpicMiddleware(rootEpic);

const configureStore = () => createStore(
  rootReducer,
  applyMiddleware(epicMiddleware),
);

export default configureStore;