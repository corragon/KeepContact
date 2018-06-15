import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';
import permissions from './permissions';

module.exports = rootReducer = combineReducers({
  people: peopleReducer,
  permissions: permissions,
});