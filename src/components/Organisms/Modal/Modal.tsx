import React from "react";
import styled from "styled-components";
import Title from "../../Atoms/Title/Title";
import Modal from "@mui/material/Modal";
import { ButtonPropsI } from "../../Atoms/Button/Button";
import { motion } from "framer-motion";
import close from "../../../assets/close.svg";
import Slide from "@mui/material/Slide";
import LoginForm from "../../Molecules/LoginForm/LoginForm";
import ActionForm from "../../Molecules/ActionForm/ActionForm";
import CreateGlobalStyle from "../../../styles/createGlobalStyle";
import Theme from "../../../styles/Theme";

interface Props extends React.PropsWithChildren {
  onClick: () => void;
  onClose: () => void;
  titlecontent: string;
  primarybtn: number;
  textnodebtn1: string;
  primary: number;
  textnodebtn2: string;
  children: React.ReactNode;
  open: boolean;
  buttonProps: ButtonPropsI;
  subheadcontent: string;
  emaillabel: string;
  passlabel: string;
}

const StyledHeader: React.FC<Props> = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const StyledBox: React.FC<Props> = styled.div`
  position: absolute;
  width: 375px;
  background-color: #fff;
  border: none;
  box-shadow: 0px 0px 25px 10px rgba(0, 0, 0, 0.1);
  border-radius: ${(props) => props.theme.outerBorderRadius};
  padding: 10px 10px 0px 10px;
`;

const ModalElement: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <Theme>
      <CreateGlobalStyle />
      <button onClick={handleOpen}>Open modal</button>
      <Modal
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}
      >
        <Slide in={open} direction="up" mountOnEnter unmountOnExit>
          <StyledBox {...props}>
            <StyledHeader {...props}>
              <Title textnode={props.titlecontent} />
              <motion.div
                whileHover={{ scale: 1.1, rotate: 90 }}
                whileTap={{ scale: 0.9 }}
                style={{ originX: 0.5, originY: 0.5, height: 24 }}
              >
                <img
                  src={close}
                  onClick={handleClose}
                  style={{ cursor: "pointer" }}
                />
              </motion.div>
            </StyledHeader>
            <LoginForm {...props} />
            <ActionForm {...props} />
          </StyledBox>
        </Slide>
      </Modal>
    </Theme>
  );
};

export default ModalElement;
