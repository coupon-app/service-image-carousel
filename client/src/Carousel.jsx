/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ImageViewer from './components/ImageViewer';
import ThumbnailWrapper from './components/ThumbnailWrapper';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;

const App = ({ productId }) => {
  const [productImages, setProductImages] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  const imgUrls = productImages.map((image) => image.imgUrl);
  const thumbnailUrls = productImages.map((image) => image.thumbnailUrl);

  useEffect(() => {
    axios.get(`/api/products/${productId}`)
      .then((response) => response.data)
      .then((images) => setProductImages(images));
  }, []);


  return (
    <Wrapper>
      <ImageViewer imageUrl={imgUrls[selectedId]} />
      <ThumbnailWrapper
        imageUrlArray={thumbnailUrls}
        selectedId={selectedId}
        onChange={(id) => setSelectedId(id)}
      />
    </Wrapper>
  );
};

export default App;
