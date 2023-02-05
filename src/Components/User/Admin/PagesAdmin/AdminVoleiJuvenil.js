import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import Sponsori from '../../../../Sponsori';
function VoleiJuvenil(){
    return(
        <>
        <Navbar />
        
        <div className='VoleiJuvenil'>
           <h1>VoleiJuvenil</h1>
        </div>
        <Sponsori/>
        <Footer/>
        </>
        
    );
}

export default VoleiJuvenil;