import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import ContactsListContainer from '../containers/PhoneContactsListContainer';

export default class PhoneContactsScreen extends React.Component {
  static navigationOptions = {
    title: 'Select Phone Contacts',
  };
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      contacts: [],
    };
  }

  render() {
    return (
      <View style={styles.container}>
        <Text>Screen Msg: {this.state.message}</Text>
        <ContactsListContainer/>
        <View style={styles.bottomRow}>
          <Button
            title="Go to Home"
            onPress={() => this.props.navigation.navigate('Home')}
          />
          <Button
            title="Go back"
            onPress={() => this.props.navigation.goBack()}
          />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
  list: {
    flex: 1,
  },
  bottomRow: {
  }
});