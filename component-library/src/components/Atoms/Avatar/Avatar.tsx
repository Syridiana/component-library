import styled from 'styled-components';


export interface AvatarPropsI {
  avatar: string
}


const Avatar = styled.img.attrs<AvatarPropsI>(({avatar}) => ({
  src: avatar,
}))`
    border-radius: 100px;
    width: 40px;
    height: 40px;
  `;




export default Avatar;