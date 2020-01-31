import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Placeholder from './Placeholder';


const ImageViewer = ({ imgUrl }) => {
  const [topImgSrc, setTopImgSrc] = useState(imgUrl);
  const [bottomImgSrc, setBottomImgSrc] = useState('');
  const [topVisible, setTopVisible] = useState(true);
  const [initLoaded, setInitLoaded] = useState(false);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    // Update bottom img
    setBottomImgSrc(topImgSrc);
    setTopImgSrc(imgUrl);
    setTopVisible(false);

    setTimeout(() => {
      setTopVisible(true);
    }, 20);
  }, [imgUrl]);

  return (
    <div>
      {!initLoaded ? <Placeholder /> : null}
      <Image src={bottomImgSrc} visible={initLoaded} />
      <Image
        src={topImgSrc}
        visible={topVisible && loaded}
        onLoad={() => {
          setLoaded(true);
          setInitLoaded(true);
        }}
        alt="Product"
      />
    </div>
  );
};

ImageViewer.propTypes = {
  imgUrl: PropTypes.string,
};

ImageViewer.defaultProps = {
  imgUrl: '',
};


// Styles
const Image = styled.img`
  border-radius: 6px;
  position: absolute;
  width: 100%;
  height: 100%;
  ${(props) => (props.visible ? 'transition: opacity ease-in 200ms' : null)};
  ${(props) => (props.visible ? 'opacity: 1;' : 'opacity: 0;')}
`;

export default ImageViewer;
