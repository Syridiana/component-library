import React, { useState, FocusEvent } from "react";
import Theme from "../../../../styles/Theme";
import { LabelStyled, InputStyled } from "../StyledInput";

interface Props {
  type: string;
  label: string;
}

const TextInput: React.FC<Props> = ({ type, label }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <Theme>
      <div>
        <LabelStyled>{label}</LabelStyled>
        <InputStyled
          style={{ width: "98%" }}
          type={type}
          variant="filled"
          label={label}
          error={hasError}
          helperText={errorMessage}
          fullWidth
          onBlur={(e: FocusEvent<HTMLInputElement>) => {
            if (e.target.value.length <= 0) {
              setHasError(true);
              setErrorMessage("Value required");
            } else {
              setHasError(false);
              setErrorMessage("");
            }
          }}
        />
      </div>
    </Theme>
  );
};

export default TextInput;
