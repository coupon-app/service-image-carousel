import React from 'react';
import styled from 'styled-components';
import { ChevronLeft } from 'styled-icons/feather/ChevronLeft';
import { ChevronRight } from 'styled-icons/feather/ChevronRight';


const Overlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  /* Prevent overlay from being selected  */
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;

  /* Keep overlay hidden until its hovered over */
  opacity: 0;

  :hover {
    opacity: 100;
  }
`;


const Button = styled.div`
  display: flex;
  border-radius: 50%;
  background-color: #333;
  color: white;
  height: 3.75rem;
  width: 3.75rem;
  justify-content: center;
  align-items: center;
  margin: 1.5em;

  :hover {
    background-color: white;
    color: #333;
  }
`;


const ButtonsOverlay = ({ onClick }) => (
  <Overlay>
    <Button onClick={() => onClick(-1)}>
      <ChevronLeft size='1.75rem' />
    </Button>
    <Button onClick={() => onClick(1)}>
      <ChevronRight size='1.75rem' />
    </Button>
  </Overlay>
);

export default ButtonsOverlay;
