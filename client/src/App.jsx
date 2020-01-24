import React, { useState } from 'react';
import styled from 'styled-components';
import ImageViewer from './components/ImageViewer';
import ThumbnailWrapper from './components/ThumbnailWrapper';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 700px;
`;


const App = () => {
  const [selectedId, setSelectedId] = useState(0);

  // Dummy data
  const images = [
    'https://img.grouponcdn.com/deal/cE4adwk8LoGPCSkuGpQoa3yGhpL/cE-2048x1229/v1/c700x420.jpg',
    'https://img.grouponcdn.com/deal/3XaN3FLaJxXe1DGZSQ2Z7jim5iDk/3X-1280x768/v1/c700x420.jpg',
    'https://img.grouponcdn.com/deal/3F7KshYRvuCDPF6LVNUBaKcJFFMx/3F-1280x768/v1/c700x420.jpg',
    'https://img.grouponcdn.com/deal/ncgvaXVoswYer3Lz5X5Md5Vs5TA/nc-1000x600/v1/c700x420.jpg',
    'https://img.grouponcdn.com/deal/FWtWxYkBosrvhwDLTMTGhnwuhX9/FW-1200x720/v1/c700x420.jpg',
  ];

  return (
    <Wrapper>
      <ImageViewer imageUrl={images[selectedId]} />
      <ThumbnailWrapper
        imageUrlArray={images}
        selectedId={selectedId}
        onChange={(id) => setSelectedId(id)}
      />
    </Wrapper>
  );
};

export default App;
