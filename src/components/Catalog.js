import React from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Paper from '@material-ui/core/Paper';
import TableContainer from '@material-ui/core/TableContainer';
import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import { makeStyles } from '@material-ui/core/styles';

import Filter from './Filter';
import { filteredProducts } from '../store/productsSlice';

const tableHead = ['Фото', 'Наименование', 'Производитель', 'Упаковка', 'Цена'];

const useStyles = makeStyles(() => ({
  table: {
    maxHeight: 500,
  },
  row: {
    cursor: 'pointer',
  },
  img: {
    display: 'block',
    width: 100,
    height: 100,
  },
}));

const Catalog = () => {
  const classes = useStyles();
  const history = useHistory();
  const products = useSelector(filteredProducts);

  const handleClickItem = id => () => {
    history.push(`/catalog/${id}`);
  };

  return (
    <div>
      <Filter />

      <Paper elevation={1}>
        <TableContainer className={classes.table}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {tableHead.map(item => (
                  <TableCell key={item}>{item}</TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {products.map(item => (
                <TableRow
                  hover
                  key={item.id}
                  className={classes.row}
                  onClick={handleClickItem(item.id)}
                >
                  <TableCell>
                    <img className={classes.img} src={item.img} alt={item.title} />
                  </TableCell>
                  <TableCell>{item.title}</TableCell>
                  <TableCell>{item.vendor}</TableCell>
                  <TableCell>{item.pack}</TableCell>
                  <TableCell>{item.price}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
};

export default Catalog;
