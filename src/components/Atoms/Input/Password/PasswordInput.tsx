import React, { useState } from "react";
import { IconButton } from "@mui/material";
import RemoveRedEyeOutlinedIcon from "@mui/icons-material/RemoveRedEyeOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import { LabelStyled, InputStyled } from "../StyledInput";

export interface PassPropsI {
  type: string;
  label: string;
}

const PasswordInput: React.FC<PassPropsI> = (props: PassPropsI) => {
  const [isVisible, setIsVisible] = useState<boolean>(false);
  const [inputType, setInputType] = useState<string>("password");

  const clickHandler = () => {
    setIsVisible(!isVisible);
    if (inputType === "password") {
      setInputType("text");
    } else {
      setInputType("password");
    }
  };

  const EndAdornment = () => {
    return (
      <IconButton
        onClick={clickHandler}
        style={{
          border: "none",
          outline: "none",
          position: "relative",
          top: "-1.55em",
          left: "89%",
          scale: "0.9",
        }}
      >
        {isVisible ? (
          <VisibilityOffOutlinedIcon />
        ) : (
          <RemoveRedEyeOutlinedIcon />
        )}
      </IconButton>
    );
  };

  return (
    <div>
      <LabelStyled>{props.label}</LabelStyled>
      <InputStyled type={inputType} />
      <EndAdornment />
    </div>
  );
};

export default PasswordInput;
