import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import ListItemText from '@material-ui/core/ListItemText';
import IconButton from '@material-ui/core/IconButton';
import MovieFilterRoundedIcon from '@material-ui/icons/MovieFilterRounded';
import DeleteForeverRoundedIcon from '@material-ui/icons/DeleteForeverRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  paperWidth: {
      width: '100%',
      padding: '20px'
  }
}));


export default function Nomination({results, handleDelete, category}) {
  const classes = useStyles();
  const [dense, setDense] = React.useState(false);
  const [secondary, setSecondary] = React.useState(false);

  return (
    <div className={classes.root}>
      <Paper elevation={3} className={classes.paperWidth}>
      <Typography variant='h6' component='h4' gutterBottom>
            Nominees for best {category}...
          </Typography>
        <List dense={dense}>
          {results.map((nom) =>(
            <ListItem key={nom.imdbID}>
              <ListItemIcon>
                <MovieFilterRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary={nom.Title}
                secondary={secondary ? 'Secondary text' : null}
              />
              <ListItemSecondaryAction>
                <IconButton edge='end' aria-label='delete' id={nom.imdbID} onClick={(e)=>{handleDelete(nom.imdbID, category)}}>
                  <DeleteForeverRoundedIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
          ))}
        </List>
      </Paper>
    </div>
  );
}
