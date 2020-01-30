/* eslint-disable react/prop-types */
import React from 'react';
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


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgUrls: [], thumbnailUrls: [], selectedId: 0 };
  }

  componentDidMount() {
    const { productId } = this.props;

    axios.get(`/api/products/${productId}`)
      .then((response) => response.data)
      .then((productImages) => {
        const imgUrls = productImages.map((image) => image.imgUrl);
        const thumbnailUrls = productImages.map((image) => image.thumbnailUrl);
        this.setState(({ imgUrls, thumbnailUrls }));
      });
  }

  stepDisplay(step) {
    const { imgUrls, selectedId } = this.state;
    const numItems = imgUrls.length;

    const next = selectedId + step;

    const nextSelectedId = next < 0
      ? numItems - 1
      : next % numItems;

    this.setState({ selectedId: nextSelectedId });
  }

  render() {
    const { imgUrls, thumbnailUrls, selectedId } = this.state;

    return (
      <Wrapper>
        <ImageWrapper>
          <ImageViewer imgUrl={imgUrls[selectedId]} />
          <ButtonsOverlay
            onClick={(step) => this.stepDisplay(step)}
          />
        </ImageWrapper>
        <ThumbnailWrapper
          imageUrlArray={thumbnailUrls}
          selectedId={selectedId}
          onChange={(id) => this.setState({ selectedId: id })}
        />
      </Wrapper>
    );
  }
}

export default Carousel;
