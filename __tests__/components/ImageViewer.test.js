import React from 'react';
import { shallow } from 'enzyme';
import ImageViewer from '../../client/src/components/ImageViewer';

describe('ImageViewer', () => {
  it('passes most recent imageUrl prop to the top image src', () => {
    const wrapper = shallow(<ImageViewer imgUrl="a" />);
    expect(wrapper.find('ImageViewer__Image').last().props().src).toBe('a');
  });
});
