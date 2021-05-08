// navbar creation
import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  logo: {
    textAlign: 'center',
  },
}));

export default function Navbar() {
  const classes = useStyles();
  return (
    <header className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={12} className={classes.logo}>
          <h1>Welcome to the Shoppies</h1>
        </Grid>
      </Grid>
    </header>
  );
}
