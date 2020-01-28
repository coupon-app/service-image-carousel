import React from 'react';
import { shallow } from 'enzyme';
import ImageThumbnail from '../../components/ImageThumbnail';

describe('<ImageThumbnail />', () => {
  it('invoke callback on click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<ImageThumbnail onClick={onClick}/>).dive();
    wrapper.find('img').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
