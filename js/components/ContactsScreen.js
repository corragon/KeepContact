import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';
import Contacts from 'react-native-contacts';
import { bindActionCreators } from 'redux';
import * as Actions from '../actions';
import { connect } from 'react-redux';
import ContactsList from './ContactsList';

class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      contacts: [],
    };
  }
  componentWillMount() {
    let permissions = this.props.contactsPermisison;
    if (permissions === 'authorized') {
      Contacts.getAll((err, contacts) => {
        if (err) throw err;
        if (contacts && contacts.length && contacts.length > 0) {
          this.setState({
            contacts: contacts,
            message: `Got ${contacts.length} contacts`,
          });
        }
        else {
          this.setState({ message: `${JSON.stringify(contacts).slice(0, 40)}` });
        }
      });
    }
    else {
      this.setState({ message: `Permissions is currently ${permissions}` });
    }
  }
  render() {
    const permissions = this.props.contactsPermisison;
    const { navigation } = this.props;
    const itemId = navigation.getParam('itemId', 'NO-ID');
    const otherParam = navigation.getParam('otherParam', 'default other param value');

    if (permissions === 'authorized') {
      return this.renderContactsList();
    }
    else {
      return this.renderPermissionsRequest();
    }

    return (
      <View style={styles.container}>
        <Text>Contacts Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
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
    );
  }

  /**
   * METHODS
   */
  renderContactsList = () => {
    return (
      <View style={styles.container}>
        <Text>Msg: {this.state.message}</Text>
        <ContactsList data={this.state.contacts}/>
      </View>
    )
  };
  renderPermissionsRequest = () => {
    return (
      <View style={styles.container}>
        <Text>renderPermissionsRequest</Text>
        <Text>Permission: {this.props.contactsPermisison}</Text>
      </View>
    )
  };
}

function mapStateToProps(state, props) {
  return {
    contactsPermisison: state.permissions.contacts,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsScreen);

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  }
});