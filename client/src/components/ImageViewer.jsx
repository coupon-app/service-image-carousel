import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const ImageViewer = ({ imgUrl }) => {
  const [topImgSrc, setTopImgSrc] = useState(imgUrl);
  const [bottomImgSrc, setBottomImgSrc] = useState('');
  const [topVisible, setTopVisible] = useState(true);

  useEffect(() => {
    // Update bottom img
    setBottomImgSrc(topImgSrc);
    setTopVisible(false);

    setTimeout(() => {
      setTopImgSrc(imgUrl);
      setTopVisible(true);
    }, 30);
  }, [imgUrl]);

  return (
    <div>
      <Image src={bottomImgSrc} visible alt="Deal" />
      <Image src={topImgSrc} visible={topVisible} alt="Deal" />
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
  transition: ${(props) => (props.visible ? 'opacity ease 400ms' : null)};
  ${(props) => (props.visible ? 'opacity: 1;' : 'opacity: 0;')}
`;

export default ImageViewer;
