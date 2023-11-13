import React from "react";
import styled from 'styled-components';

interface Props {
  border: string;
  bgcolor: string;
  color: string;
  children?: React.ReactNode;
  height: string;
  onClick: () => void;
  radius: string
  width: string;
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

const StyledButton = styled.button<Props>`
  padding: 10px 20px;
  background-color: ${(props) => (props.bgcolor)};
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;


const Button = (props) => {
    return <StyledButton bgcolor={props.bgcolor}>¡Botón con estilo!</StyledButton>;
  };

export default Button;