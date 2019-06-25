//YourQuery
import React from 'react';
import { shallow, mount } from 'enzyme';
//
import YourQuery from './';

describe('test suite of one react component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<YourQuery />);
		expect(wrapper).toMatchSnapshot();
	});
	it('test 2', () => {
		
	});
});