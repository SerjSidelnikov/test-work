import React from 'react';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'grid',
    gridTemplateColumns: '1fr 0.5fr 0.5fr',
    gridGap: 10,
    padding: theme.spacing(2),
    marginBottom: theme.spacing(2),
  },
}));

const Filter = () => {
  const classes = useStyles();

  return (
    <Paper className={classes.root} elevation={1}>
      <TextField label="Поиск по производителю" variant="outlined" />
      <TextField label="Мин. цена" variant="outlined" type="number" />
      <TextField label="Макс. цена" variant="outlined" type="number" />
    </Paper>
  );
};

export default Filter;
