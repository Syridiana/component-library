import React from "react";
import styled from 'styled-components';

interface Props {
/*   onClick: () => void; */
  width: string;
  favouriteIcon: string
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


const Icon = styled.img.attrs<Props>((props) => ({
  src: props.favouriteIcon,
}))`
width: 24px;
`;



export default Icon;