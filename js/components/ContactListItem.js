import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default class ContactListItem extends React.PureComponent {
  _onPress = () => {
    this.props.onPressItem(this.props.id);
  };
  render() {
    const {familyName, givenName, middleName, selected, thumbnailPath } = this.props;
    const bgColor = selected ? "#dde" : "#fff";

    let displayName = givenName;
    if (middleName !== givenName) {
      displayName += middleName ? ' ' + middleName : '';
    }
    if (familyName !== givenName && familyName !== middleName) {
      displayName += ' ' + (familyName||'');
    }

    return (
      <TouchableOpacity onPress={this._onPress}>
        <View style={[styles.contactListItem, {backgroundColor:bgColor}]}>
          <Text>{displayName}</Text>
          {selected ? <Text>Given: {givenName}</Text> : null}
          {selected ? <Text>Middle: {middleName}</Text> : null}
          {selected ? <Text>Last: {familyName}</Text> : null}
        </View>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  contactListItem: {
    minHeight: 30,
  }
});