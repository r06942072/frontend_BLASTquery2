//ResetSubmit
import React from 'react';
import { shallow, mount } from 'enzyme';
//
import ResetSubmit from './';

describe('test suite of one react component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<ResetSubmit />);
		expect(wrapper).toMatchSnapshot();
	});
});