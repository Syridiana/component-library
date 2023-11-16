import React from "react";
import styled from 'styled-components'; 
import Title from "../../Atoms/Title/Title";
import Subhead from "../../Atoms/Subhead/Subhead";
import TextInput from "../../Atoms/Input/TextInput/TextInput";
import PasswordInput from "../../Atoms/Input/Password/PasswordInput";
import Button from "../../Atoms/Button/Button";
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import { ButtonPropsI } from "../../Atoms/Button/Button";
import { motion } from 'framer-motion';

interface Props {
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
  align-items: center;
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
  gap: 17px;
`;

const StyledWrapper: React.FC<Props> = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0 24px 0 16px;
  width: 100%;
  box-sizing: border-box;
  min-height: 258px;
  justify-content: center;
  gap: 24px;
`;


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 375,
  bgcolor: 'background.paper',
  border: 'none',
  boxShadow: '0px 0px 25px 10px rgba(0, 0, 0, 0.10)',
};



const ModalElement: React.FC<Props> = 
    ({titlecontent, subheadcontent, passlabel, passtype, emaillabel, 
      emailtype, primary, primarybtn, textnode, textnodebtn}, {...props}) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <div>
      <button onClick={handleOpen}>Open modal</button>
      <Modal {...props} open={open} onClose={handleClose} initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }} transition={{ duration: .5 }} >
        <Box sx={style}>
          <StyledHeader {...props}>
            <Title textnode={titlecontent} />
            <motion.div whileHover={{ scale: 1.1, rotate: 90 }}   whileTap={{ scale: 0.9 }} style={{ originX: 0.5, originY: 0.5, height: 24 }}>
              <CloseRoundedIcon onClick={handleClose} sx={{cursor: 'pointer'}}/>
            </motion.div>
          </StyledHeader>
          <StyledWrapper {...props}>
            <Subhead textnode={subheadcontent} />
            <TextInput type={emailtype} label={emaillabel} />
            <PasswordInput type={passtype} label={passlabel} />
          </StyledWrapper>
          <StyledAction {...props}>
            <Button textnode={textnode} primary={primary} />
            <Button textnode={textnodebtn} primary={primarybtn} />
          </StyledAction>
        </Box>
      </Modal>

      </div>
    );
  };

export default ModalElement;