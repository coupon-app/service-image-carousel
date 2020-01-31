import React from 'react';
import { shallow } from 'enzyme';
import ImageThumbnail from '../../client/src/components/ImageThumbnail';

describe('ImageThumbnail', () => {
  it('invoke callback on click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<ImageThumbnail onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('sets borders to invisible when not selected', () => {
    const wrapper = shallow(<ImageThumbnail isSelected={false} />);
    expect(wrapper.find('ImageThumbnail__InnerBorder').props().visible).toBeFalsy();
    expect(wrapper.find('ImageThumbnail__OuterBorder').props().visible).toBeFalsy();
  });

  it('sets inner border to invisible when not selected', () => {
    const wrapper = shallow(<ImageThumbnail isSelected />);
    expect(wrapper.find('ImageThumbnail__InnerBorder').props().visible).toBeTruthy();
    expect(wrapper.find('ImageThumbnail__OuterBorder').props().visible).toBeTruthy();
  });
});
