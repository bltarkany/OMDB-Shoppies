import React, { useState } from 'react';
import Navbar from '../navbar';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import API from '../../utils/api';
import Progress from '../progress';
import Movie from '../card';

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
  const [result, setResult] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setResult(true);
    setSearching(true);
    console.log(search);
    const data = await API.searchMovie(search);
    console.log(data);
    setMovie(data.data);
    setSearching(false);

    document.getElementById('outlined-full-width').value = '';
  };

  return (
    <Grid container spacing={2}>
      <Navbar />
      <Grid container spacing={3} justify='center'>
        <Grid item xs={10} md={6}>
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
              onChange={(e) => setSearch(e.target.value)}
            />
          </form>
        </Grid>
      </Grid>
      <Grid container spacing={8} justify='center'>
        <Grid item xs={10} md={8}>
          {!result ? (
            <h3>No current results.</h3>
          ) : searching ? (
            <Progress />
          ) : (
            <Movie
              year={movie.Year}
              rated={movie.Rated}
              title={movie.Title}
              actors={movie.Actors}
              plot={movie.Plot}
            />
          )}
        </Grid>
      </Grid>
      
      <Grid container spacing={8} justify='center'>
        <Grid item xs={10} md={8}>
            <br />
          <Typography variant='h4' component='h2' gutterBottom>
            And the award goes too...
          </Typography>
          
        </Grid>
      </Grid>
    </Grid>
  );
}
