import React, { Component } from 'react';

import ContactsScreen from './ContactsScreen';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from './HomeScreen';

export const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Contacts: ContactsScreen,
  },
  {
    initalRouteName: 'Home',
  }
);

class Nav extends Component {
  render() {
    return (
      <Navigator />
    )
  }
}

export default Nav;