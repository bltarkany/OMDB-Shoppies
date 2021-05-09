import React, { useState } from 'react';
import Navbar from '../navbar';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import API from '../../utils/api';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootTwo: {
    display: 'flex',
    flexWrap: 'wrap',
  },
}));

export default function Home() {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);
  const [movie, setMovie] = useState({});
  const [result, setResult] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(search);
    const data = await API.searchMovie(search);
    console.log(data);
    setMovie(data.data);

    document.getElementById('outlined-full-width').value = '';
  };

  return (
    <Grid container spacing={2}>
      <Navbar />
      {/* <Grid item xs={12}>
          <Intro />
        </Grid>   */}
      <Grid container spacing={3} justify='center'>
        <Grid item xs={6}>
          <form
            className={classes.rootTwo}
            noValidate
            autoComplete='true'
            onSubmit={handleSubmit}>
            <TextField
              required
              id='outlined-full-width'
              label='required'
              style={{ margin: 8 }}
              placeholder='Movie Title'
              fullWidth
              margin='normal'
              InputLabelProps={{
                shrink: true,
              }}
              variant='outlined'
              onChange={e => setSearch(e.target.value)}
            />
          </form>
        </Grid>
      </Grid>
      
    </Grid>
  );
}
