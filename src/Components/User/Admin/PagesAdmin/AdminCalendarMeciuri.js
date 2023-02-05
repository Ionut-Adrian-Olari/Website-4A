import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import Sponsori from '../../../../Sponsori';
import Jucator from '../PersonalPages/Jucatori/Jucator';

function CalendarMeciuri(){
    return(
        <>
        <Navbar />
        
        <div className='CalendarMeciuri'>
            <h1>CalendarMeciuri</h1>
            
        </div>
        <Sponsori/>
        <Footer/>
        </>
    );
}

export default CalendarMeciuri;