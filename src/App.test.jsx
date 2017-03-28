import React from 'react';
import { shallow } from 'enzyme';

import App from './App';

it('renders without crashing', () => {
  shallow(<App />);
});

it('renders welcome message', () => {
  const wrapper = shallow(<App />);
  const welcome = <h2>Hello from React-grid</h2>;
  expect(wrapper.contains(welcome)).toEqual(true);
});
