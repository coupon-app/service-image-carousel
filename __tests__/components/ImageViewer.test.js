import React from 'react';
import { shallow } from 'enzyme';
import ImageViewer from '../../client/src/components/ImageViewer';

describe('ImageViewer', () => {
  it('passes imageUrl prop to the img src', () => {
    const wrapper = shallow(<ImageViewer imgUrl="someUrl" />);
    expect(wrapper.find('ImageViewer__Image').last().props().src).toBe('someUrl');
  });

  it('passes previous img src', () => {
    const wrapper = shallow(<ImageViewer imgUrl="someUrl" />);
    expect(wrapper.find('ImageViewer__Image').last().props().src).toBe('someUrl');
  });
});
