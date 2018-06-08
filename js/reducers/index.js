import { combineReducers } from 'redux';
import peopleReducer from './peopleReducer';

module.exports = rootReducer = combineReducers({
  people: peopleReducer
});