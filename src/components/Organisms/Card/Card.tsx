import React from "react";
import styled from "styled-components";
import Hero from "../../Atoms/HeroImage/Hero";
import Action from "../../Molecules/Action/Action";
import SecondaryText from "../../Atoms/SecondaryText/SecondaryText";
import Header from "../../Molecules/Header/Header";
import { motion } from "framer-motion";
import CreateGlobalStyle from "../../../styles/createGlobalStyle";
import Theme from "../../../styles/Theme";

interface Props extends React.PropsWithChildren {
  subheadcontent: string;
  titlecontent: string;
  avatar: string;
  hero?: string;
  secondarytext: string;
  btnOne: string;
  btnTwo: string;
  icon: string;
}

const StyledCard: React.FC<Props> = styled(motion.div)<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 374px;
  background: #fff;
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.1);
  gap: 10px;
  padding-top: ${(props) => (props.hero ? "0px" : "11px")};
  border-radius: ${(props) => props.theme.outerBorderRadius};
  will-change: transform;
`;

const Card: React.FC<Props> = (props: Props) => {
  return (
    <Theme>
      <CreateGlobalStyle />
      <StyledCard
        {...props}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        {props.hero ? <Hero hero={props.hero} /> : null}
        <Header
          titlecontent={props.titlecontent}
          subheadcontent={props.subheadcontent}
          avatar={props.avatar}
        />
        <SecondaryText textnode={props.secondarytext} />
        <Action
          favouriteicon={props.icon}
          btnOne={props.btnOne}
          btnTwo={props.btnTwo}
        />
      </StyledCard>
    </Theme>
  );
};

export default Card;
