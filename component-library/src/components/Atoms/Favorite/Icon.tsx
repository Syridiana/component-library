import React from "react";
import styled from 'styled-components';

interface Props {
/*   onClick: () => void; */
  width: string;
  favouriteIcon: string
}


const Icon = styled.img.attrs<Props>((props) => ({
  src: props.favouriteIcon,
}))`
  width: 24px;
`;



export default Icon;