import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';


const transitionDuration = 125; // in milliseconds


const ImageViewer = ({ imgUrl }) => {
  const [displayUrl, setDisplaySrc] = useState(imgUrl);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setOpacity(0);
    setTimeout(() => {
      setDisplaySrc(imgUrl);
      setOpacity(1);
    }, transitionDuration);
  }, [imgUrl]);

  return (<Image src={displayUrl} opacity={opacity} alt="Deal" />);
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
  transition: opacity ${transitionDuration}ms ease-in-out;
  ${(props) => (props.opacity === 1 ? 'opacity: 1' : 'opacity: 0')}
`;

export default ImageViewer;
