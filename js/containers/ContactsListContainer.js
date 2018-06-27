import React from 'react';
import ContactsList from '../components/ContactsList';

import Contacts from 'react-native-contacts';
import { StyleSheet, Text, View } from 'react-native';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from '../actions';

class ContactsListContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      message: '',
      contacts: []
    }
  }
  componentWillMount() {
    let permissions = this.props.contactsPermission;
    if (permissions === 'authorized') {
      Contacts.getAll((err, contacts) => {
        if (err) throw err;
        if (contacts && contacts.length && contacts.length > 0) {
          this.setState({
            contacts: contacts,
            message: `Found ${contacts.length} contacts`,
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
    return (
      <View style={styles.container}>
        <Text>Container msg: {this.state.message}</Text>
        <ContactsList data={this.state.contacts}/>
      </View>
      );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'stretch',
    justifyContent: 'center',
  },
});

function mapStateToProps(state, props) {
  return {
    contactsPermission: state.permissions.contacts,
  }
}
function mapDispatchToProps(dispatch) {
  return bindActionCreators(Actions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(ContactsListContainer);