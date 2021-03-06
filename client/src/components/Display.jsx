import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Placeholder from './Placeholder';


const Display = ({ imgUrl }) => {
  const [topImgSrc, setTopImgSrc] = useState(imgUrl);
  const [bottomImgSrc, setBottomImgSrc] = useState(undefined);
  const [topVisible, setTopVisible] = useState(true);
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
      {bottomImgSrc ? <Image src={bottomImgSrc} alt="Product animation" /> : <Placeholder />}
      <DynamicImage
        src={topImgSrc}
        visible={topVisible && loaded}
        onLoad={() => {
          setLoaded(true);
        }}
        alt="Product"
      />
    </div>
  );
};

Display.propTypes = {
  imgUrl: PropTypes.string,
};

Display.defaultProps = {
  imgUrl: '',
};


const Image = styled.img`
  border-radius: 6px;
  position: absolute;
  width: 100%;
  height: 100%;
`;

const DynamicImage = styled(Image)`
  ${(props) => (props.visible ? 'transition: opacity ease-in 200ms' : null)};
  ${(props) => (props.visible ? 'opacity: 1;' : 'opacity: 0;')}
`;

export default Display;
