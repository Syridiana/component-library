import React, { InputHTMLAttributes, useState } from "react";
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { InputAdornment, IconButton } from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

interface Props {
  type: string,
  variant?: string, 
  label: string,
  InputProps?: InputProp,
  visible?: boolean
}

interface InputProp extends InputHTMLAttributes<HTMLInputElement>{
  endAdornment: JSX.Element
}


const InputStyled: React.FC<Props> = styled(TextField)<Props>`
  border-radius: 4px!important;
`;



const PasswordInput: React.FC<Props> = (props: Props) => {
    const [visible, setVisible] = useState<boolean>(false);

    const EndAdornment = () => {
      return <InputAdornment position="end">
        <IconButton onClick={() => setVisible(!visible)} style={{ border:"none",  outline:"none"  }}>
          {visible ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon/> }
        </IconButton>
      </InputAdornment>
    }
    

    return <InputStyled fullWidth type={visible ? "text" : "password"} variant="filled" label={props.label}
      InputProps={{
        endAdornment: (
          <EndAdornment visible={visible} setVisible={setVisible}/>
        )
      }}
    />;
  };

export default PasswordInput;