import React from 'react';
import { mount, shallow } from 'enzyme';
import Display from '../../client/src/components/Display';

describe('Display', () => {
  it('passes most recent imgUrl prop to the top image src', () => {
    const wrapper = mount(<Display imgUrl="a" />);
    expect(wrapper.find('Display__DynamicImage').last().props().src).toBe('a');
    wrapper.setProps({ imgUrl: 'b' });
    wrapper.update();
    expect(wrapper.find('Display__DynamicImage').last().props().src).toBe('b');
    wrapper.unmount();
  });

  it('passes previous imgUrl prop to the top image src', () => {
    const wrapper = mount(<Display imgUrl="a" />);
    wrapper.setProps({ imgUrl: 'b' });
    wrapper.update();
    expect(wrapper.find('Display__Image').first().props().src).toBe('a');
    wrapper.setProps({ imgUrl: 'c' });
    wrapper.update();
    expect(wrapper.find('Display__Image').first().props().src).toBe('b');
  });

  it('renders a Placeholder before the image is loaded', () => {
    const wrapper = shallow(<Display />);
    expect(wrapper.find('Placeholder')).toExist();
  });
});
