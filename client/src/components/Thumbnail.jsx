import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Placeholder from './Placeholder';


const Thumbnail = ({ src, isSelected, onClick }) => {
  const [loaded, setLoaded] = useState(false);
  const visible = isSelected && loaded;

  return (
    <Wrapper onClick={onClick}>
      {!loaded ? <Placeholder /> : null}
      <Image
        src={src}
        visible={loaded}
        onLoad={() => setLoaded(true)}
        alt="Deal thumbnail"
      />
      <InnerBorder visible={visible} />
      <OuterBorder visible={visible} />
    </Wrapper>
  );
};

Thumbnail.propTypes = {
  src: PropTypes.string,
  isSelected: PropTypes.bool,
  onClick: PropTypes.func,
};

Thumbnail.defaultProps = {
  src: '',
  isSelected: false,
  onClick: () => { },
};


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
  opacity: ${(props) => (props.visible ? '1' : '0')};
  transition: opacity ease-in 200ms;
`;

const OuterBorder = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  transition: border-width 250ms cubic-bezier(.4,-1.5,.6,2.75);
  border: solid #0076d6 ${(props) => (props.visible ? '2px' : '0px')};
`;

const InnerBorder = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  box-sizing: border-box;
  border-radius: 6px;
  transition: border-width 250ms;
  border: solid white ${(props) => (props.visible ? '4px' : '0px')};
`;

export default Thumbnail;
