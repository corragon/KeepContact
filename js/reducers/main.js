import { ADD_PERSON, DELETE_PERSON } from '../constants';

let defaultState = {
  people: ["What"],
  testMessage: "this is a test message!"
};

export default function main(state = defaultState, action) {
  switch(action.type) {
    case ADD_PERSON:
      return {
        people: [...state.people, action.person],
      };
    case DELETE_PERSON:
      return {
        people: state.people.filter(p => p.name !== action.person.name),
      };
    default:
      return state;
  }
}