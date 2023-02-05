import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const theme = createTheme();

 function Autentificare() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });

    const data2 = {
       email: data.get('email').toString(),
       password: data.get('password').toString(),
      
    }
   
    const dAutor = {
        
      id: 20,
name: "string",
firstName: "string",
nationality: "string",
position: "string",
birthDate: "2023-01-26T11:59:44.978Z",
height: 0,
description: "string"
  };
  //   const result2 = axios.post("http://localhost:8080/security/login",data2).then((response) =>  {console.log(response)})
  //   const token = localStorage.getItem("token");
  //   axios.interceptors.response.use(response => {
  //     return response;
  //  }, error => {
  //    if (error.response.status === 401) {
  //     //place your reentry code
  //    }
  //    return error;
  //  });
   };
  // const getresult = axios.get("http://localhost:8080/player/id/6").then((response) => {console.log(response);});


    // const result2 = axios.post("http://localhost:8080/security/login",dAutor2).then((response) => { token = response.data.token; const result1=  axios.post("http://localhost:8080/player",dAutor,{ headers: {
    //         'Authorization': `Bearer ${token}` 
    //       }}).then((response) => {console.log(response);});});

          //  const getresult = axios.get("http://localhost:8080/player/id/6").then((response) => {console.log(response);});


  let navigateLog = useNavigate();
          const handleLog = () => {
              let path1 = `/PagesAdmin/Prezentare`;
              
                  navigateLog(path1);
              
          };
  return (
    <>
    
        <ThemeProvider theme={theme}> 
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          
          <Typography component="h1" variant="h5">
            Autentificare
          </Typography>
          <Box  onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLog}
            >
              Autentificare
            </Button>
            <Grid container component="main" maxWidth="xs" >
              <Grid item>
              <Link href="#" variant="body2">
                 <Button>Ai uitat parola?</Button>
                </Link>
              </Grid>
              <Grid item>
              <Link href="#" variant="body2">
                  <Button> {"Nu ai cont? Inregistreaza-te"}</Button>
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container> 
     </ThemeProvider>
    
    </>
  );
}
export default Autentificare;