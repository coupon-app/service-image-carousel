/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import ImageViewer from './components/ImageViewer';
import ThumbnailWrapper from './components/ThumbnailWrapper';
import ButtonsOverlay from './components/ButtonsOverlay';


const Wrapper = styled.div`
  display: flex;
  max-width: 700px;
  flex-direction: column;
`;

const ImageWrapper = styled.div`
  display: flex;
  position: relative;
`;

const App = ({ productId }) => {
  const [productImages, setProductImages] = useState([]);
  const [selectedId, setSelectedId] = useState(0);

  useEffect(() => {
    axios.get(`/api/products/${productId}`)
      .then((response) => response.data)
      .then((images) => setProductImages(images));
  }, []);

  const imgUrls = productImages.map((image) => image.imgUrl);
  const thumbnailUrls = productImages.map((image) => image.thumbnailUrl);

  const stepDisplay = (step) => {
    const numItems = imgUrls.length;

    const next = selectedId + step;

    if (next < 0) {
      setSelectedId(numItems - 1);
    } else {
      setSelectedId(next % numItems);
    }
  }

  return (
    <Wrapper>
      <ImageWrapper>
        <ImageViewer imgUrl={imgUrls[selectedId]} />
        <ButtonsOverlay
          onClick={(step) => stepDisplay(step)}
        />
      </ImageWrapper>
      <ThumbnailWrapper
        imageUrlArray={thumbnailUrls}
        selectedId={selectedId}
        onChange={(id) => setSelectedId(id)}
      />
    </Wrapper>
  );
};

export default App;
