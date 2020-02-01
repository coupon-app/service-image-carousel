import React from 'react';
import { mount, shallow } from 'enzyme';
import Carousel from '../client/src/Carousel';

describe('Carousel', () => {
  it('provides an imgUrl prop to Display', () => {
    const wrapper = shallow(<Carousel />);
    expect(wrapper.find('Display').props()).toHaveProperty('imgUrl');
  });

  it('provides an onClick callback to Controls', () => {
    const wrapper = shallow(<Carousel />);
    // Set multiple images so Controls renders
    wrapper.setState({ imgUrls: ['a', 'b'], thumbnailUrls: ['c', 'd'] });
    expect(wrapper.find('Controls').props().onClick).toBeInstanceOf(Function);
  });

  it('passes currently selected image to Display', () => {
    const wrapper = shallow(<Carousel />);
    wrapper.instance().setState({ imgUrls: ['a', 'b'], selectedId: 1 });
    wrapper.update();

    expect(wrapper.find('Display').props().imgUrl).toBe('b');
  });

  it('invokes updateProductImgs method when provided a new productId', () => {
    const wrapper = shallow(<Carousel productId={1} />);
    const mockUpdateImg = jest.fn();
    wrapper.instance().updateProductImgs = mockUpdateImg;
    wrapper.setProps({ productId: 2 });
    expect(mockUpdateImg).toBeCalledTimes(1);
  });

  it('callback updates the imgUrl prop passed to Display', () => {
    const wrapper = shallow(<Carousel />);
    // wrapper.instance().updateProductImgs = jest.fn();
    wrapper.setState({ imgUrls: ['a', 'b', 'c'] });
    wrapper.instance().stepDisplay(1);
    wrapper.update();
    expect(wrapper.find('Display').props().imgUrl).toBe('b');
  });

  it('callback wraps image navigation', () => {
    const wrapper = shallow(<Carousel />);
    wrapper.setState({ imgUrls: ['a', 'b', 'c'] });
    wrapper.instance().stepDisplay(-1);
    expect(wrapper.find('Display').props().imgUrl).toBe('c');
    wrapper.setState({ selectedId: 2 });
    wrapper.instance().stepDisplay(1);
    expect(wrapper.find('Display').props().imgUrl).toBe('a');
  });

  it('changes to correct image when next button is pressed', () => {
    const wrapper = mount(<Carousel />);
    wrapper.setState({ imgUrls: ['a', 'b', 'c'] });
    wrapper.find('Controls__Button').last().simulate('click');
    expect(wrapper.state('selectedId')).toBe(1);
    wrapper.find('Controls__Button').first().simulate('click');
    expect(wrapper.state('selectedId')).toBe(0);
  });

  it('changes to correct image when a Thumbnail is pressed', () => {
    const wrapper = mount(<Carousel />);
    wrapper.setState({ thumbnailUrls: ['a', 'b', 'c'] });
    wrapper.find('Thumbnail').last().simulate('click');
    expect(wrapper.state('selectedId')).toBe(2);
  });

  it('does not render ThumbnailWrapper if there is only one Thumbnail', () => {
    const wrapper = mount(<Carousel />);
    wrapper.setState({ imgUrls: ['a'], thumbnailUrls: ['b'] });
    expect(wrapper.find('ThumbnailWrapper')).not.toExist();
  });

  it('does not render Controls if there is only one image', () => {
    const wrapper = mount(<Carousel />);
    wrapper.setState({ imgUrls: ['a'], thumbnailUrls: ['b'] });
    expect(wrapper.find('Controls')).not.toExist();
  });
});
