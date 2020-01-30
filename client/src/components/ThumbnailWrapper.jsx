import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import ImageThumbnail from './ImageThumbnail';


const ThumbnailWrapper = ({ imageUrlArray, selectedId, onChange }) => {
  const Thumbnails = imageUrlArray.map((imageUrl, i) => (
    <ImageThumbnail
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

ThumbnailWrapper.propTypes = {
  imageUrlArray: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectedId: PropTypes.number,
  onChange: PropTypes.func,
};

ThumbnailWrapper.defaultProps = {
  selectedId: 0,
  onChange: () => { },
};


// Styles
const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;

export default ThumbnailWrapper;
