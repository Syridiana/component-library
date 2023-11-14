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

const SubheadStyled: React.FC<Props> = styled.h6<Props>`
  color: #646565;
  font-family: Open Sans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
`;


const Subhead: React.FC<Props> = (props: Props) => {
    return <SubheadStyled>{props.children}</SubheadStyled>;
  };

export default Subhead;