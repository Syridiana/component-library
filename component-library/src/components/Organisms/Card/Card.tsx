import React from "react";
import styled from 'styled-components'; 
import Hero from "../../Atoms/HeroImage/Hero";
import Action from "../../Molecules/Action/Action";
import SecondaryText from "../../Atoms/SecondaryText/SecondaryText";
import Header from "../../Molecules/Header/Header";
import { motion } from 'framer-motion';

interface Props {
  subheadcontent: string;
  titlecontent: string;
  avatar: string;
  hero?: string;
  secondarytext: string;
  icon: string;
}

const StyledCard: React.FC<Props> = styled(motion.div)<Props>`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 374px;
  background: #FFF;
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.10);
`;

const Card: React.FC<Props> = ({hero, titlecontent, secondarytext, subheadcontent, avatar, icon}, {...props}) => {
    return (
      <StyledCard {...props} 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: .5 }} >
              {hero ? (<Hero hero={hero} />) : (<></>)}
              <Header 
                  titlecontent={titlecontent} 
                  subheadcontent={subheadcontent} 
                  avatar={avatar}   />
              <SecondaryText textnode={secondarytext}  />
              <Action favouriteicon={icon} />
      </StyledCard>
    );
  };

export default Card;