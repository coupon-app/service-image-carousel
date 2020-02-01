import React from 'react';
import { shallow } from 'enzyme';
import Controls from '../../client/src/components/Controls';


describe('Controls', () => {
  it('invokes callback with -1 when left arrow is clicked', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<Controls onClick={mockCallback} />);
    wrapper.find('Controls__Button').first().simulate('click');
    expect(mockCallback).toHaveBeenCalledWith(-1);
  });

  it('invokes callback with 1 when right arrow is clicked', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<Controls onClick={mockCallback} />);
    wrapper.find('Controls__Button').last().simulate('click');
    expect(mockCallback).toHaveBeenCalledWith(1);
  });
});
