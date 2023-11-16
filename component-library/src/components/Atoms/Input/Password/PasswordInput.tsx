import React, { InputHTMLAttributes, useState } from "react";
import styled from 'styled-components';
import TextField from '@mui/material/TextField';
import { InputAdornment, IconButton } from "@mui/material";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';

export interface PassPropsI  {
  type: string,
  variant?: string, 
  label: string,
  InputProps?: InputProp,
  fullWidth?: boolean
}

interface InputProp extends InputHTMLAttributes<HTMLInputElement>{
  endAdornment: JSX.Element
}

const InputStyled: React.FC<PassPropsI> = styled(TextField)<PassPropsI>`
  border-radius: 4px!important;
`;

const PasswordInput: React.FC<PassPropsI> = (props: PassPropsI) => {
    const [isVisible, setIsVisible] = useState<boolean>(false);

    const EndAdornment = () => {
      return <InputAdornment position="end">
        <IconButton 
          onClick={() => setIsVisible(!isVisible)} 
          style={{ border:"none",  outline:"none"  }}>
          {isVisible ? <VisibilityOffOutlinedIcon /> : <RemoveRedEyeOutlinedIcon/> }
        </IconButton>
      </InputAdornment>
    }

    return <InputStyled 
                fullWidth 
                type={isVisible ? "text" : "password"} 
                variant="filled" label={props.label}
                InputProps={{
                  endAdornment: (
                    <EndAdornment visible={isVisible} setVisible={setIsVisible}/>
                  )
                }}
              />;
  };

export default PasswordInput;