import styled from "styled-components";
import { ReactSVG } from "react-svg";
import { useState } from "react";
import { motion } from "framer-motion";

interface Props {
  favouriteicon?: string;
  color?: string;
}

const IconStyled = styled(ReactSVG).attrs<Props>((props) => ({
  src: props.favouriteicon,
}))`
  width: 24px;
  height: 24px;
  cursor: pointer;

  .st0 {
    fill: ${(props) => props.color};
  }
`;

const Icon: React.FC<Props> = ({ color, favouriteicon }, { ...props }) => {
  const [newColor, setColor] = useState(color);
  const [selected, setSelected] = useState(false);

  return (
    <motion.div
      whileHover={{ scale: 1.15, rotate: 15 }}
      transition={{ type: "spring", stiffness: 400, damping: 10 }}
      whileTap={{ scale: 0.85 }}
      style={{ width: "24px" }}
    >
      <IconStyled
        {...props}
        color={newColor}
        favouriteicon={favouriteicon}
        onClick={() => {
          setSelected(!selected);
          if (selected) {
            setColor(color);
          } else {
            setColor("#EB5757");
          }
        }}
      />
    </motion.div>
  );
};

export default Icon;
