import React from "react";
import styled from 'styled-components';

interface Props {
  children?: React.ReactNode;
/*   onClick: () => void; */

}


const TitleStyled: React.FC<Props> = styled.h5<Props>`
  color: #646565;
  font-family: Open Sans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 100%;
  margin: 0;
`;


const Title: React.FC<Props> = (props: Props) => {
    return <TitleStyled>{props.children}</TitleStyled>;
  };

export default Title;