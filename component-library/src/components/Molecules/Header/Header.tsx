import React from "react";
import styled from 'styled-components'; 
import Avatar from "../../Atoms/Avatar/Avatar";
import Title from "../../Atoms/Title/Title";
import Subhead from "../../Atoms/Subhead/Subhead";

interface Props {
  avatar: string;
  subheadcontent: string;
  titlecontent: string;
}

const StyledHeader: React.FC<Props> = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: row;
  min-height: 72px;
  align-items: center;
  gap: 16px;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

const StyledWrapper: React.FC<Props> = styled.div<Props>`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;


const Header: React.FC<Props> = ({avatar, titlecontent, subheadcontent}, {...props}) => {
    return (
      <StyledHeader {...props}>
          <Avatar avatar={avatar} />
          <StyledWrapper {...props}>
            <Title textnode={titlecontent}  />
            <Subhead textnode={subheadcontent} />
          </StyledWrapper>
      </StyledHeader>
    );
  };

export default Header;