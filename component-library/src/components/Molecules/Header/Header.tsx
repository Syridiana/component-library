import React from "react";
import styled from 'styled-components'; 
import Avatar from "../../Atoms/Avatar/Avatar";

/* interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  primary: boolean;
} */




const StyledHeader: React.FC = styled.div`
  display: flex;
  padding: 20px 16px;
  flex-direction: row;
  justify-content: space-between;
`;


const Header: React.FC = (/* props: Props */) => {
    return (
      <StyledHeader>
          <Avatar  />
          <div>

          </div>
      </StyledHeader>
    );
  };

export default Header;