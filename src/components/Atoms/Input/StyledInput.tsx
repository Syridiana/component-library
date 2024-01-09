import { Theme } from "@mui/material";
import styled from "styled-components";

export const InputStyled: React.FC<Theme> = styled.input`
  height: 2.2em;
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

const LabelCSS: React.FC<Theme> = styled.div`
  color: ${(props) => props.theme.colors.secondary};
  font-family: ${(props) => props.theme.secondaryFont};
  font-size: ${(props) => props.theme.fontSizes.xSmall};
  text-transform: uppercase;
  font-weight: 700;
  margin: 0 0 4px 2px;
`;

export const LabelStyled: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  return <LabelCSS>{children}</LabelCSS>;
};
