import React from "react";
import styled from 'styled-components'; 
import Title from "../../Atoms/Title/Title";
import Subhead from "../../Atoms/Subhead/Subhead";
import TextInput from "../../Atoms/Input/TextInput/TextInput";
import PasswordInput from "../../Atoms/Input/Password/PasswordInput";
import Button from "../../Atoms/Button/Button";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ButtonPropsI } from "../../Atoms/Button/Button";
import { motion } from 'framer-motion';     
import close from '../../../assets/close.svg';
import Slide from '@mui/material/Slide';


interface Props extends React.PropsWithChildren {
  onClick: () => void,
  onClose: () => void,
  subheadcontent: string,
  titlecontent: string,
  emailtype: string,
  emaillabel: string,
  passlabel: string,
  passtype: string,
  primarybtn: number,
  textnodebtn: string,
  primary: number,
  textnode: string,
  children: React.ReactNode,
  open: boolean,
  buttonProps: ButtonPropsI
}

const StyledHeader: React.FC<Props> = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 16px;
  box-sizing: border-box;
`;

const StyledAction: React.FC<ButtonPropsI> = styled.div`
  min-height: 72px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 100%;
  padding: 16px 20px;
  box-sizing: border-box;
  align-items: center;
  gap: 24px;
`;

const StyledWrapper: React.FC<Props> = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 21px 16px;
  width: 100%;
  box-sizing: border-box;
  min-height: 253px;
  justify-content: center;
  gap: 24px;
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
              <StyledWrapper {...props}>
                <Subhead textnode={props.subheadcontent} />
                <TextInput type={props.emailtype} label={props.emaillabel} />
                <PasswordInput type={props.passtype} label={props.passlabel} />
              </StyledWrapper>
              <StyledAction {...props}>
                <Button textnode={props.textnode} primary={props.primary} />
                <Button textnode={props.textnodebtn} primary={props.primarybtn} />
              </StyledAction>
            </Box>
          </Slide >
      </Modal>

      </div>
    );
  };

export default ModalElement;