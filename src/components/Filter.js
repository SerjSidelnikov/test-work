import React from 'react';
import { useDispatch } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';

import useDebounce from '../utils/useDebounce';
import { setMinPrice, setVendor, setMaxPrice } from '../store/productsSlice';

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
  const dispatch = useDispatch();
  const [vendor, setVendorValue] = React.useState('');
  const [minPrice, setMinPriceValue] = React.useState('');
  const [maxPrice, setMaxPriceValue] = React.useState('');

  const handleChangeVendor = evt => {
    setVendorValue(evt.target.value);
  };

  const handleChangeMinPrice = evt => {
    setMinPriceValue(evt.target.value);
  };

  const handleChangeMaxPrice = evt => {
    setMaxPriceValue(evt.target.value);
  };

  const vendorValue = useDebounce(vendor, 500);
  const minPriceValue = useDebounce(minPrice, 500);
  const maxPriceValue = useDebounce(maxPrice, 500);

  React.useEffect(() => {
    dispatch(setVendor(vendorValue));
  }, [dispatch, vendorValue]);

  React.useEffect(() => {
    dispatch(setMinPrice(minPriceValue));
  }, [dispatch, minPriceValue]);

  React.useEffect(() => {
    dispatch(setMaxPrice(maxPriceValue));
  }, [dispatch, maxPriceValue]);

  return (
    <Paper className={classes.root} elevation={1}>
      <TextField
        name="vendor"
        label="Поиск по производителю"
        variant="outlined"
        value={vendor}
        onChange={handleChangeVendor}
      />
      <TextField
        name="minPrice"
        label="Мин. цена"
        variant="outlined"
        type="number"
        value={minPrice}
        onChange={handleChangeMinPrice}
      />
      <TextField
        name="maxPrice"
        label="Макс. цена"
        variant="outlined"
        type="number"
        value={maxPrice}
        onChange={handleChangeMaxPrice}
      />
    </Paper>
  );
};

export default Filter;
