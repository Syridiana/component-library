import React from "react";
import styled from 'styled-components'; 
import Avatar from "../../Atoms/Avatar/Avatar";
import Title from "../../Atoms/Title/Title";
import Subhead from "../../Atoms/Subhead/Subhead";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  avatar: string;
  subheadContent: string;
  titleContent: string;
}

const StyledHeader: React.FC = styled.div`
  display: flex;
  padding: 16px;
  flex-direction: row;
  height: 72px;
  align-items: center;
  gap: 16px;
  justify-content: flex-start;
  width: 100%;
  box-sizing: border-box;
`;

const StyledWrapper: React.FC = styled.div`
  display: flex;
  flex-direction: column;
  gap: 5px;
`;


const Header: React.FC = (props: Props) => {
    return (
      <StyledHeader>
          <Avatar avatar={props.avatar} />
          <StyledWrapper>
            <Title children={props.titleContent}  />
            <Subhead children={props.subheadContent} />
          </StyledWrapper>
      </StyledHeader>
    );
  };

export default Header;