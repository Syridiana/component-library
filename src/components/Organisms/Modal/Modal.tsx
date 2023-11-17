import React from "react";
import styled from 'styled-components'; 
import Title from "../../Atoms/Title/Title";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ButtonPropsI } from "../../Atoms/Button/Button";
import { motion } from 'framer-motion';     
import close from '../../../assets/close.svg';
import Slide from '@mui/material/Slide';
import LoginForm from "../../Molecules/LoginForm/LoginForm";
import ActionForm from "../../Molecules/ActionForm/ActionForm";


interface Props extends React.PropsWithChildren {
  onClick: () => void,
  onClose: () => void,
  titlecontent: string,
  primarybtn: number,
  textnodebtn: string,
  primary: number,
  textnode: string,
  children: React.ReactNode,
  open: boolean,
  buttonProps: ButtonPropsI,
  subheadcontent: string,
  emailtype: string,
  emaillabel: string,
  passlabel: string,
  passtype: string
}


const StyledHeader: React.FC<Props> = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const style = {
  position: 'absolute',
  width: 375,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: '0px 0px 25px 10px rgba(0, 0, 0, 0.10)'
};

const ModalElement: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <div>
      <button onClick={handleOpen}>Open modal</button>
      <Modal {...props} 
        open={open} 
        onClose={handleClose}
        sx={{display: 'flex', justifyContent: 'center', alignItems: 'center'}} >
          <Slide in={open} direction="up" mountOnEnter unmountOnExit>
            <Box sx={style}>
              <StyledHeader {...props}>
                <Title textnode={props.titlecontent} />
                <motion.div 
                    whileHover={{ scale: 1.1, rotate: 90 }}   
                    whileTap={{ scale: 0.9 }} 
                    style={{ originX: 0.5, originY: 0.5, height: 24 }}>
                        <img src={close} onClick={handleClose} style={{cursor: 'pointer' }}/>
                </motion.div>
              </StyledHeader>
              <LoginForm {...props} />
              <ActionForm {...props} />
            </Box>
          </Slide >
      </Modal>
      </div>
    );
  };

export default ModalElement;