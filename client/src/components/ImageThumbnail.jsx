/* eslint-disable react/prop-types */
import React from 'react';
import styled from 'styled-components';


const ImageThumbnail = ({ src, isSelected, onClick }) => (
  <Wrapper onClick={onClick}>
    <Image src={src} alt="Deal thumbnail" />
    <InnerBorder visible={isSelected} />
    <OuterBorder visible={isSelected} />
  </Wrapper>
);

// Styles
const Wrapper = styled.div`
  display: flex;
  position: relative;
  height: 57px;
  width: 57px;
  cursor: pointer;
  margin-right: 10px;
`;

const Image = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
  border-radius: 6px;
`;

const OuterBorder = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  transition: border-width 0.25s cubic-bezier(.4,-1.5,.6,2.75);
  border: solid #0076d6 ${(props) => (props.visible ? '2px' : '0')};
`;

const InnerBorder = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  transition: border-width 0.25s;
  border: solid white ${(props) => (props.visible ? '4px' : '0')};
`;

export default ImageThumbnail;
