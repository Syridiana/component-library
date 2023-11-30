import React, { useState, FocusEvent } from "react";
import styled from 'styled-components';
import TextField, { BaseTextFieldProps } from '@mui/material/TextField';

interface Props extends BaseTextFieldProps {
  type: string,
  label: string,
}

const InputStyled: React.FC<Props> = styled(TextField)<Props>`
  border-radius: 4px!important;
`;


const TextInput: React.FC<Props> = ({type, label}) => {
    const [hasError, setHasError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    return <InputStyled 
              type={type} 
              variant="filled" 
              label={label} 
              inputProps={{ style: { color: "#0000008a", } }} 
              error={hasError} 
              helperText={errorMessage} 
              fullWidth 
              onBlur={(e: FocusEvent<HTMLInputElement>) => {
                if(e.target.value.length <= 0) { 
                  setHasError(true); setErrorMessage('Value required') 
                } else { 
                  setHasError(false); setErrorMessage('') 
                }
            }}/>;
  };

export default TextInput;