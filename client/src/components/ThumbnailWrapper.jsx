/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';
import ImageThumbnail from './ImageThumbnail';


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;


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

export default ThumbnailWrapper;
