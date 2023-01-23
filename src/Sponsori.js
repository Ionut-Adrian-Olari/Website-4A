import React from 'react'
import Paper from '@mui/material/Paper';
import './App.css';
import primarie from './Components/User/Guest/Assets/primarie.png';
/*import  bazzil from './Components/User/Guest/Assets/bazzil.png';
import  bucovina from './Components/User/Guest/Assets/bucovina.png';
import  celestin from './Components/User/Guest/Assets/celestin.png';
import  suct from './Components/User/Guest/Assets/suct.png';
import  primarie from './Components/User/Guest/Assets/primarie.png';
*/
function Sponsori() {
  return (
    <>
    <div className="paper-container">
    <Paper elevation={24}>
        <img src={primarie} alt={primarie}/>
    </Paper>
    <Paper elevation={24}>
    <img src={primarie} alt={primarie}/>
    </Paper>
    <Paper elevation={24}>
    <img src={primarie} alt={primarie}/>
    </Paper>
    <Paper elevation={24}>
    <img src={primarie} alt={primarie}/>
    </Paper>
    <Paper elevation={24}>
    <img src={primarie} alt={primarie}/>
    </Paper>
    <Paper elevation={24}>
    <img src={primarie} alt={primarie}/>
    </Paper>
    </div>
    </>
  )
}

export default Sponsori