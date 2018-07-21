import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Header, Icon } from 'react-native-elements';

const styles = StyleSheet.create({
  header: {},
  navBar: {},
  title: {},
  buttons: {},
  buttonPrimary: {},
});

const AddAllergenButton = (props) => (
  <Icon
    name='add-circle'
    onPress={props.onPress}
  />
);

export default class AllergensPageHeader extends React.Component {
  _handleAdd() {
    console.log("_handleAdd invoked!")
  }

  render() {
    return (
      <Header
        leftComponent={<View/>}
        centerComponent={{ text: 'Allergens', style: { color: '#fff' } }}
        rightComponent={<AddAllergenButton onPress={this._handleAdd}/>}
      />
    );
  }
}
