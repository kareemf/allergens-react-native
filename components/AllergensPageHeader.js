import React from 'react';
import {
  Text,
  View,
  StyleSheet,
  Button
} from 'react-native';

export default class AllergensPageHeader extends React.Component {
  _onAdd() {
    console.log("_onAdd invoked!")
  }

  render() {
    return (
      <View style={styles.header}>
        <View style={styles.navBar}>
          <View style={styles.title}>
            <Text>Allergens</Text>
          </View>

          <View style={styles.buttons}>
            <Button
                onPress={this._onAdd}
                title="Add"
                style={styles.buttonPrimary}
              />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  header: {},
  navBar: {},
  title: {},
  buttons: {},
  buttonPrimary: {},
});
