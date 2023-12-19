import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

export interface ButtonPropsI extends React.PropsWithChildren {
  primary: number;
  textnode?: string;
  children?: React.ReactNode;
}

const StyledButton: React.FC<ButtonPropsI> = styled(
  motion.button
)<ButtonPropsI>`
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : "transparent"};
  color: ${(props) => (props.primary ? "white" : props.theme.colors.primary)};
  border: ${(props) =>
    props.primary ? "none" : `1px solid ${props.theme.colors.primary}`};
  border-radius: 28px;
  cursor: pointer;
  padding: 8px 17px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-style: normal;
  font-weight: 600;
  box-sizing: border-box;

  &:focus {
    outline: 0px auto -webkit-focus-ring-color !important;
  }

  &:hover {
    background-color: ${(props) => (props.primary ? "#A8A29D" : "#A8A29D")};
  }
`;

const Button: React.FC<ButtonPropsI> = (props: ButtonPropsI) => {
  return (
    <StyledButton
      primary={props.primary}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
    >
      {props.textnode}
    </StyledButton>
  );
};

export default Button;
