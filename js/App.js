import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ContactsScreen from './ContactsScreen';
import HomeScreen from './HomeScreen';


const RootStack = createStackNavigator(
  {
    Home: HomeScreen,
    Contacts: ContactsScreen,
  },
  {
    initalRouteName: 'Home',
  }
);

export default class App extends React.Component {
  render() {
    return <RootStack/>;
  }
}