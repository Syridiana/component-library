import React from "react";
import styled from 'styled-components'; 
import Hero from "../../Atoms/HeroImage/Hero";
import Action from "../../Molecules/Action/Action";
import SecondaryText from "../../Atoms/SecondaryText/SecondaryText";
import Header from "../../Molecules/Header/Header";

interface Props {
  children?: React.ReactNode;
  onClick: () => void;
  subheadContent: string;
  titleContent: string;
  avatar: string;
  hero: string;
  secondaryText: string;
  icon: string;
}

const StyledCard: React.FC = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 374px;
`;


const Card: React.FC<Props> = (props: Props) => {
    return (
      <StyledCard>
          <Hero hero={props.hero} />
          <Header titleContent={props.titleContent} subheadContent={props.subheadContent} avatar={props.avatar}   />
          <SecondaryText children={props.secondaryText}  />
          <Action favouriteIcon={props.icon} />
      </StyledCard>
    );
  };

export default Card;