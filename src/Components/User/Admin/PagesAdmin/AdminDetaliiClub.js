import React from 'react';
import Jucator from '../PersonalPages/Jucatori/Jucator';
import { Container, Box, CssBaseline } from '@mui/material';
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Typography from '@mui/material/Typography';
import Navbar from '../../../Navbar/Navbar';
import Footer from '../../../Footer/Footer';
import Sponsori from '../../../../Sponsori';
import {dcData} from './AdminDetaliiClubData';
function DetaliiClub() {

    const [istoricContent, setIstoricContent] = React.useState(dcData);
    const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

    return(
        <>
        <Navbar />
        
        <div className='DetaliiClub'>
        <CssBaseline/>
        <Container sx={{bgcolor:"#cfd9e7"} }>
        <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Viziune" value="1" />
            <Tab label="Istorie" value="2" />
            <Tab label="Trofee" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">Asociatia Club SportivFlamingo Volleyball Club ofera oportunitati copiilor si tinerilor de a se bucura de sport prin participarea la programele de pregatire si la competitiile sportive, la tabere de pregatire nationale si internationale      - pentru sportivii legitimati in cadrul FVC - creand cadrul optim pentru dezvoltarea abilitatilor motorii, cresterea increderii in sine, dobandirea deprinderilor de autodisciplina, dezvoltarea capacitatii de comunicare si cooperare in interesul echipei, pentru a concura in mod corect si a-si ocupa timpul liber intr-un mod cat mai placut si sanatos.

Antrenamentul este un element esential pentru dezvoltarea calitatilor sportive iar dezvoltarea unui mediu concurential caracterizat prin conditii de egalitate pentru toti participantii este o metoda adecvata de testare a capacitatilor individuale si a educatiei lor sportive si ofera totodata mijloace motivante pentru dezvoltarea personala.

Nu ne propunem sa selectam copiii dupa niciun criteriu. Mai degraba, ne propunem sa alegem parintii, in sensul in care incercam sa ne asiguram ca vin alaturi de noi persoane care ne impartasesc valorile si viziunea asupra educatiei.

INVATA SA DEVII LIDER

In cadrul sesiunilor de antrenament sub indrumarea antrenorilor profesionisti dar si in competitii vei avea sansa sa lucrezi alaturi de sportivi mai talentati si sportivi mai putin talentati iar un lider adevarat are umilinta si rabdarea de a lucra cu ambele.

Asociatia Club Sportiv Flamingo Volleyball Club incurajeaza si sustine prin programe speciale de instruire  formarea viitorilor lideri, oferind premii  tuturor celor care aleg acest drum.

 

Viziune
ASOCIATIA CLUB SPORTIV FLAMINGO VOLLEYBALL CLUB isi propune sa promoveze sportul ca element esential pentru o educatie de calitate, un stil de viață sănătos și sa lupte cu statistica ce ne arată că 60% din populatia Romaniei nu practică niciodata sportul sau o activitate fizică și că în țara noastră mai sunt doar 12000 de elevi sportivi legitimati.

Acest lucru se poate realiza prin implicarea mai puternica a noastra, prin marirea ariei de selectie, organizand evenimente sportive cu rolul insuflării valorilor sportive, a conștientizării importanței sportului pentru sănătate, ceea ce implică condiție fizică și psihică bună și scotand in evidenta faptul ca miscarea fizica si sportul are efecte pozitive asupra starii de sanatate a tuturor categoriilor de varsta.
        </TabPanel>
        <TabPanel value="2">
        <h1 className='titlulist'>In anul 1972 se infiinteaza Clubul Sportiv Municipal SUCEAVA, initial cu sectiile atletism,fotbal,rugby,volei</h1>
                <br/>
                <a className='contenttxt'>Ulterior in 1976 s-au adaugat sectiile de lupte greco-romane,hochei pe gheata, in 1978 patinaj viteza, in 1979 handbal, in 1981 inot, in 1990 baseball si canotaj. Rezultatele bune nu amu intirziat sa apara .Chiar din primul an de la infiintare prin promovarea echipei de rugby in divizia A,dar si prin alti  sportivi ai altor sectii cum ar fi ; atletism,lupte ,greco-romane,fotbal,inot,canotaj si tir cu arcul.Beneficiind de o baza larga de selectie ,de antrenori valorosi precum si de un management efficient  CSM Suceava ajunge unul din cele mai importante cluburi sportive din Romania cucerind prin sportivii sai peste 100 de medalii internationale si nenumarate medalii nationale.</a>
        
        </TabPanel>
        <TabPanel value="3">Asociatia Club SportivFlamingo Volleyball Club ofera oportunitati copiilor si tinerilor de a se bucura de sport prin participarea la programele de pregatire si la competitiile sportive, la tabere de pregatire nationale si internationale      - pentru sportivii legitimati in cadrul FVC - creand cadrul optim pentru dezvoltarea abilitatilor motorii, cresterea increderii in sine, dobandirea deprinderilor de autodisciplina, dezvoltarea capacitatii de comunicare si cooperare in interesul echipei, pentru a concura in mod corect si a-si ocupa timpul liber intr-un mod cat mai placut si sanatos.

Antrenamentul este un element esential pentru dezvoltarea calitatilor sportive iar dezvoltarea unui mediu concurential caracterizat prin conditii de egalitate pentru toti participantii este o metoda adecvata de testare a capacitatilor individuale si a educatiei lor sportive si ofera totodata mijloace motivante pentru dezvoltarea personala.

Nu ne propunem sa selectam copiii dupa niciun criteriu. Mai degraba, ne propunem sa alegem parintii, in sensul in care incercam sa ne asiguram ca vin alaturi de noi persoane care ne impartasesc valorile si viziunea asupra educatiei.

INVATA SA DEVII LIDER

In cadrul sesiunilor de antrenament sub indrumarea antrenorilor profesionisti dar si in competitii vei avea sansa sa lucrezi alaturi de sportivi mai talentati si sportivi mai putin talentati iar un lider adevarat are umilinta si rabdarea de a lucra cu ambele.

Asociatia Club Sportiv Flamingo Volleyball Club incurajeaza si sustine prin programe speciale de instruire  formarea viitorilor lideri, oferind premii  tuturor celor care aleg acest drum.

 

Viziune
ASOCIATIA CLUB SPORTIV FLAMINGO VOLLEYBALL CLUB isi propune sa promoveze sportul ca element esential pentru o educatie de calitate, un stil de viață sănătos și sa lupte cu statistica ce ne arată că 60% din populatia Romaniei nu practică niciodata sportul sau o activitate fizică și că în țara noastră mai sunt doar 12000 de elevi sportivi legitimati.

Acest lucru se poate realiza prin implicarea mai puternica a noastra, prin marirea ariei de selectie, organizand evenimente sportive cu rolul insuflării valorilor sportive, a conștientizării importanței sportului pentru sănătate, ceea ce implică condiție fizică și psihică bună și scotand in evidenta faptul ca miscarea fizica si sportul are efecte pozitive asupra starii de sanatate a tuturor categoriilor de varsta.
        </TabPanel>
        </TabContext>
        </Box>
        </Container>
        </div>
        <Sponsori/>
        <Footer/>
        </>
    );

    TabPanel.propTypes = {
        children: PropTypes.node,
        index: PropTypes.number.isRequired,
        value: PropTypes.number.isRequired,
      };
      
      function a11yProps(index) {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
      }
      
    
}


export default DetaliiClub;

