import React from 'react';
import { shallow } from 'enzyme';
import Thumbnail from '../../client/src/components/Thumbnail';

describe('Thumbnail', () => {
  it('invoke callback on click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<Thumbnail onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('sets borders to invisible when not selected', () => {
    const wrapper = shallow(<Thumbnail isSelected={false} />);
    expect(wrapper.find('Thumbnail__InnerBorder').props().visible).toBeFalsy();
    expect(wrapper.find('Thumbnail__OuterBorder').props().visible).toBeFalsy();
  });

  it('renders a Placeholder before the image is loaded', () => {
    const wrapper = shallow(<Thumbnail />);
    expect(wrapper.find('Placeholder')).toExist();
  });

  it('does not render a Placeholder after the image has loaded', () => {
    const wrapper = shallow(<Thumbnail />);
    wrapper.find('Thumbnail__Image').dive().simulate('load');
    expect(wrapper.find('Placeholder')).not.toExist();
  });
});
