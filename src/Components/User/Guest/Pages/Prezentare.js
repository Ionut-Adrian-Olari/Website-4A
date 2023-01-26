
import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { persoanaData } from '../PersonalPages/Personalcontent';
function Prezentare() {

    const [autor, setAutor]= useState(persoanaData)
    return(
        <>
            <CssBaseline />
            <Container fixed>
             <Box sx={{ bgcolor: '#AF9AF1', height: '100vh' }}>

             <div className='grup1'>
                {autor.map((item, index) =>

                    <div key={index} className='teofan'>
                    <img className='teofani' src={item.Image} alt={item.Image}/>
                    <div className='teofan-elen-lucian inriaserif-bold-black-24px'>{item.nume} {item.prenume}</div>
                    </div>

                 )};
              
            </div>
            </Box>
            </Container>
            </>
    );
}

export default Prezentare;