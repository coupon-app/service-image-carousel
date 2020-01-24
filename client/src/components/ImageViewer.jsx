/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
  border-radius: 6px;
`;


const ImageViewer = ({ imageUrl }) => (
  <Image src={imageUrl} alt="Deal" />
);

export default ImageViewer;
