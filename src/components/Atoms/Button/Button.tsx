import React, { useRef } from "react";
import { styled, useTheme } from "styled-components";
import Theme from "../../../styles/Theme";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export interface ButtonPropsI extends React.PropsWithChildren {
  primary: number;
  textnode?: string;
  children?: React.ReactNode;
}

const StyledButton: React.FC<ButtonPropsI> = styled.button<ButtonPropsI>`
  background-color: ${(props) =>
    props.primary ? props.theme.colors.primary : "transparent"};
  color: ${(props) => (props.primary ? "white" : props.theme.colors.primary)};
  border: ${(props) =>
    props.primary ? "none" : `1px solid ${props.theme.colors.primary}`};
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

const Button: React.FC<ButtonPropsI> = (props: ButtonPropsI) => {
  const container = useRef();
  const unYani = useRef();
  const theme = useTheme();

  const { contextSafe } = useGSAP({ scope: container });

  //useGSAP(() => {});

  const handleMouseEnter = contextSafe((e) => {
    const yaniRef = container.current.getBoundingClientRect();
    const unYaniRef = unYani.current.getBoundingClientRect();
    gsap.to(".yani", {
      duration: 0.5,
      x: e.pageX - yaniRef.left - unYaniRef.width / 2,
      y: e.pageY - yaniRef.top - unYaniRef.width / 2,
      scale: 1,
    });

    gsap.to("button", {
      duration: 0.5,
      scale: 1,
      color: "white",
    });
  });

  const handleMouseLeave = contextSafe((e) => {
    e.stopPropagation();
    gsap.to(".yani", {
      duration: 0.5,
      scale: 0,
    });

    gsap.to("button", {
      duration: 0.5,
      color: theme.colors.primary,
    });
  });

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
        <div
          style={{
            backgroundColor: "red",
            width: "150px",
            height: "150px",
            position: "absolute",
            top: "0",
            left: "0",
            borderRadius: "200px",
            transform: "scale(0)",
            transformOrigin: "center center",
          }}
          className="yani"
          ref={unYani}
        ></div>
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
