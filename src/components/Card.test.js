import React from 'react';
import { shallow } from 'enzyme';
import Card from './Card';

it(' is expected to render CardList component', () => {
    expect(shallow(<Card/>)).toMatchSnapshot();
});