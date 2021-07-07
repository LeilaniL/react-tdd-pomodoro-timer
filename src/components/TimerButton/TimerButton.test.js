import React from 'react';
import { shallow } from 'enzyme';
import TimerButton from './TimerButton';
// import { describe } from 'yargs';

describe('TimerButton', () => {

  let container;

  beforeEach(() => {
    container = shallow(
      <TimerButton
        // TODO look up jest.fn method
        buttonAction={jest.fn()}
        buttonValue={""}
      />
    )
  })

  it("should render a <div />", () => {
    expect(container.find("div").length).toBeGreaterThanOrEqual(1)
  })
})
