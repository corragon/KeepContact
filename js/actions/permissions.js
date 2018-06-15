import Permissions from 'react-native-permissions';

export const REQUEST_CONTACTS_READ_WRITE = 'REQUEST_CONTACTS_READ_WRITE';
export function requestContactsReadWrite() {
  return function(dispatch, getState) {
    if(getState().contacts === 'authorized') {
      return;
    }
    return Permissions.request('contacts').then(
      response => dispatch(setContactsPermission(response)),
      rejected => dispatch(setContactsPermission('rejected')));
  };
}

function setContactsPermission(permission) {
  return {
    type: 'CONTACTS',
    contacts: permission
  }
}