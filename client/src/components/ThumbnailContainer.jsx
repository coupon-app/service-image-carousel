import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Thumbnail from './Thumbnail';


const ThumbnailContainer = ({ imageUrlArray, selectedId, onChange }) => {
  const Thumbnails = imageUrlArray.map((imageUrl, i) => (
    <Thumbnail
      src={imageUrl}
      key={imageUrl}
      onClick={() => onChange(i)}
      isSelected={i === selectedId}
    />
  ));

  return (
    <Wrapper>
      {Thumbnails}
    </Wrapper>
  );
};

ThumbnailContainer.propTypes = {
  imageUrlArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedId: PropTypes.number,
  onChange: PropTypes.func,
};

ThumbnailContainer.defaultProps = {
  selectedId: 0,
  onChange: () => { },
};


// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export default ThumbnailContainer;
