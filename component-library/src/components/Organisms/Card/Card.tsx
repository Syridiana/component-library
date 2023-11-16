import React from "react";
import styled from 'styled-components'; 
import Hero from "../../Atoms/HeroImage/Hero";
import Action from "../../Molecules/Action/Action";
import SecondaryText from "../../Atoms/SecondaryText/SecondaryText";
import Header from "../../Molecules/Header/Header";

interface Props {
  onClick?: () => void;
  subheadcontent: string;
  titlecontent: string;
  avatar: string;
  hero?: string;
  secondarytext: string;
  icon: string;
}

const StyledCard: React.FC<Props> = styled.div<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 374px;
  background: #FFF;
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.10);
`;


const Card: React.FC<Props> = (props: Props) => {
    return (
      <StyledCard {...props}>
          {props.hero ? (<Hero hero={props.hero} />) : (<div></div>)}
          <Header titlecontent={props.titlecontent} subheadcontent={props.subheadcontent} avatar={props.avatar}   />
          <SecondaryText textnode={props.secondarytext}  />
          <Action favouriteicon={props.icon} />
      </StyledCard>
    );
  };

export default Card;