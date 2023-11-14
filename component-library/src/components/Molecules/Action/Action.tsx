import React from "react";
import styled from 'styled-components'; 
import Button from "../../Atoms/Button/Button";
import Icon from "../../Atoms/Favorite/Icon";

interface Props {
  favouriteIcon: string
}

/* const Button: React.FC<Props> = ({ 
    border,
    color,
    children,
    height,
    onClick, 
    radius,
    width
  }) => { 
  return (
    <button 
      onClick={onClick}
      style={{
         backgroundColor: color,
         border,
         borderRadius: radius,
         height,
         width
      }}
    >
    {children}
    </button>
  );
} */


const StyledAction: React.FC = styled.div`
  display: flex;
  padding: 16px 20px 16px 8px;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  box-sizing: border-box;
`;


const Action: React.FC<Props> = (props: Props) => {
    return (
      <StyledAction>
        <div>
          <Button primary={false} children={'ACTION 1'} />
          <Button primary={false} children={'ACTION 2'} />
        </div>
        <Icon favouriteIcon={props.favouriteIcon} />
      </StyledAction>
    );
  };

export default Action;