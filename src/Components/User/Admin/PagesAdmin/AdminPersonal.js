import React, { useState } from 'react';
import image from '../Assets/personal-staf@1x.png';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import Sponsori from '../../../../Sponsori';
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
import "../PersonalPages/Personal.css";
import participant1 from '../Assets/CSMlogo2.png';
import { jucatorData, istoricJucator } from '../PersonalPages/Jucatori/JucatorData';
import { antrenorData } from '../PersonalPages/AntrenorData';
import img from '../Assets/teofan.png';
import steag from '../Assets/favicon-16x16.png';
import axios from 'axios';
import './Personal.css';
function Personal(){

    const [jucator, setJucator]= useState(jucatorData);
  const [antrenor,setAntrenor]= useState(antrenorData);
  const [istoric, setIstoric]= useState(istoricJucator);


    const addAutor = async () => {
        const dAutor = {
        
            id: 20,
    name: "string",
    firstName: "string",
    nationality: "string",
    position: "string",
    birthDate: "2023-01-26T11:59:44.978Z",
    height: 0,
    description: "string"
        };
        
        const dAutor2 = {
        
            identifier: "string",
                password: "string"
        };

        let token



        const result2 = axios.post("http://localhost:8080/security/login",dAutor2).then((response) => { token = response.data.token; const result1=  axios.post("http://localhost:8080/player",dAutor,{ headers: {
            'Authorization': `Bearer ${token}` 
          }}).then((response) => {console.log(response);});});

           const getresult = axios.get("http://localhost:8080/player/id/6").then((response) => {console.log(response);});
        // const token = localStorage.getItem("token");
        
        

    // const result = await fetch('http://localhost:8080/player', {
    //   method: 'POST',
    //   headers: {
    //     'accept': '/',
    //     'Content-Type': 'application/json'
    //   },
    //   body: JSON.stringify(dAutor)
    // })


    // const resultInJson = await result.json()
    // setAutor(prev => [...prev, resultInJson])
    // }
    }


    return(
        <>
        <Navbar />
        <div className='personal'>
        <Box sx={{ width: '85%', bgcolor:'#b4c4d4', typography: 'body1', component:'div' }}>
         <div className='divizie'>
            {/* <Button onClick={addAutor}>ADASDASDASdS</Button> */}
         <h1 className='titlu'>DIVIZIA A1 2022 - 2023</h1>
         <div className='lotcurentp'>

        <div className='lotcurentcorpp'>
        {jucator.map((item,index) => 
  <div key={index} className='lotjucp'>
    <img className='imglotjucp' src={item.img} alt={item.img}/>
    <Paper elevation={24}>
    <h2 className='lotjucnumep'>{item.nume} {item.prenume}</h2>
    <div className='infoGeneralp1'>
                    <p className='infoGeneralgrid'>Numar Tricou</p>
                    <p className='infoGeneralgrid'> {item.nrTricou}</p>
                    <p className='infoGeneralgrid'>Data nasterii</p>
                    <p className='infoGeneralgrid'>{item.Club}</p>
                    <p className='infoGeneralgrid'>Pozitie</p>
                    <p className='infoGeneralgrid'>{item.Pozitie}</p>
                    <p className='infoGeneralgrid'> Inaltime</p>
                    <p className='infoGeneralgrid'>{item.Sport}</p>
                    <p className='infoGeneralgrid'>Nationalitate</p>
                    <p className='infoGeneralgrid'>{item.Nationalitate}</p>
            </div>
            {istoric.map((item, index) =>
            <div  key={index} >
                <h1 className='infoIstoric12'>Istoric</h1>
                <div className='Istoric12'>
                    <p className='infoGeneralgrid'>Echipa</p>
                    <p className='infoGeneralgrid'>Perioada</p>
                    <p className='infoGeneralgrid'>Debut</p>
                    <p className='infoGeneralgrid'>{item.echipa}</p>
                    <p className='infoGeneralgrid'>{item.perioada}</p>
                    <p className='infoGeneralgrid'>{item.nationalitatea}</p>
                </div>
            </div>
            
         )}
            </Paper>
            </div>
    
)};
</div>
<div className='lotcurentantrenorigrupp'>
{antrenor.map((item,index) => 
  <div key={index} className='lotcurentantrenorip'>
    <img className='imglotjucp' src={item.img} alt={item.img}/>
    <h3 className='lotjucnumep'>{item.nume} {item.prenume}</h3>
  </div>
)};
</div>
<div className='imglogocp'>
<img className='imglogop' src={participant1} alt={participant1}></img>
</div>
</div>
            
        </div>
        
        </Box>
        </div>
        <Sponsori/>
        <Footer/>
        </>
        
    );
}

export default Personal;