import React from "react";
import styled from 'styled-components';
import TextField from '@mui/material/TextField';


interface Props {
  children?: React.ReactNode;
/*   onClick: () => void; */
  type: string,
  variant: string, 
  label: string

}


const InputStyled: React.FC<Props> = styled(TextField)<Props>`
  border-radius: 4px!important;
  }
`;



const InputComponent: React.FC<Props> = (props: Props) => {
    return <InputStyled type={props.type} variant="filled" label={props.label} />;
  };

export default InputComponent;