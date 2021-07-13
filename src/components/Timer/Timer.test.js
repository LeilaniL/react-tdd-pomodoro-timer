import React from 'react';
import { mount, shallow } from 'enzyme';
import Timer from './Timer';

describe('Timer', () => {

  let container;

  beforeEach(() => (container = shallow(<Timer />)));

  it('should render <div />', () => {
    expect(container.find('div').length).toEqual(3);
  });

  it('should render instances of the TimerButton component', () => {
    expect(container.find('TimerButton').length).toBeGreaterThanOrEqual(1);
  });

});

describe('mounted Timer', () => {
  let container;

  beforeEach(() => (container = mount(<Timer />)));
  // TODO what does the mount function do, why use it instead of copying component like other tests?

  it('invokes startTimer when the start button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'startTimer');
    container.instance().forceUpdate();
    // TODO look up React instance(), forceUpdate(), simulate
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.start-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('invokes stopTimer when the stop button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'stopTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.stop-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('invokes resetTimer when the reset button is clicked', () => {
    const spy = jest.spyOn(container.instance(), 'resetTimer');
    container.instance().forceUpdate();
    expect(spy).toHaveBeenCalledTimes(0);
    container.find('.reset-timer').first().simulate('click');
    expect(spy).toHaveBeenCalledTimes(1);
  });

  it('should change isOn state to true when the start button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.start-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(true);
  });

  it('should change isOn state to false when the stop button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.stop-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
  });

  it('should change isOn state false when the reset button is clicked', () => {
    container.instance().forceUpdate();
    container.find('.stop-timer').first().simulate('click');
    expect(container.instance().state.isOn).toEqual(false);
  });
})

