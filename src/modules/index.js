import { combineEpics } from 'redux-observable';
import { combineReducers } from 'redux';
import ui from './ui';

export const rootReducer = combineReducers({ ui  });

export const rootEpic = combineEpics();
