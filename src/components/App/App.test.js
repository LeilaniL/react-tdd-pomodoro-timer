import React from 'react';
// TODO review import/exports of modules
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  it('should render a div', () => {
    const container = shallow(<App />)
    expect(container.find('div').length).toEqual(1);
  })
})