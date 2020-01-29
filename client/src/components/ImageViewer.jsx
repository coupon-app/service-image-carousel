/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import styled from 'styled-components';


const transitionDuration = 125 // in milliseconds

const Image = styled.img`
  border-radius: 6px;
  transition: opacity ${transitionDuration}ms ease-in-out;
  ${(props) => (props.opacity === 1 ? 'opacity: 1' : 'opacity: 0')}
`;


const ImageViewer = ({ imageUrl }) => {
  const [displayUrl, setDisplaySrc] = useState(imageUrl);
  const [opacity, setOpacity] = useState(1);

  useEffect(() => {
    setOpacity(0);
    setTimeout(() => {
      setDisplaySrc(imageUrl);
      setOpacity(1);
    }, transitionDuration);
  }, [imageUrl]);

  return (<Image src={displayUrl} opacity={opacity} alt="Deal" />);
};

export default ImageViewer;
