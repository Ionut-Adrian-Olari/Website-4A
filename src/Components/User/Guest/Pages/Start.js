import React, {useState} from 'react'
import "./Start.css";
import SignUp from "./Inregistrare";
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import image from '../Assets/vball5.jpg'
import SignIn from './Logare';



function Start() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const style = {
    background:'transparent',
    borderRadius: 3,
    border: 0,
    color: 'black',
    height: 100,
    width: 400,
    padding: '0 30px',
    };
  return (
  <>
    <div className='start-container' style={{ backgroundImage:`url(${image})` }}>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogContent>
          <SignIn/>
          <SignUp/>
        </DialogContent>
        <DialogActions>
          <Button autoFocus onClick={handleClose}>
            Disagree
          </Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
    <div className='BtnGrup'>
    <Stack spacing={4}>
      <Button style={style} className='btnAdmin' size='large' variant="contained" onClick={handleClickOpen}>Administrator</Button>
      <Button style={style}  className='btnCreator' size='large' variant="contained" onClick={handleClickOpen}>Creator</Button>
      <Button  style={style} className='btnVizitator' size='large' variant="contained" onClick={handleClickOpen}>Vizitator</Button>
    </Stack>

    </div>
    
  </div>
  
  </>
  );
}

export default Start
