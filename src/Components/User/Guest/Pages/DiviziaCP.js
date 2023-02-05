import React from 'react';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import Sponsori from '../../../../Sponsori';
import { Box } from '@mui/system';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import imagec from '../Assets/Banner.jpg';
import Jucator from '../PersonalPages/Jucatori/Jucator';
import TvIcon from '../Assets/tv.png';
import part1 from '../Assets/CSMlogo2.png';
import { Link } from 'react-router-dom';
import part2 from '../Assets/Craiova.png';
import { cmdata } from './CalendarMeciuriData';

function DiviziaCR(){

    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
  
      setAnchorEl(null);
    };
    
  
    const style = {
      color: 'white',
      
      };
  
      const [meci, setMeci] = React.useState(cmdata);
      return(
          <>
          <Navbar />
          
          <div className='CalendarMeciuri'>
              <div className='Calendar-meciurinav'>
                  <img className='imgcalendar' src={imagec} alt={imagec}></img>
                  <div className='nav-barcalendar'>
                      <h3>Campionat Masculin</h3>
                      <a href='#'>
                      <spam>Cupa Romaniei</spam>
                      </a>
                      <a href='#'>
                      <spam>Super Cupa Romaniei</spam>
                      </a>
                      <a href='#'>
                      <spam>Turneu Promovare A1M</spam>
                      </a>
                      <a href='#'>
                      <spam>Divizia A2 Vest</spam>
                      </a>
                      <a href='#'> 
                      <spam>Divizia A2 Est</spam>
                      </a>
                      <a href='#'>
                      <spam>Divizia Juniori</spam>
                      </a>
                      <a href='#'>
                      <spam>Divizia Cadeti</spam>
                      </a>
                      <a href='#'>
                      <spam>Divizia Sperante</spam>
                      </a>
                      <a href='#'>
                      <spam>Divizia Minivolei</spam>
                      </a>
                  {/* <Button
              style={style}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              >
               Campionat Masculin
          </Button>
          <Menu
              id="basic-menu"
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              MenuListProps={{
              'aria-labelledby': 'basic-button',
          }}
          >
             <MenuItem onClick={handleClose}>Cupa Romaniei</MenuItem>
          <MenuItem onClick={handleClose}>Super Cupa Romaniei</MenuItem>
          <MenuItem onClick={handleClose}>Turneu Promovare A1M</MenuItem>
          <MenuItem onClick={handleClose}>Divizia A2 Vest</MenuItem>
          <MenuItem onClick={handleClose}>Divizia A2 Est</MenuItem>
          <MenuItem onClick={handleClose}>Divizia Juniori</MenuItem>
          <MenuItem onClick={handleClose}>Divizia Cadeti</MenuItem>
          <MenuItem onClick={handleClose}>Divizia Sperante</MenuItem>
          <MenuItem onClick={handleClose}>DiviziaMinivolei</MenuItem>
        </Menu> */}
                  </div>
                  <br/>
                  {meci.map((item,index) =>
                   <div key={index} className="grid-meci">
                   <h3 className='runda-meci'>Runda {item.Runda}</h3>
                  <div className='liniemeci'>
                   <div className='data-meci'>{item.DataMeci}</div>
                   <div className='ora-meci'>{item.OraMeci}</div>
                   <div className='echipe-meci'>
                       <div className='zona-echipa'>
                           <div className='echipa1zona'>
                   <a className='participant1-meci' href="#">
                       <img className='imgpartzona'  src={item.img1} alt={item.img2} ></img>
                     </a>
                     <p>{item.NumeEchipa}</p>
                     </div>
                     <div className='echipa1zona'>
                   <a className='participant2-meci' href="#">
                       <img className='imgpartzona'  src={item.img2} alt={item.img2} ></img>
                     </a>
                     <p>{item.NumeEchipa2}</p>
                     </div>
                     </div>
                     </div>
                   <div className='rezultat-meci'>
                     <div className='scor-meci'>
                       <a className='cifra1'>{item.cifra1}</a>
                       <a className='linie'>-</a>
                       <a className='cifa2'>{item.cifra2}</a>
                     </div>
                   </div>
                   
                   <div className='loc-meci'>{item.locMeci}</div>
                   <div className='link-meci'>
                       <a href='#'>
                       <img  src={TvIcon} alt={TvIcon}></img>
                       </a>
                   </div>
       
                  </div>
                  </div>
                  )};
          
              </div>
          </div>  
          <Sponsori/>
          <Footer/>
          </>
      );

}
export default DiviziaCR;