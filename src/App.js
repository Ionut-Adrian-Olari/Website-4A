import React from 'react'
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Footer from './Components/Footer/Footer';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Start from './Components/User/Guest/Pages/Start';
import Prezentare from './Components/User/Guest/Pages/Prezentare';
import DetaliiClub from './Components/User/Guest/Pages/DetaliiClub';
import CalendarMeciuri from './Components/User/Guest/Pages/CalendarMeciuri';
import Noutati from './Components/User/Guest/Pages/Noutati';
import Personal from './Components/User/Guest/PersonalPages/Personal';
import VoleiJuvenil from './Components/User/Guest/Pages/VoleiJuvenil';
import Sponsori from './Sponsori';

function App() {
  return (
    <>
    <Router>
      <Routes>
      <Route path='/' exact element={<Start/>}/>
      <Route path='/Prezentare'  exact element={<Prezentare/>}/>
      <Route path='/DetaliiClub' element={<DetaliiClub/>}/>
      <Route path='/CalendarMeciuri' element={<CalendarMeciuri/>}/>
      <Route path='/Noutati' element={<Noutati/>}/>
      <Route path='/Personal'element={<Personal/>}/>
      <Route path='/VoleiJuvenil' element={<VoleiJuvenil/>}/>
      </Routes>
      
    </Router>
    
    </>
    
  );
}

export default App;
