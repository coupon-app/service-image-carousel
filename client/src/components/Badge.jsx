import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Trophy } from 'styled-icons/icomoon/Trophy';
import { TrendingUp } from 'styled-icons/boxicons-regular/TrendingUp';
import { TimeFive } from 'styled-icons/boxicons-solid/TimeFive';

const Badge = ({ type }) => {
  const IconOptions = {
    best: { Icon: Trophy, text: 'best of coupon app' },
    trending: { Icon: TrendingUp, text: 'trending' },
    expiring: { Icon: TimeFive, text: 'almost gone' },
  };

  const { Icon, text } = IconOptions[type];

  return (
    <Wrapper>
      <Icon size="1em" />
      <Text>
        {text}
      </Text>
    </Wrapper>
  );
};

Badge.propTypes = {
  type: PropTypes.string.isRequired,
};


const Text = styled.span`
  font-family: 'Open Sans', sans-serif;
  font-size: 14px;
  font-weight: 600;
  text-transform: uppercase;
  margin-left: 10px;
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

export default Badge;
