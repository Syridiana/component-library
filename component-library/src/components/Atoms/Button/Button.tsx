import React from "react";
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
/*   onClick: () => void; */
  primary: boolean;

}



const StyledButton: React.FC<Props> = styled.button<Props>`
  background-color: ${(props) => (props.primary ? '#5DA552' : 'transparent' )};
  color: ${(props) => (props.primary ? 'white' : '#5DA552' )};
  border: ${(props) => (props.primary ? 'none' : 'none' )};
  border-radius: 20px;
  cursor: pointer;
  padding: ${(props) => (props.primary ? '11px 54px' : '7px 12px' )};
  text-align: center;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: 18px;
`;


const Button: React.FC<Props> = (props: Props) => {
    return <StyledButton primary={props.primary}>{props.children}</StyledButton>;
  };

export default Button;