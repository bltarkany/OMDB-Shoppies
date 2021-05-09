import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    minWidth: 110,
    marginTop: '24px'
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  
});

export default function Movie({title, year, type, id, handleClick }) {
  const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;

  return (
    <Card className={classes.root} variant="outlined">
      <CardContent>
        <Typography className={classes.title} color="textSecondary" gutterBottom>
          {type}  {bull}  {year}
        </Typography>
        <Typography variant="subtitle2" component="h2">
          {title}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small" value={id} onClick={e => {handleClick(id, 'picture')}}>Best Picture</Button>
        <Button size="small" value={id} onClick={e => {handleClick(id, 'score')}}>Best Original Score</Button>   
      </CardActions>
    </Card>
  );
}