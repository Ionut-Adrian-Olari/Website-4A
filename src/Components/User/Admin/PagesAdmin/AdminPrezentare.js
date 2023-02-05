
import React, {useState} from 'react';
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { persoanaData } from '../PersonalPages/Personalcontent';
import Navbar from '../../../Navbar/Navbar';
import Sponsori from '../../../../Sponsori';
import Footer from '../../../Footer/Footer';
function AdminPrezentare() {

    
    return(
        <>
           <Navbar />
            
            <CssBaseline />
            <Container fixed>
             <Box sx={{ bgcolor: '#AF9AF1', height: '100vh' }}>

             <div className='grup1'>
               <h1>Admin</h1>
            </div>
            </Box>
            
            </Container>
            <Sponsori/>
            <Footer/>
            </>
    );
}

export default AdminPrezentare;