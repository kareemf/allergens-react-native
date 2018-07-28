require('react-native-mock/mock');

import React from 'react';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';

import { ActivityIndicator, View } from 'react-native';

import AllergensList from '../components/AllergensList';
import allergensListWithDataInjector from './AllergensListWithData';


class AllergensServiceMock {
  static promise;
  static get() {
    AllergensServiceMock.promise = Promise.resolve({
      data: [{
        name: "hi",
      }]
    });

    return AllergensServiceMock.promise
  }
}

it('renders without crashing', () => {
  const AllergensListWithData = allergensListWithDataInjector(AllergensServiceMock);
  const rendered = renderer.create( <AllergensListWithData/> ).toJSON();

  expect(rendered).toBeTruthy();
});


describe('#1581', () => {
  it('should works fine', done => {
    const AllergensListWithData = allergensListWithDataInjector(AllergensServiceMock);
    const wrapper = shallow(<AllergensListWithData/>);

    // expect(wrapper.text()).toEqual('loading');
    let containsSpinner = wrapper.containsMatchingElement( <ActivityIndicator/> );
    expect(containsSpinner).toBeFalsey();

    AllergensServiceMock.promise.then(() => {
      wrapper.update();
      // expect(wrapper.text()).toEqual('bar');
      let containsList = wrapper.containsMatchingElement( <ActivityIndicator/> );
      expect(containsList).toBeTruthy();

      done();
    });
  });
});
