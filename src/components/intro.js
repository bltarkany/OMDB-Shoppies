import React from 'react';
import { makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
    },
    intro: {
      textAlign: 'center',
    },
    title: {
        color: '#e32402'
    }
  }));

export default function Intro() {
    const classes = useStyles();
    return (
        <section className={classes.intro}>
            <h2 className={classes.title}>Lets Roll out the Red Carpet!</h2>
            <p>The Shoppies, where you decide the outcome of the awards show.</p>
        </section>
    )

}