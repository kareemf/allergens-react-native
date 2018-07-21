import React from 'react';
import AllergensPageHeader from './AllergensPageHeader';

import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const rendered = renderer.create( <AllergensPageHeader/> ).toJSON();
  expect(rendered).toBeTruthy();
});

it('renders correctly', () => {
      // given jest snapshot data
      const snapshotData = [{
        name: 'Foo'
      }];

      // when component is rendered
      const rendered = renderer.create( <AllergensPageHeader data = {
          snapshotData
        }
        /> ).toJSON();

        // then rendered tree matches snapshot
        expect(rendered).toMatchSnapshot();
      });
