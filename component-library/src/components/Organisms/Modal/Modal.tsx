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
  open: boolean
}


const StyledHeader: React.FC<Props> = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 374px;
  padding: 16px;
  box-sizing: border-box;
  align-items: center;
`;

const StyledAction: React.FC<Props> = styled.div`
  height: 72px;
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
  height: 258px;
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



const ModalElement: React.FC<Props> = (props: Props) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

    return (
      <div>
      <button onClick={handleOpen}>Open modal</button>
      <Modal {...props} open={open} onClose={handleClose} >
      <Box sx={style}>
        <StyledHeader {...props}>
          <Title textnode={props.titlecontent} />
          <CloseRoundedIcon onClick={handleClose} sx={{cursor: 'pointer'}}/>
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
      </Modal>

      </div>
    );
  };

export default ModalElement;