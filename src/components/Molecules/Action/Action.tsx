import React from "react";
import styled from 'styled-components'; 
import Button from "../../Atoms/Button/Button";
import Icon from "../../Atoms/Favorite/Icon";

interface Props {
  favouriteicon: string
}

const StyledAction: React.FC<Props> = styled.div<Props>`
  display: flex;
  padding: 12px 20px 16px 8px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
  align-items: center;
`;

const Action: React.FC<Props> = (props: Props) => {
    return (
      <StyledAction {...props}>
        <div>
          <Button primary={0} textnode={'ACTION 1'} />
          <Button primary={0} textnode={'ACTION 2'} />
        </div>
        <Icon favouriteicon={props.favouriteicon} />
      </StyledAction>
    );
  };

export default Action;