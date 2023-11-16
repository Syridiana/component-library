import styled from 'styled-components';


interface Props {
  primary?: boolean;
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