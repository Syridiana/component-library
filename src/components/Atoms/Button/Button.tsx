import React from "react";
import styled from 'styled-components';
import { motion } from 'framer-motion';


export interface ButtonPropsI extends React.PropsWithChildren {
  primary: number,
  textnode?: string,
  children?: React.ReactNode;
}



const StyledButton: React.FC<ButtonPropsI> = styled(motion.button)<ButtonPropsI>`
  background-color: ${(props) => (props.primary ? '#5DA552' : 'transparent' )};
  color: ${(props) => (props.primary ? 'white' : '#5DA552' )};
  border: none;
  border-radius: ${(props) => (props.primary ? '20px' : '0px' )};
  cursor: pointer;
  padding: ${(props) => (props.primary ? '11px 47px' : '7px 12px' )};
  text-align: center;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  box-sizing: border-box;
  
  
  &:focus {
    outline: 0px auto -webkit-focus-ring-color!important;
  }

  &:hover{
    background-color: ${(props) => (props.primary ? '#A8A29D' : 'transparent' )};
  }


  &:after {
      content: '';
      display: ${(props) => (props.primary ? 'none' : 'block' )};
      width: 0;
      height: 2px;
      background: #5DA552;
      transition: width ease-in-out .2s;
      position: relative;
      top: 6px;
      left: -1px;
  }

  &:hover:after {
      width: 100%;
  }
`;

const Button: React.FC<ButtonPropsI> = (props: ButtonPropsI) => {
    return <StyledButton  
      primary={props.primary}
      whileTap={{ scale: 0.9 }} 
      transition={{ type: "spring", stiffness: 400, damping: 10 }}>
        {props.textnode}
    </StyledButton>;
  };

export default Button;