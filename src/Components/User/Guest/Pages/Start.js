import React, {useState} from 'react'
import "./Start.css";
import Footer from '../../../Footer/Footer';
import Sponsori from '../../../../Sponsori';
import { Link, useNavigate } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import banner from '../Assets/Banner.jpg'
import image from '../Assets/echipa3.jpg';
import meci from '../Assets/jucatori4.jpeg';
import participant1 from '../Assets/CSMlogo2.png';
import participant2 from '../Assets/Craiova.png';
import echipasen from '../Assets/echipa2.jpeg';
import stiriimg from '../Assets/stirifoto.jpg';
import SignIn from './Logare';
import Jucator from '../PersonalPages/Jucatori/Jucator';
import { maxHeight, maxWidth } from '@mui/system';
import Box from '@mui/material/Box';
import  Container  from '@mui/material/Container';
import Card from '@mui/material/Card';
import  CardMedia  from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  CardActions  from '@mui/material/CardActions';
import Paper from '@mui/material/Paper';
import  CssBaseline  from '@mui/material/CssBaseline';
import { jucatorData } from '../PersonalPages/Jucatori/JucatorData';
import { antrenorData } from '../PersonalPages/AntrenorData';
import Autentificare from './Logare';
import SignUp from './Inregistrare';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Grid from '@mui/material/Grid';

const theme = createTheme();


