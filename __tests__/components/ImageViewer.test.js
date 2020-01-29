import React from 'react';
import { shallow } from 'enzyme';
import ImageViewer from '../../client/src/components/ImageViewer';

describe('ImageViewer', () => {
  it('passes imageUrl prop to the img src', () => {
    const wrapper = shallow(<ImageViewer imgUrl="someUrl" />).dive();
    expect(wrapper.find('img').props().src).toBe('someUrl');
  });
});
