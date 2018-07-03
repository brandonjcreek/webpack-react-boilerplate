import { combineReducers } from 'redux';
import user from './user';
import click from './click';

const rootReducer = combineReducers({ user, click });

export default rootReducer;
