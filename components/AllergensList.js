import React from 'react';
import {
  Text,
  View,
  FlatList
} from 'react-native';

//TODO: propTypes
export default class AllergensList extends React.Component {
  render() {
    const { data } = this.props;

    return (
      <View>
        <FlatList
          data={data}
          keyExtractor={(item, index) => item.name}
          renderItem={({item}) => <Text>{item.name}</Text>}
        />
      </View>
    );
  }
}
