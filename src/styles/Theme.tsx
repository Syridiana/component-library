import React, { ReactElement } from "react";
import { ThemeProvider } from "styled-components";

const theme = {
  colors: {
    primary: "#EB5E28",
    persianGreen: "#06B49A",
    lightGrey: "#CCC5B9",
    darkGrey: "#5B5B5B",
    black: "#252422",
    secondary: "#7D70BA",
  },
  secondaryFont: "'Barlow', sans-serif",
  primaryFont: "'Albert Sans', sans serif",
  fontSizes: {
    xSmall: "0.75em",
    small: "0.875em",
    regular: "1em",
    medium: "1.25em",
    large: "3em",
  },
  outerBorderRadius: "30px",
};

const Theme = ({ children }: { children: ReactElement | ReactElement[] }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
