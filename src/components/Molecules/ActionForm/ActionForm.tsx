import React from "react";
import styled from 'styled-components'; 
import Button from "../../Atoms/Button/Button";

 interface Props extends React.PropsWithChildren {
  primarybtn: number,
  textnodebtn1: string,
  primary: number,
  textnodebtn2: string,
}

const StyledAction: React.FC<Props> = styled.div`
  min-height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 16px 20px;
  box-sizing: border-box;
  align-items: center;
  gap: 24px;
`;

const ActionForm: React.FC<Props> = (props: Props) => {
    return (
      <StyledAction {...props}>
        <Button textnode={props.textnodebtn2} primary={props.primary} />
        <Button textnode={props.textnodebtn1} primary={props.primarybtn} />
      </StyledAction>
    );
  };

export default ActionForm;