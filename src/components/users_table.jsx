import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip } from '@mui/material';
import axios from 'axios';
import '../components/comp.css'
import { useState, useEffect } from 'react';
import { IconButton } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontSize: 15,
    },

  });

const Users_table = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios
            .get('http://localhost:3000/users/')
            .then((responce) => {
                setData(responce.data);
            })

            .catch((error) => {
                console.log(error);
            });
    }, []);

    const delete_post = async (id) => {
        if (window.confirm('Вы уверены, что хотите удалить этого пользователя??')) {
            await axios
                .delete(`http://localhost:3000/users/${id}`)
                .then((responce) => {
                    setData(responce.data);
                    setData(data.filter((data) => data.id !== id));
                })

                .catch((error) => {
                    console.log(error);
                });
            alert("Пользователь удален");

        }
        else {
            return
        };
    };
    return (
        <div><ThemeProvider theme={theme}>
                    <TableContainer style={{ maxHeight: 500 }}>
                        <Table stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <TableCell>id</TableCell>
                                    <TableCell align="right">Логин</TableCell>
                                    <TableCell align="right">E-mail</TableCell>
                                    <TableCell align="right">Пароль</TableCell>
                                    <TableCell align="right"></TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody style={{ maxHeight: '200px' }}>
                                {data.map((user) => (
                                    <TableRow
                                        key={user.id}
                                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell component="th" scope="row">
                                            {user.id}
                                        </TableCell>
                                        <TableCell align="right">{user.username}</TableCell>
                                        <TableCell align="right">{user.email}</TableCell>
                                        <TableCell align="right">{user.password}</TableCell>
                                        <TableCell align="right"><Tooltip title="Изменить"><IconButton component={RouterLink} to={`/users_update/${user.id}`}><EditIcon /></IconButton></Tooltip></TableCell>
                                        <TableCell align="right"><Tooltip title="Удалить"><IconButton color='warning' variant='contained' onClick={() => delete_post(user.id)}><DeleteIcon /></IconButton></Tooltip></TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                    </ThemeProvider>
        </div>
    );
}

export default Users_table;