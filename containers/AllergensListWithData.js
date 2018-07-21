import React from 'react';
import { ActivityIndicator, View } from 'react-native';

import AllergensList from '../components/AllergensList';

class AllergensListWithData extends React.Component {
  constructor(props){
    super(props);

    this.state = { isLoading: true }
  }

  componentDidMount() {
    const { AllergensService } = this.props;

    AllergensService
      .get()
      .then((response) => {
        const { data } = response;

        this.setState({
          isLoading: false,
          allergens: data
        });
      })
  }

  render() {
    if(this.state.isLoading){
      return(
        <View style={{flex: 1, padding: 20}}>
          <ActivityIndicator/>
        </View>
      )
    }

    return(
      <AllergensList data={this.state.allergens} />
    );
  }
}

/*Instead of dependcy injection, export a function that creates an intance of the
container with the dependcies passed in*/
export default function withService(AllergensService) {
  const AllergensListWithDataAndService = (props) => (
    <AllergensListWithData
      AllergensService={ AllergensService }
      { ...props }
    />
  );

  return AllergensListWithDataAndService;
}
