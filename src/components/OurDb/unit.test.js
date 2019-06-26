//OurDb
import React from 'react';
import { shallow, mount } from 'enzyme';
//
import OurDb from './';

describe('test suite of one react component', () => {
	it('renders correctly', () => {
		const wrapper = shallow(<OurDb />);
		expect(wrapper).toMatchSnapshot();
	});
});