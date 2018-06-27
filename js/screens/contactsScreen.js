import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Contacts from 'react-native-contacts';
import ContactsListContainer from '../containers/ContactsListContainer';

export default class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      contacts: [],
    };
  }

  render() {
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'default other param value');

    return (
      <View style={styles.container}>
        <Text>Screen Msg: {this.state.message}</Text>
        <ContactsListContainer {...this.props}/>
        {/*<ContactsList data={this.state.contacts}/>*/}
        <Text>Contacts Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <View style={styles.bottomRow}>
          <Button
            title="Go to Contacts... again"
            onPress={() =>
              this.props.navigation.push('Contacts', {
                itemId: Math.floor(Math.random() * 100),
              })}
          />
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