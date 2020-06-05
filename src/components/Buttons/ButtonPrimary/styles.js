import styled, {css} from 'styled-components';

const getButtonStyles = props => {
    if (props.secondary) {
        return Secondary;
    } else if (props.primary) {
      return Primary;
    }  else if (props.applyBtn) {
        return ApplyBtn;
    } else if (props.applyBtnWhite) {
        return ApplyBtnWhite;
    } else if (props.orderBtn) {
      return OrderBtn;
    } else {
      return Container;
    }
};


export const Primary = css`
  width: ${(props) => props.primaryLong ? '300px' : '250px'};
  height: 60px;
  outline: none;
  border-radius: 14px;
  background-color:  #00AF66;
  text-align: center;
  color: white;
  font-size: 20px;
  font-weight: 600;
  text-transform: none;
  font-style: normal;
  &:hover {
    cursor: pointer;
    background-image: 
      linear-gradient(to bottom, #00af66, #16b96e, #24c376, #30ce7e, #3ad886);
  }
  &:focus {
    outline: none;
  }
  @media screen and (max-width: 768px) {
    width: ${(props) => props.primaryLong ? '250px' : '270'};
    height: ${(props) => props.primaryLong ? '45px' : '60px'};
    font-size: ${(props) => props.primaryLong ? '14px' : '20px'};
    border-radius: ${(props) => props.primaryLong ? '10px' : '14px'};
  }
`;
export const Container = styled.button`
  width: 220px;
  height: 55px;
  outline: none;
  border: none;
  border-radius: 14px; 
  background-color: #00AF66;
  text-align: center;
  font-size: 13px;
  font-weight: 400;
  color: white;
  text-transform: uppercase;
  font-style: italic;
  &:hover {
    cursor: pointer;
    background-image: 
      linear-gradient(to bottom, #00af66, #16b96e, #24c376, #30ce7e, #3ad886);
  }
  &:focus {
    outline: none;
  }
  ${getButtonStyles}
`;

export const Secondary = css`
  width: 223px;
  height: 55px;
  border: none;
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: 600;
  outline: none;
  background-color: #000000;
  border-radius: 14px;
  transition: 0.5s;
  font-style: normal;
    &:hover {
      cursor: pointer;
      background-color: #00CE1B;
      background-image: none;
    }
    &:focus {
      outline: none;
    }
`;

export const ApplyBtn = css`
  width: 250px;
  height: 60px;
  border: none;
  text-align: center;
  color: white;
  font-size: 13px;
  font-weight: 700;
  outline: none;
  background-color: black;
  border-radius: 10px;
  transition: 0.5s;
  font-style: normal;
    &:hover {
      cursor: pointer;
      background-image: 
        linear-gradient(to bottom, #b5b5b5, #848484, #575757, #2d2d2d, #000000);
    }
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 768px) {
      width: 230px;
      height: 50px;
      font-size: 12px;
    }
`;

export const ApplyBtnWhite = css`
  width: 250px;
  height: 60px;
  border: none;
  text-align: center;
  color: black;
  font-size: 13px;
  font-weight: 700;
  outline: none;
  background-color: white;
  border-radius: 10px;
  transition: 0.5s;
  font-style: normal;
    &:hover {
      cursor: pointer;
      background-image: 
        linear-gradient(to bottom, #b5b5b5, #c7c7c7, #d9d9d9, #ececec, #ffffff);
    }
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 769px) {
      width: 230px;
      height: 50px;
      font-size: 12px;
    }
`;

export const OrderBtn = css`
  width: 180px;
  height: 50px;
  border: none;
  text-align: center;
  color: white;
  font-size: 15px;
  font-weight: 600;
  outline: none;
  background-color: #254971;
  border-radius: 13px;
  text-transform: none;
  font-style: normal;
    &:hover {
      cursor: pointer;
      background-image: 
        linear-gradient(to bottom, #254971, #2b5380, #305e90, #3668a0, #3c73b0);
    }
    &:focus {
      outline: none;
    }
    @media screen and (max-width: 550px) {
      width: 80%;
      height: 45px;
      border-radius: 10px;
      font-size: 13px;
    }
`;