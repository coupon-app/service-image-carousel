import React from 'react';
import { shallow } from 'enzyme';
import ThumbnailWrapper from '../../client/src/components/ThumbnailWrapper';

describe('ThumbnailWrapper', () => {
  it('renders an ImageThumbnail for every item in imageUrlArray', () => {
    // Test length of 2
    let wrapper = shallow(<ThumbnailWrapper imageUrlArray={['a', 'b']} />);
    expect(wrapper.find('ImageThumbnail')).toHaveLength(2);

    // Test length of 3
    wrapper = shallow(<ThumbnailWrapper imageUrlArray={['a', 'b', 'c']} />);
    expect(wrapper.find('ImageThumbnail')).toHaveLength(3);

    // Test length of 4
    wrapper = shallow(<ThumbnailWrapper imageUrlArray={['a', 'b', 'c', 'd']} />);
    expect(wrapper.find('ImageThumbnail')).toHaveLength(4);
  });

  it('invokes onChange callback on ImageThumbnail click', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<ThumbnailWrapper onChange={onChange} imageUrlArray={['a', 'b']} />);

    // Click first ImageThumbnail
    wrapper.find('ImageThumbnail').first().simulate('click');
    expect(onChange).toHaveBeenCalledTimes(1);

    // Click last ImageThumbnail
    wrapper.find('ImageThumbnail').last().simulate('click');
    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
