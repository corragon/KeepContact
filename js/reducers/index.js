import { combineReducers } from 'redux';
import people from './people';
import permissions from './permissions';

module.exports = rootReducer = combineReducers({
  people,
  permissions,
});