function Start() {
   const [open, setOpen] = useState(false);
  const [chack, setChack] = useState(false);

  const [jucator, setJucator]= useState(jucatorData);
  const [antrenor,setAntrenor]= useState(antrenorData);
  
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };
  const handleClickChack = () =>{
    setChack(true)
  }
   const handleClickOpen = () => {

     setOpen(true);
   };

   const handleClose = () => {
    setOpen(false);
   };
  let navigateLog = useNavigate();
  const handleLog = () => {
      let path1 = `/Logare`;
      navigateLog(path1);
  };
  let navigateInreg = useNavigate();
  const handleInreg = () => {
      let path = `/Inregistrare`; 
      navigateInreg(path);
  };
  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/Prezentare`; 
    
    navigate(path);
  };
  const style = {
    background: 'rgb(2, 35, 78)',
     borderRadius: 3,
     border: 4,
     borderColor: 'rgb(37, 150, 190)',
      color: 'white',
    height: 50,
    width: 150,
    padding: '0 20px',
    
    };
    const stylecard={
      display: 'flex',
      justifyContent: 'end',
    }
  return (
  <>
    <div className='start-container'>
    <div className='BtnGrup'>
    <Stack direction="row" spacing={2}>
      <Button style={style} className='btnAdmin' size='small' variant="text" onClick={handleClickOpen}>Autentificare</Button>
      <Button style={style}  className='btnCreator' size='small' variant="text" onClick={handleClickChack}>Inregistrare</Button>
      <Button  style={style} className='btnVizitator' size='small' variant="text" onClick={routeChange} >Vizitator</Button>
    </Stack>
    <Dialog
        open={chack}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
            <SignUp/>
        </DialogContent>
         <DialogActions>
         
        </DialogActions> 
      </Dialog>
    </div>
    <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
            <Autentificare/>
        </DialogContent>
         <DialogActions>
         
        </DialogActions> 
      </Dialog>
      
  </div>
    <img className='img' src={image} alt={image}></img>
    {/* <div className='overlay'>
    </div> */}
    
     {/* <Box>
      sx={{
        width: 1000,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    </Box> */}
   
    <div className='info-container'>
    <br/>
    <Container sx={{bgcolor:"#cfd9e7"} }>
        <Box sx={{ width: '100%', typography: 'body1', component:'div' }}>
          
            <div className='lotcurent'>

              <div className='lotcurentcorp'>
              {jucator.map((item,index) => 
                <div key={index} className='lotjuc'>
                  <img className='imglotjuc' src={item.img} alt={item.img}/>
                  <h3 className='lotjucnume'>{item.nume} {item.prenume}</h3>
                </div>
              )};
              </div>
              <div className='lotcurentantrenorigrup'>
              {antrenor.map((item,index) => 
                <div key={index} className='lotcurentantrenori'>
                  <img className='imglotjuc' src={item.img} alt={item.img}/>
                  <h3 className='lotjucnume'>{item.nume} {item.prenume}</h3>
                </div>
              )};
              </div>
              <div className='imglogoc'>
              <img className='imglogo' src={participant1} alt={participant1}></img>
              </div>
            </div>

        </Box>
    </Container>
    <br/>
    <CssBaseline />
      <div className='clasOficial'>
      <Card sx={{ height: 300, width: 500}}>
      <CardMedia
        component="img"
        alt="Banner"
        height="140"
        image={banner}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Clasament oficial
        </Typography>
        <Typography variant="body2" color="text.secondary">
          Clasamentul oficianl pentru Divizia A1 MASCULIN
        </Typography>
      </CardContent>
      <CardActions style={stylecard} >
        <a href={"https://www.frvolei.ro/pagini/3_campionat/1_A1M.html"}>
          <Button>Vezi mai multe</Button>
        </a>
      </CardActions>
    </Card>
    <CssBaseline />
      </div>
      <div className='uumeci'>
      <Card sx={{ height: 500, width: 500}}>
      <CardMedia
        component="img"
        alt="meci"
        height="150"
        image={meci}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Cele mai recente meciuri
        </Typography>
        <Typography variant="body1" >
        <h3>Ultimul meci</h3>
         <Paper elevation={12}>
          <div className='afismeci'>
           
            <div className='echipa1'>
              <a className='participant1' href="#">
                <img className='imgparticipant1'  src={participant1} alt={participant1} ></img>
              </a>
            </div>
            <div className='rezultat'>
              <div className='data'>20.12.2022</div>
              <div className='scor'>
                <a className='cifra1'>0</a>
                <a className='linie'>-</a>
                <a className='cifa2'>1</a>
              </div>
              <div className='textrezultat'>FINAL</div>
            </div>
            <div className='echipa2'>
            <a className='participant1' href="#">
                <img className='imgparticipant1'  src={participant2} alt={participant2} ></img>
              </a>
              </div>
          </div>
         </Paper>
        </Typography>
        <br/>
        <Typography variant="body1" >
        <h3>Meciul urmator</h3>
         <Paper elevation={12}>
          <div className='afismeci'>
           
            <div className='echipa1'>
              <a className='participant1' href="#">
                <img className='imgparticipant1'  src={participant1} alt={participant1} ></img>
              </a>
            </div>
            <div className='rezultat'>
              <div className='data'>20.12.2022</div>
              <div className='scor'>
                <a className='cifra1'>0</a>
                <a className='linie'>-</a>
                <a className='cifa2'>1</a>
              </div>
              <div className='textrezultat'>FINAL</div>
            </div>
            <div className='echipa2'>
            <a className='participant1' href="#">
                <img className='imgparticipant1'  src={participant2} alt={participant2} ></img>
              </a>
              </div>
          </div>
         </Paper>
        </Typography>
      </CardContent>
      <CardActions style={stylecard} >
        <a href={"https://www.frvolei.ro/pagini/3_campionat/1_A1M.html"}>
          <Button>Vezi mai multe</Button>
        </a>
      </CardActions>
    </Card>
      </div>
      <div className='ultimelenoutati'>
      <Card sx={{ height: 500, width: 500}}>
      <CardMedia
        component="img"
        alt="stiriimg "
        height="140"
        image={stiriimg}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Ultimele noutati
        </Typography>
        <Typography variant="body1" component="div">
          CSM Suceava a încheiat prima parte a sezonului competiţional cu o victorie
        <Typography variant="body2" color="text.secondary">
          În cadrul ultimei etape a sezonului regulat din Divizia A2 de volei masculin, Seria Vest, CSM Suceava a jucat la finele săptămânii trecute pe terenul echipei Lapi Dej. Chiar dacă antrenorul oaspeţilor, Tudor Orăşanu, a folosit în acest meci doar juniorii, pentru a le verifica potenţialul şi a le da încredere în forţele proprii, formaţia suceveană s-a impus cu 3-0 (-22, -24, -23), însă toate cele trei seturi au fost deosebit de echilibrate.
        </Typography>
        </Typography>
      </CardContent>
      <CardActions style={stylecard} >
        <a href={"/Noutati"}>
          <Button>Vezi mai multe</Button>
        </a>
      </CardActions>
    </Card>
      </div>
      <div className='intalnesteechipa'>
      <Card sx={{ height: 300, width: 500}}>
      <CardMedia
        component="img"
        alt="echipasen"
        height="140"
        image={echipasen}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          Intalneste echipa
        </Typography>
        <Typography variant="body2" color="text.secondary">
          lorem ipsum dolor sit, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
        </Typography>
      </CardContent>
      <CardActions style={stylecard} >
        <a href={"/Personal"}>
          <Button>Intalneste echipa</Button>
        </a>
      </CardActions>
    </Card>
      </div>
      </div>
      <Sponsori/>
      <Footer/>
      
  </>
  );
}

export default Start
