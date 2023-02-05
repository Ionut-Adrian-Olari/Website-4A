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
import {dcData} from './DetaliiClubData';
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
        <TabPanel value="1">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac quam magna. Proin sed volutpat nunc, vel consequat lorem. Nulla a malesuada ipsum. Phasellus mattis risus quis felis gravida, vel consectetur tortor viverra. Aliquam congue fermentum commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ac justo et tellus hendrerit pharetra suscipit eget tellus.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut lorem lectus, laoreet quis lorem vitae, posuere euismod nisl. Vivamus sit amet nunc non enim placerat aliquet sed nec libero. Morbi a tristique purus, vel euismod massa. Quisque hendrerit urna diam, vel aliquam ante blandit at. Nam vitae tempus ipsum. Quisque eget orci in ex euismod bibendum et non odio. Proin volutpat lorem ut lectus tempus commodo. Proin ac urna sed felis interdum ultricies.

Donec eget sem fermentum, finibus elit finibus, fringilla felis. In fringilla, purus mollis scelerisque cursus, odio velit elementum lectus, in accumsan elit neque quis libero. Aenean et volutpat dolor. Morbi volutpat vel mauris quis pellentesque. Nulla porta turpis eu massa fringilla, vel ultrices mauris laoreet. In posuere nec massa ac accumsan. Nam pulvinar felis magna. Pellentesque viverra volutpat nisi, vel egestas arcu varius sit amet. Phasellus tempor ligula tincidunt viverra vestibulum. Nulla sollicitudin non ex ac feugiat.

Aenean in lorem erat. Aenean placerat nulla sed velit molestie consectetur. Mauris pellentesque consequat dui, id malesuada libero venenatis sed. Vivamus vitae nunc commodo, gravida quam bibendum, congue lectus. Vivamus mollis dictum mauris, id dignissim eros pulvinar a. Mauris sem purus, tincidunt aliquam dolor ac, pulvinar tempus velit. Donec tincidunt lacus ac iaculis pellentesque. Donec quis velit egestas, elementum ante condimentum, dictum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nec fringilla eros, quis commodo felis. In tellus massa, viverra ac lorem dignissim, ornare condimentum dui. Nunc placerat arcu sed facilisis sodales. Aliquam hendrerit venenatis leo condimentum ultrices.

Phasellus velit quam, mattis quis nibh placerat, luctus interdum massa. Nulla tempor nec justo a commodo. Cras porttitor ultrices risus vel interdum. Sed ut feugiat nunc. Praesent auctor euismod facilisis. Morbi tincidunt massa tincidunt, sollicitudin elit vel, volutpat sapien. Maecenas vel dapibus purus. Quisque id porta erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Nullam sed ante lorem. In hac habitasse platea dictumst. Pellentesque gravida tortor vel iaculis vulputate. Ut iaculis gravida mauris, vel porttitor velit sollicitudin vitae. Etiam eget erat vulputate, accumsan nisi a, venenatis odio. Integer convallis ante libero, in fringilla tortor rhoncus sed. Praesent eget metus vulputate, volutpat est nec, rhoncus arcu. Mauris varius justo quis augue iaculis facilisis. Nulla dapibus condimentum placerat. Donec gravida ante at justo congue ullamcorper. Quisque tincidunt pretium turpis, ut lobortis purus ultrices id. Cras pharetra eleifend magna, eu consequat lacus ornare sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Sed in ipsum non sapien dictum tempor non et libero. Curabitur porttitor tellus eget enim vehicula vestibulum. Mauris commodo convallis ipsum ac ultricies. Proin vel efficitur metus, vel mattis magna. Vestibulum commodo elit eget tristique accumsan. Nunc in dui nisi. Donec viverra sem lorem, vel euismod ante sollicitudin id. Etiam vitae tincidunt velit. Integer molestie augue sit amet fermentum pharetra. Nam ornare cursus eros, quis luctus tortor cursus pretium.</TabPanel>
        <TabPanel value="2">
        <h1 className='titlulist'>In anul 1972 se infiinteaza Clubul Sportiv Municipal SUCEAVA, initial cu sectiile atletism,fotbal,rugby,volei</h1>
                <br/>
                <a className='contenttxt'>Ulterior in 1976 s-au adaugat sectiile de lupte greco-romane,hochei pe gheata, in 1978 patinaj viteza, in 1979 handbal, in 1981 inot, in 1990 baseball si canotaj. Rezultatele bune nu amu intirziat sa apara .Chiar din primul an de la infiintare prin promovarea echipei de rugby in divizia A,dar si prin alti  sportivi ai altor sectii cum ar fi ; atletism,lupte ,greco-romane,fotbal,inot,canotaj si tir cu arcul.Beneficiind de o baza larga de selectie ,de antrenori valorosi precum si de un management efficient  CSM Suceava ajunge unul din cele mai importante cluburi sportive din Romania cucerind prin sportivii sai peste 100 de medalii internationale si nenumarate medalii nationale.</a>
        
        </TabPanel>
        <TabPanel value="3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac quam magna. Proin sed volutpat nunc, vel consequat lorem. Nulla a malesuada ipsum. Phasellus mattis risus quis felis gravida, vel consectetur tortor viverra. Aliquam congue fermentum commodo. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. In ac justo et tellus hendrerit pharetra suscipit eget tellus.

Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Ut lorem lectus, laoreet quis lorem vitae, posuere euismod nisl. Vivamus sit amet nunc non enim placerat aliquet sed nec libero. Morbi a tristique purus, vel euismod massa. Quisque hendrerit urna diam, vel aliquam ante blandit at. Nam vitae tempus ipsum. Quisque eget orci in ex euismod bibendum et non odio. Proin volutpat lorem ut lectus tempus commodo. Proin ac urna sed felis interdum ultricies.

