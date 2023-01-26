import React, { useState } from 'react';
import image from '../Assets/personal-staf@1x.png';
import "../PersonalPages/Personal.css";
import { persoanaData } from './Personalcontent';
import { antrenorData } from './AntrenorData';
import img from '../Assets/teofan.png';
import { Button } from '@mui/material';
import axios from 'axios';
function Personal(){

    const [autor, setAutor]= useState(persoanaData)
    const[antrenor, setAntrenor]= useState(antrenorData)


    const addAutor = async () => {
        const dAutor = {
        
            id: 0,
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
        <div className='start-container' style={{ backgroundImage:`url(${image})` }}>
         <div className='divizie'>
            <Button onClick={addAutor}>ADASDASDASdS</Button>
         <h1 className='titlu'>DIVIZIA A1 2022 - 2023</h1>
            <div className='grup1'>
                {autor.map((item, index) =>

                    <div key={index} className='teofan'>
                    <img className='teofani' src={item.Image} alt={item.Image}/>
                    <div className='teofan-elen-lucian inriaserif-bold-black-24px'>{item.nume} {item.prenume}</div>
                    </div>

                 )};
              
            </div>
            <div className='zonaAntrenor'>
                <h1 className='titlu'>Antrenori</h1>
                <div className="Antrenori">
                {antrenor.map((item,index)=> 
                <div key={index} className='teofan'>
                <img className='teofani' src={item.img} alt={item.img}/>
                <div className='teofan-elen-lucian inriaserif-bold-black-24px'>{item.nume} {item.prenume}</div>
                </div>
                )}
                </div>
            </div>
        </div>
        </div>
    );
}

export default Personal;