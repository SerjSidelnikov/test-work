import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import Catalog from './Catalog';
import Item from './Item';

const useStyles = makeStyles(theme => ({
  header: {
    marginBottom: theme.spacing(2),
  },
}));

function App() {
  const classes = useStyles();

  return (
    <>
      <AppBar position="static" className={classes.header}>
        <Toolbar>
          <Typography variant="h3">Catalog</Typography>
        </Toolbar>
      </AppBar>

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
    </>
  );
}

export default App;
