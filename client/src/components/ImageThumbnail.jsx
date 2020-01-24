/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';


const Image = styled.img`
  height: 57px;
  width: 57px;
  border-radius: 6px;
  cursor: pointer;
  margin-right: 10px;
  border-radius: 6px;
  box-sizing: border-box;

  /* Conditional border width */
  ${(props) => (props.isSelected ? 'border: 4px solid #0076d6;' : null)}
  /* Border */
  transition: border-width 0.25s cubic-bezier(.4,-1.5,.6,2.75),outline-width .25s cubic-bezier(.25,2.5,.625,.25);
`;


const ImageThumbnail = ({ src, isSelected, onClick }) => (
  <Image
    src={src}
    alt="Deal thumbnail"
    onClick={onClick}
    isSelected={isSelected}
  />
);

export default ImageThumbnail;
