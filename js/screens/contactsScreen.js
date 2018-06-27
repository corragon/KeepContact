import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Contacts from 'react-native-contacts';
import ContactsListContainer from '../containers/ContactsListContainer';

export default class ContactsScreen extends React.Component {
  static navigationOptions = {
    title: 'Contacts',
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
        <ContactsListContainer {...this.props}/>
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