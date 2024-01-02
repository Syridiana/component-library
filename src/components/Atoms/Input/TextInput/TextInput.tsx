import React, { useState, FocusEvent } from "react";
import styled from "styled-components";

interface Props {
  type: string;
  label: string;
}

const InputStyled: React.FC<Props> = styled.input<Props>`
  height: 2.5em;
  border-radius: 4px;
  border: 1px solid ${(props) => props.theme.colors.darkGrey};
  width: 98%;
  padding: 0 0 0 8px;
  font-size: ${(props) => props.theme.fontSizes.regular};
  font-family: ${(props) => props.theme.secondaryFont};
  font-weight: 400;
  color: ${(props) => props.theme.colors.darkGrey};

  &:focus {
    border: 1px solid ${(props) => props.theme.colors.secondary};
    outline: ${(props) => props.theme.colors.secondary} !important;
    box-shadow: 0px 0px 0px 1px ${(props) => props.theme.colors.secondary} inset;
  }
`;

const LabelStyled: React.FC = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: ${(props) => props.theme.fontSizes.xSmall};
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 0 4px 2px;
`;

const TextInput: React.FC<Props> = ({ type, label }) => {
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  return (
    <div>
      <LabelStyled>{label}</LabelStyled>
      <InputStyled
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
  );
};

export default TextInput;
