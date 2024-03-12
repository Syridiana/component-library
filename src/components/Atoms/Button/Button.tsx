import React, { RefObject, useRef } from "react";
import { styled, useTheme } from "styled-components";
import Theme from "../../../styles/Theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export interface ButtonPropsI extends React.PropsWithChildren {
  primary: number;
  textnode?: string;
  children?: React.ReactNode;
  className?: string;
  ref?: RefObject<HTMLDivElement>
  style?: {
    zIndex: string;
    }
}

const StyledButton: React.FC<ButtonPropsI> = styled.button<ButtonPropsI>`
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : "transparent"};
  color: ${(props) => (props.primary ? "white" : props.theme.colors.primary)};
  border: ${(props) =>
    `1px solid ${props.theme.colors.primary}`};
  border-radius: 28px;
  cursor: pointer;
  padding: 8px 17px;
  text-align: center;
  font-size: ${(props) => props.theme.fontSizes.small};
  font-style: normal;
  font-weight: 600;
  box-sizing: border-box;

  &:focus {
    outline: 0px auto -webkit-focus-ring-color !important;
  }
`;


const StyledButtonHover: React.FC<ButtonPropsI> = styled.div<ButtonPropsI>`
  background-color: ${(props) =>
    props.primary ? props.theme.colors.secondary : props.theme.colors.primary};
  width: 150px;
  height: 150px;
  position: absolute;
  top: 0;
  left: 0;
  border-radius: 200px;
  transform: scale(0);
  transform-origin: center center
`;

const Button: React.FC<ButtonPropsI> = (props: ButtonPropsI) => {
  const container = useRef<HTMLDivElement>(null);
  const unYani = useRef<HTMLDivElement>(null);
  const theme = useTheme();

  const { contextSafe } = useGSAP({ scope: container });

  //useGSAP(() => {});

  const handleMouseEnter = contextSafe((e: MouseEvent) => {
    if(container.current && unYani.current){
      const yaniRef = container.current.getBoundingClientRect();
      const unYaniRef = unYani.current.getBoundingClientRect();
      gsap.to(".yani", {
        duration: 0.5,
        x: e.pageX - yaniRef.left - unYaniRef.width / 2,
        y: e.pageY - yaniRef.top - unYaniRef.width / 2,
        scale: 1,
      });
  
      if(!props.primary){
        gsap.to("button", {
          duration: 0.5,
          scale: 1,
          color: "white",
        });
      } else {
        gsap.to("button", {
          duration: 0.5,
          scale: 1,
          backgroundColor: 'transparent',
          border: 'none',
          color: "white",
        });
      }
    }
   

  }) as React.MouseEventHandler;

  const handleMouseLeave = contextSafe((e: MouseEvent) => {
    e.stopPropagation();
    gsap.to(".yani", {
      duration: 0.5,
      scale: 0,
    });

    if(!props.primary){
      gsap.to("button", {
        duration: 0.5,
        color: theme.colors.primary,
      });
    } else {
      gsap.to("button", {
        duration: 0.5,
        backgroundColor: theme.colors.primary
      });
    }

  }) as React.MouseEventHandler;

  return (
    <Theme>
      <div
        ref={container}
        style={{
          overflow: "hidden",
          position: "relative",
          borderRadius: "28px",
        }}
      >
        <StyledButtonHover
          primary={props.primary}
          className="yani"
          ref={unYani}
        ></StyledButtonHover>
        <StyledButton primary={props.primary} style={{ zIndex: "3" }}>
          {props.textnode}
        </StyledButton>

        <div
          onMouseMove={handleMouseEnter}
          onMouseOut={handleMouseLeave}
          style={{
            width: "100%",
            height: "100%",
            position: "absolute",
            top: "0",
            left: "0",
            cursor: "pointer",
          }}
        ></div>
      </div>
    </Theme>
  );
};

export default Button;
