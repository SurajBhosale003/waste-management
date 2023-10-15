import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';

const Login = () => {
    // const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here, e.g., send data to the server
    const loginInfo = { email, password };
    console.log('Login Info:', loginInfo);
  };

  return (
    <div style={{ 
      display: 'flex', 
      alignItems: 'center', 
      justifyContent: 'center', 
      height: '100vh',
      backgroundColor: '#f0f0f0',
    }}>
      <Paper elevation={3} style={{ padding: 20, width: '300px' }}>
        <Typography variant="h5" align="center">
          Login
        </Typography>
        <form onSubmit={handleSubmit}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
            </Grid>
            <Grid item xs={12}>
              <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }}>
                Login
              </Button>
            </Grid>
            {/* <Grid item xs={6}>
              <Button fullWidth variant="contained" color="secondary" style={{ marginTop: 20 }} onClick={() =>{
                 navigate('/register')
              }}>
                Sign Up
              </Button>
            </Grid> */}
          </Grid>
        </form>
      </Paper>
    </div>
  );
};

export default Login;
