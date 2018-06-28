import React from 'react';
import { Button, FlatList, StyleSheet, Text, View } from 'react-native';

export default class AppContactsScreen extends React.Component {
  static navigationOptions = {
    title: 'App Contacts Screen',
  };

  render() {
    const placeholderData = [
      {name: 'Bob', key:'1'},
      {name: 'Frank', key:'2'},
      {name: 'Jim', key:'3'},
    ];
    return (
      <View style={styles.container}>
        <Text>The placeholder list is below this:</Text>
        <FlatList
          style={styles.list}
          data={placeholderData}
          renderItem={({item}) => {
            return <Text>Name: {item.name}</Text>
          }}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate('Home')}
        />
        <Button
          title="Go to Contacts"
          onPress={() => this.props.navigation.navigate('Contacts')}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
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
});