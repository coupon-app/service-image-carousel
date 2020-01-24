/* eslint-disable react/prop-types */
import React, { useState } from 'react';
import styled from 'styled-components';
import ImageThumbnail from './ImageThumbnail';


const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 10px;
`;


const ThumbnailWrapper = ({ imageUrlArray }) => {
  const [selectedThumbnailID, setSelectedThumbnailID] = useState(0);

  const Thumbnails = imageUrlArray.map((imageUrl, i) => (
    <ImageThumbnail
      src={imageUrl}
      key={imageUrl}
      onClick={() => setSelectedThumbnailID(i)}
      isSelected={i === selectedThumbnailID}
    />
  ));

  return (
    <Wrapper>
      {Thumbnails}
    </Wrapper>
  );
};

export default ThumbnailWrapper;
