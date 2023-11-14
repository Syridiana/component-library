import React from "react";
import styled from 'styled-components'; 
import Button from "../../Atoms/Button/Button";
import Icon from "../../Atoms/Favorite/Icon";

/* interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  primary: boolean;
} */

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
  padding: 20px 16px;
  flex-direction: row;
  justify-content: space-between;
`;


const Action: React.FC = (/* props: Props */) => {
    return (
      <StyledAction>
        <div>
          <Button primary={false} children={'ACTION 1'} />
          <Button primary={false} children={'ACTION 1'} />
        </div>
        <Icon />
      </StyledAction>
    );
  };

export default Action;