Donec eget sem fermentum, finibus elit finibus, fringilla felis. In fringilla, purus mollis scelerisque cursus, odio velit elementum lectus, in accumsan elit neque quis libero. Aenean et volutpat dolor. Morbi volutpat vel mauris quis pellentesque. Nulla porta turpis eu massa fringilla, vel ultrices mauris laoreet. In posuere nec massa ac accumsan. Nam pulvinar felis magna. Pellentesque viverra volutpat nisi, vel egestas arcu varius sit amet. Phasellus tempor ligula tincidunt viverra vestibulum. Nulla sollicitudin non ex ac feugiat.

Aenean in lorem erat. Aenean placerat nulla sed velit molestie consectetur. Mauris pellentesque consequat dui, id malesuada libero venenatis sed. Vivamus vitae nunc commodo, gravida quam bibendum, congue lectus. Vivamus mollis dictum mauris, id dignissim eros pulvinar a. Mauris sem purus, tincidunt aliquam dolor ac, pulvinar tempus velit. Donec tincidunt lacus ac iaculis pellentesque. Donec quis velit egestas, elementum ante condimentum, dictum dolor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Donec nec fringilla eros, quis commodo felis. In tellus massa, viverra ac lorem dignissim, ornare condimentum dui. Nunc placerat arcu sed facilisis sodales. Aliquam hendrerit venenatis leo condimentum ultrices.

Phasellus velit quam, mattis quis nibh placerat, luctus interdum massa. Nulla tempor nec justo a commodo. Cras porttitor ultrices risus vel interdum. Sed ut feugiat nunc. Praesent auctor euismod facilisis. Morbi tincidunt massa tincidunt, sollicitudin elit vel, volutpat sapien. Maecenas vel dapibus purus. Quisque id porta erat. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

Nullam sed ante lorem. In hac habitasse platea dictumst. Pellentesque gravida tortor vel iaculis vulputate. Ut iaculis gravida mauris, vel porttitor velit sollicitudin vitae. Etiam eget erat vulputate, accumsan nisi a, venenatis odio. Integer convallis ante libero, in fringilla tortor rhoncus sed. Praesent eget metus vulputate, volutpat est nec, rhoncus arcu. Mauris varius justo quis augue iaculis facilisis. Nulla dapibus condimentum placerat. Donec gravida ante at justo congue ullamcorper. Quisque tincidunt pretium turpis, ut lobortis purus ultrices id. Cras pharetra eleifend magna, eu consequat lacus ornare sit amet. Lorem ipsum dolor sit amet, consectetur adipiscing elit.

Sed in ipsum non sapien dictum tempor non et libero. Curabitur porttitor tellus eget enim vehicula vestibulum. Mauris commodo convallis ipsum ac ultricies. Proin vel efficitur metus, vel mattis magna. Vestibulum commodo elit eget tristique accumsan. Nunc in dui nisi. Donec viverra sem lorem, vel euismod ante sollicitudin id. Etiam vitae tincidunt velit. Integer molestie augue sit amet fermentum pharetra. Nam ornare cursus eros, quis luctus tortor cursus pretium.</TabPanel>
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

