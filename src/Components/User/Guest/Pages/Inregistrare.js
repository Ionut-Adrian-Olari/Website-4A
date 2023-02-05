import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';


const theme = createTheme();

export default function SignUp() {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      Username: data.get('Username'),
      password: data.get('password'),
      confpassword: data.get('confpassword'),
      localUserRol: data.get('localUserRol'),
    });
     const data3 = {
      email: data.get("email").toString(),
      Username: data.get('Username').toString(),
      password: data.get('password').toString(),
      confpassword: data.get("confpassword").toString(),
      localUserRol: data.get("localUserRol").toString(),
    };
    console.log(data3);
    let token;
    const result2 = axios.post("http://localhost:8080/security/register",data3).then((response) => {console.log(response);});

    
  };
  
  let navigateLog = useNavigate();
  const handleLog = () => {
      let path1 = "/Start";
      
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
          Inregistreaza-te
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="Username"
                  required
                  fullWidth
                  id="Username"
                  label="Username"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="localUserRol"
                  label="User Rol"
                  name="localUserRol"
                  autoComplete="family-name"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="password"
                  fullWidth
                  name="password"
                  label="Password"
                  id="password"
                  autoComplete="new-password"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  type="password"
                  fullWidth
                  name="confpassword"
                  label="Confirm Password"
                  id="confpassword"
                  autoComplete="new-password"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              onClick={handleLog}
            >
              Inregistreaza-te
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href='#'variant="body2">
                  <Button>
                      Ai cont? Autentificate
                  </Button>
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