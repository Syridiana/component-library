import React from "react";
import styled from 'styled-components';


interface Props {
  children?: React.ReactNode;
/*   onClick: () => void; */
  primary: boolean;
  hero: string
}


const HeroImage = styled.img.attrs<Props>((props) => ({
  src: props.hero,
}))`
  height: 100%
`;

const HeroWrapper = styled.div<Props>`
  overflow: hidden;
  width: 100%;
  height: 232px;
  display: flex;
  align-items: center;
  justify-content: center;
`;


  const Hero: React.FC<Props> = (props: Props) => {
    return (
      <HeroWrapper>
        <HeroImage hero={props.hero} />
      </HeroWrapper>
    )
  };


export default Hero;