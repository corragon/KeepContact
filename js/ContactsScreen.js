import React from 'react';
import { FlatList, TouchableOpacity, Button, StyleSheet, Text, View } from 'react-native';
import Contacts from 'react-native-contacts';
import Permissions from 'react-native-permissions';

export default class ContactsScreen extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: '',
      contacts: [],
    };
  }
  componentWillMount() {
    let permissions = this.props.navigation.getParam('permissions');
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
    const permissions = this.props.navigation.getParam('permissions');
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
        <Text>Permission: {this.props.navigation.getParam('permissions')}</Text>
      </View>
    )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  contactListItem: {
    minHeight: 30,
  }
});

class ContactListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };
  render() {
    const textColor = this.props.selected ? "red" : "black";
    const {familyName, givenName, middleName, selected} = this.props;
    let displayName = givenName;
    if (middleName !== givenName) {
      displayName += middleName ? ' ' + middleName : '';
    }
    if (familyName !== givenName && familyName !== middleName) {
      displayName += ' ' + (familyName||'');
    }

    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={styles.contactListItem}>
          <Text style={{ color: textColor }}>
            {displayName}
          </Text>
          {selected ? <Text style={{ color: textColor }}>Given: {givenName}</Text> : null}
          {selected ? <Text style={{ color: textColor }}>Middle: {middleName}</Text> : null}
          {selected ? <Text style={{ color: textColor }}>Last: {familyName}</Text> : null}
        </View>
      </TouchableOpacity>
    );
  }
}

class ContactsList extends React.PureComponent {
  state = { selected: new Map()};

  _keyExtractor = (item, index) => item.recordID;

  _onPressItem = (id) => {
    this.setState((state) => {
      const selected = new Map(state.selected);
      selected.set(id, !selected.get(id));
      return {selected};
    })
  };

  _renderItem = ({item}) => (
    <ContactListItem
      id={item.recordID}
      onPressItem={this._onPressItem}
      selected={!!this.state.selected.get(item.recordID)}
      familyName={item.familyName}
      givenName={item.givenName}
      middleName={item.middleName}
    />
  );

  render() {
    return (
      <FlatList
        data={this.props.data}
        extraData={this.state}
        keyExtractor={this._keyExtractor}
        renderItem={this._renderItem}
      />
    )
  }
}