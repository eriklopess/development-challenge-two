import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableFooter from '@mui/material/TableFooter';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import TableHead from '@mui/material/TableHead';
import IconButton from '@mui/material/IconButton';
import useCustomers from '../../hooks/useCustomers';
import Customer from '../../interfaces/customer.interface';
import {
  tableCellHeader, tableContainerStyle, tableFooterStyle, tableRowStyle,
} from './style';

export default function CustomerTable(): JSX.Element {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [customers] = useCustomers();

  const emptyRows = page > 0 ? Math.max(0, (1 + page) * rowsPerPage - customers.length) : 0;
  const handleChangePage = (
    event: React.MouseEvent<HTMLButtonElement> | null,
    newPage: number,
  ): void => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ): void => {
    setRowsPerPage(parseInt(event.target.value, 10));
    setPage(0);
  };

  const handleDeleteUser = (): void => {
  };

  const handleEditUser = (): void => {
  };

  return (
    <TableContainer
      component={Paper}
      sx={tableContainerStyle}
    >
      <Table sx={{ minWidth: 650 }} aria-label="customers table" size="small" stickyHeader>
        <TableHead>
          <TableRow>
            {['Nome', 'Email', 'Data de Nascimento', 'Endereço', 'Excluir', 'Editar'].map((header) => (
              <TableCell
                key={header}
                sx={tableCellHeader}
              >
                {header}
              </TableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? customers.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : customers
          ).map((customer: Customer) => (
            <TableRow
              key={customer.name}
              sx={tableRowStyle}
            >
              {
                Object.values(customer).map((value) => (
                  <TableCell key={value}>
                    {value}
                  </TableCell>
                ))
              }
              <TableCell style={{ width: 50 }}>
                <IconButton onClick={() => handleDeleteUser()}>
                  <DeleteIcon />
                </IconButton>
              </TableCell>
              <TableCell style={{ width: 50 }}>
                <IconButton onClick={() => handleEditUser()}>
                  <EditIcon />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
          {emptyRows > 0 && (
            <TableRow style={{ height: 53 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter sx={tableFooterStyle}>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, 50, { label: 'Todos', value: -1 }]}
              colSpan={3}
              count={customers.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
              }}
              labelRowsPerPage={
                window.innerWidth < 750
                  ? 'Linhas:'
                  : 'Linhas por página:'
              }
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  );
}
