import React from 'react';
import { createStackNavigator } from 'react-navigation';
import ContactsScreen from './ContactsScreen';
import HomeScreen from './HomeScreen';
import Logger from './Logger';
import { AsyncStorage } from 'react-native';


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
  constructor(props) {
    super(props);

    this.appStateKey = 'appStateKey';
    this.state = {
      selectedContacts: [],
    }
  }

  // Check the status of a single permission
  async componentDidMount() {
    let loadState;
    try {
      loadState = await AsyncStorage.getItem(this.appStateKey);
      if (loadState !== null) {
        loadState = JSON.parse(loadState);
        this.setState(loadState);
      }
    }
    catch (e) {
      console.log(e);
    }
  }

  async componentWillUnmount() {
    try {
      await AsyncStorage.setItem(this.appStateKey, JSON.stringify(this.state));
    }
    catch (e) {
      console.log(e);
    }
  }

  render() {
    return (
      <Logger>
        <RootStack selectedContacts={this.state.selectedContacts}/>
      </Logger>
    );
  }
}