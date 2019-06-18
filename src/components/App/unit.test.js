//App
import React from 'react';
import { shallow } from 'enzyme';
//
import App from './';

describe('React component test with Enzyme', () => {
    it('renders without crashing', () => {
        shallow(<App />)
    });
});