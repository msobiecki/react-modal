import * as React from 'react';
import { shallow } from 'enzyme';
import { Modal } from './Modal';

it('Renders without crashing', () => {
  const wrapper = shallow(<Modal />);
  expect(wrapper).toMatchSnapshot();
});
