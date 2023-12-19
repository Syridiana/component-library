import React from "react";
import styled from "styled-components";
import Theme from "../../../styles/Theme";

interface Props {
  textnode: string;
}

const TitleStyled: React.FC<Props> = styled.h5<Props>`
  color: ${(props) => props.theme.colors.black};
  font-family: ${(props) => props.theme.primaryFont};
  font-size: ${(props) => props.theme.fontSizes.medium};
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin: 0;
`;

const Title: React.FC<Props> = (props: Props) => {
  return (
    <Theme>
      <TitleStyled {...props}>{props.textnode}</TitleStyled>
    </Theme>
  );
};

export default Title;
