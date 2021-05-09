import React from 'react';
import { makeStyles } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  //   root: {
  //     '& .MuiTextField-root': {
  //       margin: theme.spacing(1),
  //       width: '30ch',
  //     },
  //   },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: '25ch',
  },
}));

export default function Input({ children, onSubmit }) {
  const classes = useStyles();
  return (
    <form className={classes.root} noValidate autoComplete='false' onSubmit={onSubmit}>
     {children}
    </form>
  );
}
