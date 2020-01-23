/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';

const Image = styled.img`
  height: 57px;
  width: 57px;
  border-radius: 6px;
  cursor: pointer;
`;

const ImageThumbnail = ({ src, onClick }) => (
  <Image
    src={src}
    alt="Deal thumbnail"
    onClick={onClick}
  />
);

export default ImageThumbnail;
