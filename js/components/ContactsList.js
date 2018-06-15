import React from 'react';
import ContactListItem from './ContactListItem';
import { FlatList, Text, View } from 'react-native';

export default class ContactsList extends React.PureComponent {
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
      thumbnailPath={item.thumbnailPath}
    />
  );

  render() {
    return (
      <View>
        <Text>{JSON.stringify(this.state.selected)}</Text>
        <FlatList
          data={this.props.data}
          extraData={this.state}
          keyExtractor={this._keyExtractor}
          renderItem={this._renderItem}
        />
      </View>
    )
  }
}