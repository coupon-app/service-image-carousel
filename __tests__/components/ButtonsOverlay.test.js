/* eslint-disable no-console */
import React from 'react';
import { shallow } from 'enzyme';
import ButtonsOverlay from '../../client/src/components/ButtonsOverlay';


describe('ButtonsOverlay', () => {
  it('invokes callback with -1 when left arrow is clicked', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<ButtonsOverlay onClick={mockCallback} />);
    const parentDiv = wrapper.findWhere((n) => n.name() === 'styled.div').first();
    parentDiv.children().first().simulate('click');
    expect(mockCallback).toHaveBeenCalledWith(-1);
  });

  it('invokes callback with 1 when right arrow is clicked', () => {
    const mockCallback = jest.fn();
    const wrapper = shallow(<ButtonsOverlay onClick={mockCallback} />);
    const parentDiv = wrapper.findWhere((n) => n.name() === 'styled.div').first();
    parentDiv.children().last().simulate('click');
    expect(mockCallback).toHaveBeenCalledWith(1);
  });
});
