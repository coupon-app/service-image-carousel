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

  it('passes currently selected image to ImageViewer', () => {
    const wrapper = shallow(<Carousel />);
    wrapper.instance().setState({ imgUrls: ['a', 'b'], selectedId: 1 });
    wrapper.update();

    expect(wrapper.find('ImageViewer').props().imgUrl).toBe('b');
  });

  it('invokes updateProductImgs method when provided a new productId', () => {
    const wrapper = shallow(<Carousel productId={1} />);
    const mockUpdateImg = jest.fn();
    wrapper.instance().updateProductImgs = mockUpdateImg;
    wrapper.setProps({ productId: 2 });
    expect(mockUpdateImg).toBeCalledTimes(1);
  });

  it('callback updates the imgUrl prop passed to ImageViewer', () => {
    const wrapper = shallow(<Carousel />);
    // wrapper.instance().updateProductImgs = jest.fn();
    wrapper.setState({ imgUrls: ['a', 'b', 'c'] });
    wrapper.instance().stepDisplay(1);
    wrapper.update();
    expect(wrapper.find('ImageViewer').props().imgUrl).toBe('b');
  });

  it('callback wraps image navigation', () => {
    const wrapper = shallow(<Carousel />);
    wrapper.setState({ imgUrls: ['a', 'b', 'c'] });
    wrapper.instance().stepDisplay(-1);
    expect(wrapper.find('ImageViewer').props().imgUrl).toBe('c');
    wrapper.setState({ selectedId: 2 });
    wrapper.instance().stepDisplay(1);
    expect(wrapper.find('ImageViewer').props().imgUrl).toBe('a');
  });
});
