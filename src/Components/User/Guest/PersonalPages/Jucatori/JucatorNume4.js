import React from 'react'
import "./Jucatori.css";
import teofan from '../../Assets/teofan.png';
function JucatorNume4(){


    return(
        <div className="Jucator">
              <img className='teofani' src={teofan} alt='teofan'/>
              <div className='infoJucator'>
                <h1 className='infoNume'>Teofan nume prenume</h1>
                <div className='infoGeneral'>
                    <p className='infoGeneralgrid'>Numar tricou</p>
                    <p className='infoGeneralgrid'> 1</p>
                    <p className='infoGeneralgrid'>Club</p>
                    <p className='infoGeneralgrid'>CSM Suceava</p>
                    <p className='infoGeneralgrid'>Pozitie</p>
                    <p className='infoGeneralgrid'>Wing-Spiker</p>
                    <p className='infoGeneralgrid'>Sport</p>
                    <p className='infoGeneralgrid'>Volei</p>
                    <p className='infoGeneralgrid'>Nationalitate</p>
                    <p className='infoGeneralgrid'>Romana</p>
                </div>
                <h1 className='infoIstoric'>Istoric</h1>
                <div className='Istoric'>
                    <p className='infoGeneralgrid'>Echipa</p>
                    <p className='infoGeneralgrid'>Perioada</p>
                    <p className='infoGeneralgrid'>nationalitate</p>
                    <p className='infoGeneralgrid'>CSM Suceava</p>
                    <p className='infoGeneralgrid'>FRV 2022/2023</p>
                    <p className='infoGeneralgrid'>ROM</p>
                    <p className='infoGeneralgrid'>Echipa</p>
                    <p className='infoGeneralgrid'>Echipa</p>
                    <p className='infoGeneralgrid'>Echipa</p>
                    <p className='infoGeneralgrid'>Echipa</p>
                    <p className='infoGeneralgrid'>Echipa</p>
                    <p className='infoGeneralgrid'>Echipa</p>
                </div>
              </div>
        </div>
    )
}

export default JucatorNume4;