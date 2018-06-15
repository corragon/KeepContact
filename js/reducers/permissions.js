const defaultState = {
  contacts: 'unknown'
};
export const CONTACTS = 'CONTACTS';

export default function permissions(state = defaultState, action) {
  switch(action.type) {
    case CONTACTS:
      return {contacts: action.contacts};
    default:
      return state;
  }
}