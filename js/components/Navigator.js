import React, { Component } from 'react';

import ContactsScreen from '../screens/contactsScreen';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/homeScreen';

export const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Contacts: ContactsScreen,
  },
  {
    initalRouteName: 'Home',
  }
);

export default class Nav extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}