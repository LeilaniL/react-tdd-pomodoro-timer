import React from 'react';
import { shallow } from 'enzyme';
import Timer from './Timer';
// import { describe } from 'yargs';

let container;

beforeEach(() => (container = shallow(<Timer />)))
describe('Timer', () => {

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})
