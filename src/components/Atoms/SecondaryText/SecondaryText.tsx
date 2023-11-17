import React from "react";
import styled from 'styled-components';

interface Props {
  textnode: string;
}

const SecondaryTextStyled: React.FC<Props> = styled.p<Props>`
  color: #646565;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 1.28;
  padding: 11px 24px;
  box-sizing: border-box;
  margin: 0;
`;

const SecondaryText: React.FC<Props> = (props: Props) => {
    return <SecondaryTextStyled {...props}>{props.textnode}</SecondaryTextStyled>;
  };

export default SecondaryText;