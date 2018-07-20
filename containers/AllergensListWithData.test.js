import React from 'react';
import allergensListWithDataInjector from './AllergensListWithData';

import renderer from 'react-test-renderer';

class AllergensServiceMock {
  static get() {
    return Promise.resolve({
      data: [{
        name: "hi",
      }]
    });
  }
}

it('renders without crashing', () => {
  const AllergensListWithData = allergensListWithDataInjector(AllergensServiceMock);
  const rendered = renderer.create( <AllergensListWithData/> ).toJSON();
  expect(rendered).toBeTruthy();
});
