import React from 'react';
import { shallow } from 'enzyme';
import Carousel from '../client/src/Carousel';

describe('Carousel', () => {
  it('provides an imgUrl prop to ImageViewer', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.find('ImageViewer').props()).toHaveProperty('imgUrl');
  });

  it('provides an onClick callback to ButtonsOverlay', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.find('ButtonsOverlay').props().onClick).toBeInstanceOf(Function);
  });
});
