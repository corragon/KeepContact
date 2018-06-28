import React, { Component } from 'react';

import PhoneContactsScreen from '../screens/phoneContactsScreen';
import { createStackNavigator } from 'react-navigation';
import HomeScreen from '../screens/homeScreen';

export const Navigator = createStackNavigator(
  {
    Home: HomeScreen,
    Contacts: PhoneContactsScreen,
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