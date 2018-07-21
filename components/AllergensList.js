import React from 'react';
import { View, Text } from 'react-native';
import { List, ListItem } from 'react-native-elements'

//TODO: propTypes
export default class AllergensList extends React.Component {
  render() {
    const { data } = this.props;

    if (!data || !data.length) {
      return (
        <View>
          <Text>Empty list</Text>
        </View>
      );
    }

    return (
      <List>
        {
          data.map((item, i) => (
            <ListItem
              key={i}
              title={item.name}
            />
          ))
        }
      </List>
    );
  }
}
