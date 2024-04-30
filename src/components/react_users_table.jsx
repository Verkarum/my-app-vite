import * as React from 'react';
import Box from '@mui/material/Box';
import { DataGrid } from '@mui/x-data-grid';
import axios from 'axios';
import '../components/comp.css'

export default function React_users_table() {
  const [rows, setRows] = React.useState([]);

  React.useEffect(() => {
    axios
      .get('http://localhost:3000/users/')
      .then((responce) => {
        setRows(responce.data);
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);
  
const columns = [
  { field: 'id', headerName: 'ID', width: 80 },
  {
    field: 'username',
    headerName: 'Логин',
    width: 150,
    editable: true,
  },
  {
    field: 'email',
    headerName: 'E-mail',
    width: 150,
    editable: true,
  },
  {
    field: 'password',
    headerName: 'Пароль',
    width: 180,
    editable: true,
  },
];

  return (
    <Box sx={{ height: "auto", width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        pageSizeOptions={[4]}
        disableRowSelectionOnClick
        initialState={{
          pagination: {
            paginationModel: {
              pageSize: 6,
            },
          },
        }}
      />
    </Box>
  );
}