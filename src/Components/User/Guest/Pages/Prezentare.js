
import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Card from '@mui/material/Card';
import  CardMedia  from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import  CardActions  from '@mui/material/CardActions';
import Paper from '@mui/material/Paper';
import banner from '../Assets/Banner.jpg'
import image from '../Assets/echipa3.jpg';
import meci from '../Assets/jucatori4.jpeg';
import participant1 from '../Assets/CSMlogo2.png';
import participant2 from '../Assets/Craiova.png';
import echipasen from '../Assets/echipa2.jpeg';
import stiriimg from '../Assets/stirifoto.jpg';
import { jucatorData } from '../PersonalPages/Jucatori/JucatorData';
import { antrenorData } from '../PersonalPages/AntrenorData';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import Sponsori from '../../../../Sponsori';
function Prezentare() {

  
    const [jucator, setJucator]= useState(jucatorData);
  const [antrenor,setAntrenor]= useState(antrenorData);
  const stylecard={
    display: 'flex',
    justifyContent: 'end',
  }
    return(
        <>
           <Navbar />
            
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
      <a href={"#"}>
          <Button>Distribuire</Button>
        </a>
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
      <a href={"#"}>
          <Button>Distribuire</Button>
        </a>
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

export default Prezentare;