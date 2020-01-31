import React from 'react';
import { mount } from 'enzyme';
import ImageViewer from '../../client/src/components/ImageViewer';

describe('ImageViewer', () => {
  it('passes most recent imgUrl prop to the top image src', () => {
    const wrapper = mount(<ImageViewer imgUrl="a" />);
    expect(wrapper.find('ImageViewer__Image').last().props().src).toBe('a');
    wrapper.setProps({ imgUrl: 'b' });
    wrapper.update();
    expect(wrapper.find('ImageViewer__Image').last().props().src).toBe('b');
    wrapper.unmount();
  });

  it('passes previous imgUrl prop to the top image src', () => {
    const wrapper = mount(<ImageViewer imgUrl="a" />);
    wrapper.setProps({ imgUrl: 'b' });
    wrapper.update();
    expect(wrapper.find('ImageViewer__Image').first().props().src).toBe('a');
    wrapper.setProps({ imgUrl: 'c' });
    wrapper.update();
    expect(wrapper.find('ImageViewer__Image').first().props().src).toBe('b');
  });
});
