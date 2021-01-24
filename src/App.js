import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import CircularProgress from '@material-ui/core/CircularProgress';
import { makeStyles } from '@material-ui/core/styles';

import Catalog from './components/Catalog';
import Item from './components/Item';
import { fetchData, getIsLoading } from './store/productsSlice';

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: theme.spacing(2),
  },
  progress: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

function App() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const isLoading = useSelector(getIsLoading);

  React.useEffect(() => {
    dispatch(fetchData());
  }, [dispatch]);

  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h3">Catalog</Typography>
        </Toolbar>
      </AppBar>

      {isLoading ? (
        <div className={classes.progress}>
          <CircularProgress />
        </div>
      ) : (
        <Container maxWidth="md">
          <Switch>
            <Route path={['/', '/catalog']} exact>
              <Catalog />
            </Route>
            <Route path="/catalog/:id">
              <Item />
            </Route>
          </Switch>
        </Container>
      )}
    </>
  );
}

export default App;
