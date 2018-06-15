import { ADD_PERSON, DELETE_PERSON } from '../actions/actions';

const defaultState = {
  people: ["What"],
  testMessage: "this is a test message!",
  count: 0,
};

export default function peopleReducer(state = defaultState, action) {
  switch(action.type) {
    case ADD_PERSON:
      return {
        people: [...state.people, action.person],
      };
    case DELETE_PERSON:
      return {
        people: state.people.filter(p => p.name !== action.person.name),
      };
    case 'TEST':
      return {
        testMessage: 'Test message changed ' + state.count,
        count: state.count + 1,
      };
    default:
      return state;
  }
}