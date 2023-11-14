import React from "react";
import styled from 'styled-components';
import Input from '@mui/material/Input';

interface Props {
  children?: React.ReactNode;
/*   onClick: () => void; */
inputType: string

}

/* const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    {children}
    </button>
  );
} */

const InputStyled: React.FC<Props> = styled(Input)<Props>`
  border-radius: 4px;
  background: #F0F0F0;
  font-family: 'Open Sans', sans-serif!important;
  color: rgba(0, 0, 0, 0.54)!important;
  font-size: 1em!important;
  font-style: normal!important;
  font-weight: 400!important;
  line-height: 1!important;
  overflow: hidden!important;
  padding: 1em 1.25em;

  &:before{
    border-bottom: 2px solid rgba(0, 0, 0, 0.54)!important;
  }

  &:after {
    border-bottom: 2px solid #2979FF!important;
  }
`;


const InputComponent: React.FC<Props> = (props: Props) => {
    return <InputStyled inputType="textPassword"/>;
  };

export default InputComponent;