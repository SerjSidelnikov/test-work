import React from 'react';
import { useParams, useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import data from '../data';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '300px 1fr',
    gridGap: 20,
    padding: theme.spacing(3),
  },
  button: {
    marginBottom: theme.spacing(2),
  },
  img: {
    display: 'block',
    objectFit: 'contain',
    objectPosition: 'center',
  },
  title: {
    marginBottom: theme.spacing(3),
  },
}));

const Item = () => {
  const classes = useStyles();
  const { id } = useParams();
  const history = useHistory();

  const item = data.find(el => el.id === id);

  const handleBack = () => history.goBack();

  return (
    <>
      <Button className={classes.button} variant="contained" color="secondary" onClick={handleBack}>
        Назад
      </Button>

      <Paper elevation={1} className={classes.root}>
        <img className={classes.img} src={item.img} alt={item.title} />

        <div>
          <Typography variant="h5" component="h1" className={classes.title}>
            {item.title}
          </Typography>

          <Typography variant="body1" component="p">
            <b>Производитель</b>: {item.vendor}
          </Typography>
          <Typography variant="body1" component="p">
            <b>Упаковка</b>: {item.pack} шт.
          </Typography>
          <Typography variant="body1" component="p">
            <b>Цена</b>: {item.price} руб.
          </Typography>
        </div>
      </Paper>
    </>
  );
};

export default Item;
