import React, {useState} from 'react'
import "./Start.css";
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import image from '../Assets/vball5.jpg'

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
      
    <div className='BtnGrup'>
    <Stack spacing={4}>
      <Button style={style} className='btnAdmin' size='large' variant="outlined" onClick={handleClickOpen}>Administrator</Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Login"}
        </DialogTitle>
        <DialogContent>
        <div className='loginform'>
            <label className='User'>User</label>
            <input type='text'></input>
            <label className='User'>User</label>
            <label className='User'>User</label>
            </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Disagree</Button>
          <Button onClick={handleClose} autoFocus>
            Agree
          </Button>
        </DialogActions>
      </Dialog>
      <Button style={style}  className='btnCreator' size='large' variant="contained" onClick={handleClickOpen}>Creator</Button>
      <Button  style={style} className='btnVizitator' size='large' variant="contained" onClick={handleClickOpen}>Vizitator</Button>
    </Stack>

    </div>
    
  </div>
  
  </>
  );
}

export default Start
