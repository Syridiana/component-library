import React from "react";
import styled from "styled-components";
import Theme from "../../../styles/Theme";

interface Props {
  textnode: string;
}

const SubheadStyled: React.FC<Props> = styled.h6<Props>`
  color: ${(props) => props.theme.colors.darkGrey};
  font-size: ${(props) => props.theme.fontSizes.small};
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  margin: 0;
`;

const Subhead: React.FC<Props> = (props: Props) => {
  return (
    <Theme>
      <SubheadStyled {...props}>{props.textnode}</SubheadStyled>
    </Theme>
  );
};

export default Subhead;
