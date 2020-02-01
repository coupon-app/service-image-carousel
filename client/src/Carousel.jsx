import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import axios from 'axios';
import Display from './components/Display';
import Award from './components/Award';
import ThumbnailContainer from './components/ThumbnailContainer';
import Controls from './components/Controls';


class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.state = { imgUrls: [], thumbnailUrls: [], selectedId: 0 };
  }

  componentDidMount() {
    this.updateProductImgs();
  }

  componentDidUpdate(prevProps) {
    const { productId } = this.props;

    if (prevProps.productId !== productId) {
      this.updateProductImgs();
    }
  }

  updateProductImgs() {
    const { productId } = this.props;

    axios.get(`/api/products/${productId}`)
      .then((response) => response.data)
      .then((productImgs) => {
        const imgUrls = productImgs.map((img) => img.imgUrl);
        const thumbnailUrls = productImgs.map((img) => img.thumbnailUrl);
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
          <Display imgUrl={imgUrls[selectedId]} />
          <Award />
          {imgUrls.length > 1
            ? (
              <Controls
                onClick={(step) => this.stepDisplay(step)}
              />
            ) : null}
        </ImageWrapper>
        {thumbnailUrls.length > 1
          ? (
            <ThumbnailContainer
              imageUrlArray={thumbnailUrls}
              selectedId={selectedId}
              onChange={(id) => this.setState({ selectedId: id })}
            />
          ) : null}
      </Wrapper>
    );
  }
}

Carousel.propTypes = {
  productId: PropTypes.number,
};

Carousel.defaultProps = {
  productId: 1,
};


// Styles
const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
  `;

const ImageWrapper = styled.div`
    display: flex;
    position: relative;
    width: 700px;
    height: 420px;
  `;

export default Carousel;
