import React from "react";
import styled from 'styled-components'; 
import Subhead from "../../Atoms/Subhead/Subhead";
import TextInput from "../../Atoms/Input/TextInput/TextInput";
import PasswordInput from "../../Atoms/Input/Password/PasswordInput";

export interface LoginProps extends React.PropsWithChildren {
  subheadcontent: string,
  emailtype: string,
  emaillabel: string,
  passlabel: string,
  passtype: string
}

const StyledWrapper: React.FC<LoginProps> = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 21px 16px;
  width: 100%;
  box-sizing: border-box;
  min-height: 253px;
  justify-content: center;
  gap: 24px;
`;

const LoginForm: React.FC<LoginProps> = (props: LoginProps) => {
    return (
      <StyledWrapper {...props}>
        <Subhead textnode={props.subheadcontent} />
        <TextInput type={props.emailtype} label={props.emaillabel} />
        <PasswordInput type={props.passtype} label={props.passlabel} />
      </StyledWrapper>
    );
  };

export default LoginForm;