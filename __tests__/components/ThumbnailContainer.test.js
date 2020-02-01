import React from 'react';
import { shallow } from 'enzyme';
import ThumbnailContainer from '../../client/src/components/ThumbnailContainer';

describe('ThumbnailContainer', () => {
  it('renders a Thumbnail for every item in imageUrlArray', () => {
    // Test length of 2
    let wrapper = shallow(<ThumbnailContainer imageUrlArray={['a', 'b']} />);
    expect(wrapper.find('Thumbnail')).toHaveLength(2);

    // Test length of 3
    wrapper = shallow(<ThumbnailContainer imageUrlArray={['a', 'b', 'c']} />);
    expect(wrapper.find('Thumbnail')).toHaveLength(3);

    // Test length of 4
    wrapper = shallow(<ThumbnailContainer imageUrlArray={['a', 'b', 'c', 'd']} />);
    expect(wrapper.find('Thumbnail')).toHaveLength(4);
  });

  it('invokes onChange callback on Thumbnail click', () => {
    const onChange = jest.fn();
    const wrapper = shallow(<ThumbnailContainer onChange={onChange} imageUrlArray={['a', 'b']} />);

    // Click first Thumbnail
    wrapper.find('Thumbnail').first().simulate('click');
    expect(onChange).toHaveBeenCalledTimes(1);

    // Click last Thumbnail
    wrapper.find('Thumbnail').last().simulate('click');
    expect(onChange).toHaveBeenCalledTimes(2);
  });
});
