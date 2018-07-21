import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

import AllergensService from './services/AllergensService';
import allergensListWithDataInjector from './containers/AllergensListWithData';
import AllergensPageHeader from './components/AllergensPageHeader';

const AllergensListWithData = allergensListWithDataInjector(AllergensService);

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AllergensPageHeader />
        <View style={styles.content}>
          <AllergensListWithData />
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  content: {}
});
