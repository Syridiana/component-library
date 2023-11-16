import styled from 'styled-components';
import { ReactSVG } from "react-svg";
import { useState } from 'react';

interface Props {
  width?: string;
  favouriteicon?: string,
  onClick: () => void,
  color: string
}


const IconStyled = styled(ReactSVG).attrs<Props>((props) => ({
  src: props.favouriteicon,
}))`
  width: 24px;
  cursor: pointer;

  .st0 {
    fill: ${props => props.color}
  }

  &:hover{
    .st0 {
      fill: #a35d5d
    }
  }
`;


const Icon: React.FC<Props> = (props: Props) => {
  const [newColor, setColor] = useState(props.color);

  return <IconStyled color={newColor} favouriteicon={props.favouriteicon} 
  onClick={() => {
    if(newColor === '#EB5757') {
      setColor(props.color)
    } else {
      setColor('#EB5757')
    }
  }} />;
};


export default Icon;