import React from "react";
import styled from 'styled-components';


interface Props {
  children?: React.ReactNode;
/*   onClick: () => void; */
  primary: boolean;
  avatar: string
}


const Avatar = styled.img.attrs<Props>((props) => ({
  src: props.avatar,
}))`
    border-radius: 100px;
    width: 40px;
    height: 40px;
  `;




export default Avatar;