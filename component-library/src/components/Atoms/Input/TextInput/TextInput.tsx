import React from "react";
import styled from 'styled-components';
import TextField from '@mui/material/TextField';

interface Props {
  type: string,
  variant?: string, 
  label: string,
  inputProps?: {
    style: {
      color: string
    }
  }
}



const InputStyled: React.FC<Props> = styled(TextField)<Props>`
  border-radius: 4px!important;
`;


const TextInput: React.FC<Props> = (props: Props) => {
    return <InputStyled type={props.type} variant="filled" label={props.label} 
    inputProps={{ style: { color: "#0000008a", } }} fullWidth />;
  };

export default TextInput;