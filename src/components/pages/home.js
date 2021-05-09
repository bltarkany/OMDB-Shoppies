import React, { useState } from 'react';
import Navbar from '../navbar';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import API from '../../utils/api';
import Progress from '../progress';
import Movie from '../card';
import Nomination from '../nomination';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  rootTwo: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  title: {
    color: '#e32402',
  },
  marFix: {
      marginTop: '24px'
  }
}));

export default function Home() {
  const classes = useStyles();
  const [search, setSearch] = useState('');
  const [searching, setSearching] = useState(false);
  //   const [movie, setMovie] = useState({});
  const [result, setResult] = useState([]);
  const [picture, setPicture] = useState([]);
  const [score, setScore] = useState([]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSearching(true);
    const data = await API.searchMovie(search);
    console.log(data.data.Search);
    setResult(data.data.Search);
    setSearching(false);

    document.getElementById('outlined-full-width').value = '';
  };

  const handleClick = (id, category) => {
    console.log(id, category);
    let movie = result.filter((x) => x.imdbID === id);
    console.log(movie);
    switch (category) {
      case 'picture':
        setPicture([movie[0], ...picture]);
        break;
      case 'score':
        setScore([movie[0], ...score]);
        break;
      default:
        break;
    }
  };

  const handleDelete = (id, category) => {
    console.log(id, category);
    let filtered;
    switch (category) {
      case 'picture':
        filtered = picture.filter((x) => x.imdbID !== id);
        setPicture(filtered);
        break;
      case 'score':
        filtered = score.filter((x) => x.imdbID !== id);
        setScore(filtered);
        break;

      default:
        break;
    }
  };

  const handleClear = (e) => {
    e.preventDefault();
    setResult([]);
  };

  String.prototype.capitalize = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
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
          {!result.length ? (
            <h3>No current results.</h3>
          ) : searching ? (
            <Progress />
          ) : (
            <Grid container spacing={2} justify='center'>
              <Grid container spacing={2} justify='center' className={classes.marFix}>
                {/* <Grid item xs={12} justify='center'> */}
                  <Button
                    variant='contained'
                    color='secondary'
                    onClick={handleClear}>
                    Clear
                  </Button>
                {/* </Grid> */}
              </Grid>
              {result.map((res) => (
                <Grid item xs={12} sm={6}>
                  <Movie
                    key={res.imdbID}
                    id={res.imdbID}
                    year={res.Year}
                    type={res.Type.capitalize()}
                    title={res.Title}
                    handleClick={handleClick}
                  />
                </Grid>
              ))}
            </Grid>
          )}
        </Grid>
      </Grid>

      <Grid container spacing={8} justify='center'>
        <Grid item xs={10} md={8}>
          <br />
          <br />
          <Typography
            variant='h4'
            component='h2'
            gutterBottom
            className={classes.title}>
            And the award goes too...
          </Typography>
          <Grid container spacing={8}>
            <Grid item xs={12} sm={6}>
              <Nomination
                results={picture}
                handleDelete={handleDelete}
                category='picture'
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <Nomination
                results={score}
                handleDelete={handleDelete}
                category='score'
              />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
