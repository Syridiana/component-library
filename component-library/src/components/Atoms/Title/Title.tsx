import React from "react";
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
/*   onClick: () => void; */

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

const TitleStyled: React.FC<Props> = styled.h5<Props>`
  color: #646565;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
`;


const Title: React.FC<Props> = (props: Props) => {
    return <TitleStyled>{props.children}</TitleStyled>;
  };

export default Title;