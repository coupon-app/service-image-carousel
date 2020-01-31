import styled from 'styled-components';

const Placeholder = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 6px;
  position: absolute;

  animation: placeHolderShimmer 1s ease-in infinite;
  background: linear-gradient(to right, #eeeeee 10%, #dddddd 40%, #eeeeee 50%);
  background-size: 200%;


  @keyframes placeHolderShimmer{
    0%{
        background-position: 100% 0
    }
    50%{
        background-position: 100% 0
    }
    100%{
        background-position: -100% 0
    }
  }
`;

export default Placeholder;
