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
  padding: 6px 16px;
  flex-direction: row;
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


const Header: React.FC<Props> = (props: Props) => {
    return (
      <StyledHeader {...props}>
          <Avatar avatar={props.avatar} />
          <StyledWrapper {...props}>
            <Title textnode={props.titlecontent}  />
            <Subhead textnode={props.subheadcontent} />
          </StyledWrapper>
      </StyledHeader>
    );
  };

export default Header;