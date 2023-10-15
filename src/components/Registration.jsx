import  { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { TextField, Button, Grid, Paper, Typography } from '@mui/material';
// import { db } from '../Firebase';
import { db } from '../firebase';
import { collection, addDoc} from 'firebase/firestore';

const Registration = () => {
    const navigate = useNavigate();
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

const handlesubmit = (e) => { 
  e.preventDefault();
  addDoc(collection(db, "admin"),  {
    Email: email,
    Name: name,
    Password: password,
    Phone: phone,
  }).then((docRef) => {
    console.log("Document written with ID: ", docRef.id);
  })
  .catch((error) => {
    console.error("Error adding document-----------------: ", error);
  });
};

  return (
    <div style={{ 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center', 
        height: '100vh', // Set the height of the container to 100% of the viewport height
        backgroundColor: '#f0f0f0', // Set a background color
      }}>
        <Paper elevation={3} style={{ padding: 20, width: '400px' }}>
          <Typography variant="h5" align="center">
            Register as Admin
          </Typography>
          <form>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  fullWidth
                  label="Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                />
              </Grid>
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
                  label="Phone"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
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
                <TextField
                  fullWidth
                  label="Confirm Password"
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  required
                />
              </Grid>
            </Grid>
            <Grid item xs={6}>
              <Button type="submit" fullWidth variant="contained" color="primary" style={{ marginTop: 20 }} onClick={handlesubmit}>
                Register
              </Button>
            </Grid>
            <Grid item xs={6}>
              <Button fullWidth variant="contained" color="secondary" style={{ marginTop: 20 }} onClick={() =>{
                 navigate('/admin-page')
              }}>
                Back
              </Button>
            </Grid>

          </form>
        </Paper>
      </div>
  );
};

export default Registration;
