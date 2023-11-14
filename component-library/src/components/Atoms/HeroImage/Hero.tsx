import React from "react";
import styled from 'styled-components';


interface Props {
  children?: React.ReactNode;
/*   onClick: () => void; */
  hero: string
}


const HeroImage = styled.img.attrs<Props>((props) => ({
  src: props.hero,
}))`
  min-height: 232px;
  width: 100%;
`;

const HeroWrapper = styled.div<Props>`
  overflow: hidden;
  width: 100%;
  height: 232px;
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 232px;
`;


  const Hero: React.FC<Props> = (props: Props) => {
    return (
      <HeroWrapper>
        <HeroImage hero={props.hero} />
      </HeroWrapper>
    )
  };


export default Hero;