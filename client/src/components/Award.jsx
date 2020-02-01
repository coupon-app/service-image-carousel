import React from 'react';
import styled from 'styled-components';
import { Trophy } from 'styled-icons/icomoon/Trophy';

const Award = () => (
  <Wrapper>
    <TrophyIcon size="1em" />
    <Text>
      BEST OF COUPON
    </Text>
  </Wrapper>
);


const TrophyIcon = styled(Trophy)`
  margin-right: 8px;
`;

const Text = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  background-color: rgba(102,80,215,0.902);
  border-radius: 4px;
  padding: 7px 12px;
  position: absolute;
  bottom: 0;
  left: 0;
  margin: 10px 10px;
  color: rgba(255,255,255,1.000);
`;

export default Award;
