import React from "react";
import styled from 'styled-components'; 
import Button from "../../Atoms/Button/Button";
import Icon from "../../Atoms/Favorite/Icon";
import Theme from "../../../styles/Theme";

interface Props {
  favouriteicon: string,
  btnOne: string,
  btnTwo: string
}

const StyledAction: React.FC<Props> = styled.div<Props>`
  display: flex;
  padding: 12px 28px 22px 26px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
`;

const StyledContainer: React.FC = styled.div`
  display: flex;
  gap: 10px;
`;

const Action: React.FC<Props> = (props: Props) => {
    return (
      <Theme>
        <StyledAction {...props}>
          <StyledContainer>
            <Button primary={0} textnode={props.btnOne} />
            <Button primary={0} textnode={props.btnTwo} />
          </StyledContainer>
          <Icon favouriteicon={props.favouriteicon} />
        </StyledAction>
      </Theme>
    );
  };

export default Action;