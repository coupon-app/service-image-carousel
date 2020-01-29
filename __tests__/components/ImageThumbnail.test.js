import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ImageThumbnail from '../../client/src/components/ImageThumbnail';

describe('ImageThumbnail', () => {
  it('invoke callback on click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<ImageThumbnail onClick={onClick} />).dive();
    wrapper.find('img').simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('have 4px border when selected', () => {
    const tree = renderer.create(<ImageThumbnail isSelected />).toJSON();
    expect(tree).toHaveStyleRule('border', /4px/);
  });
});
