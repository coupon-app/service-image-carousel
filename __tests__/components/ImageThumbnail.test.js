import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import 'jest-styled-components';
import ImageThumbnail from '../../client/src/components/ImageThumbnail';

describe('ImageThumbnail', () => {
  it('invoke callback on click', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<ImageThumbnail onClick={onClick} />);
    wrapper.simulate('click');
    expect(onClick).toHaveBeenCalledTimes(1);
  });

  it('has a border of 0 when not selected', () => {
    const tree = renderer.create(<ImageThumbnail isSelected={false} />).toJSON();
    const borderDivs = tree.children.filter((element) => element.type === 'div');
    borderDivs.forEach((borderDiv) => {
      expect(borderDiv).toHaveStyleRule('border', /0/);
    });
  });

  it('has border of more than 0px when selected', () => {
    const tree = renderer.create(<ImageThumbnail isSelected />).toJSON();
    const borderDivs = tree.children.filter((element) => element.type === 'div');
    borderDivs.forEach((borderDiv) => {
      expect(borderDiv).toHaveStyleRule('border', /\b(?!0px\b)\w+/);
    });
  });
});
