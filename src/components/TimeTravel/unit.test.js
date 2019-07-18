//Program
import React from 'react';
import { shallow, mount } from 'enzyme';
//
import Program from './';

describe('test suite of one react component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<Program />);
		expect(wrapper).toMatchSnapshot();
	});
});