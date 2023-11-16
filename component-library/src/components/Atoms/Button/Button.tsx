import React from "react";
import styled from 'styled-components';

interface Props {
  primary: number,
  textnode: string,
}



const StyledButton: React.FC<Props> = styled.button<Props>`
  background-color: ${(props) => (props.primary ? '#5DA552' : 'transparent' )};
  color: ${(props) => (props.primary ? 'white' : '#5DA552' )};
  border: none;
  border-radius: ${(props) => (props.primary ? '20px' : '0px' )};
  cursor: pointer;
  padding: ${(props) => (props.primary ? '11px 54px' : '11px 12px' )};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
  box-sizing: border-box;

  &:hover{
    background-color: ${(props) => (props.primary ? '#A8A29D' : 'transparent' )};
    box-shadow: ${(props) => (props.primary ? 'none' : '0px -3px 0px -1px #5DA552 inset' )};
  }
`;


const Button: React.FC<Props> = (props: Props) => {
    return <StyledButton {...props}>{props.textnode}</StyledButton>;
  };

export default Button;