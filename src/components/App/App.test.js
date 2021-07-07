import React from 'react';
// TODO review import/exports of modules
import { shallow } from 'enzyme';
// TODO what is shallow method from Enzyme
import App from './App';
import Timer from '../Timer/Timer'

let container;

beforeEach(() => { container = shallow(<App />) })
describe('App', () => {
  it('should render a div', () => {
    expect(container.find('div').length).toEqual(1);
  })
  it('should render the Timer component', () => {
    expect(container.containsMatchingElement(<Timer />)).toEqual(true);
  })
})