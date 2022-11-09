import React, { useEffect, useState } from 'react';
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableContainer,
  TablePagination,
  TableRow,
  TableHead,
  Paper,
  IconButton,
} from '@mui/material';
import TablePaginationActions from '@mui/material/TablePagination/TablePaginationActions';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import useCustomers from '../../hooks/useCustomers';
import Customer from '../../interfaces/customer.interface';
import getCustomers from '../../services/api/getCustomers';
import deleteCustomer from '../../services/api/deleteCustomer';
import updateCustomer from '../../services/api/updateCustomer';
import checkAllFields from '../../utils/validations';
import ReadOnlyRow from './ReadOnlyRow';
import EditableRow from './EditableRow';
import {
  tableCellHeader, tableContainerStyle, tableRowStyle,
} from './style';

export default function CustomerTable(): JSX.Element {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(5);
  const [customers, setCustomers] = useCustomers();

  useEffect(() => {
    getCustomers().then((response) => {
      setCustomers(response);
    });
  }, []);

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

  const handleDeleteUser = async (id: string): Promise<void> => {
    const confirmDelete = window.confirm('Tem certeza que deseja deletar este usuário?');
    if (confirmDelete) {
      await deleteCustomer(id);
      getCustomers().then((response: Customer[]) => {
        setCustomers(response);
      });
    }
  };
  const [customerId, setCustomerId] = useState<string>('');
  const [isEditing, setIsEditing] = useState<boolean>(false);
  const [editedCustomer, setEditedCustomer] = useState<Customer>({
    id: '',
    name: '',
    email: '',
    address: '',
    birthDate: null,
  });
  const handleActiveEditUser = (id: string): void => {
    setIsEditing(true);
    setCustomerId(id);
  };

  const handleSendEditUser = async (): Promise<void> => {
    const isValid = checkAllFields(editedCustomer);
    if (isValid) {
      await updateCustomer(editedCustomer, editedCustomer.id);
      getCustomers().then((response: Customer[]) => {
        setCustomers(response);
      });
      setIsEditing(false);
      setCustomerId('');
    }
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
        {
              customers.length > 0 ? (
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
                        customerId === customer.id ? (
                          <EditableRow
                            customer={customer}
                            setEditedCustomer={setEditedCustomer}
                          />
                        ) : (
                          <ReadOnlyRow customer={customer} />
                        )
                      }
                      <TableCell style={{ width: 50 }}>
                        <IconButton onClick={() => handleDeleteUser(customer.id)}>
                          <DeleteIcon />
                        </IconButton>
                      </TableCell>
                      <TableCell style={{ width: 50 }}>
                        {
                          isEditing && customerId === customer.id ? (
                            <IconButton
                              disabled={
                              !checkAllFields(editedCustomer)
                            }
                              onClick={handleSendEditUser}
                            >
                              <SendIcon />
                            </IconButton>
                          ) : (
                            <IconButton onClick={() => handleActiveEditUser(customer.id)}>
                              <EditIcon />
                            </IconButton>
                          )
                        }
                      </TableCell>
                    </TableRow>
                  ))}
                  {emptyRows > 0 && (
                  <TableRow style={{ height: 53 * emptyRows }}>
                    <TableCell colSpan={6} />
                  </TableRow>
                  )}
                </TableBody>
              ) : (
                <TableBody>
                  <TableRow>
                    <TableCell colSpan={6} align="center">
                      Nenhum cliente cadastrado
                    </TableCell>
                  </TableRow>
                </TableBody>
              )
            }
        <TableFooter>
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
              labelRowsPerPage="Linhas por página:"
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
