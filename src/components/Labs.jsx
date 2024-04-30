import './comp.css'
import MenuList from '@mui/material/MenuList';
import MenuItem from '@mui/material/MenuItem';
import ListItemText from '@mui/material/ListItemText';
import { Link  } from 'react-router-dom'
import * as React from 'react';
import CssBaseline from "@mui/material/CssBaseline";
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme({
    typography: {
      fontSize: 28,
    },
    components: {
        MuiDrawer: {
          styleOverrides: {
            paper: {
              backgroundColor: 'rgb(89 34 125 / 88%)',
            }
          }
        }
      }
  });

export default function LabList() {
    const [open, setOpen] = React.useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const DrawerList = (
        
        <Box className="MenuDraw" sx={{ width: 300}} role="presentation" onClick={toggleDrawer(false)}>
            <MenuList dense className="LabMenu">
                <Link to="/lab1">
                    <MenuItem><ListItemText inset>Лабораторная 1</ListItemText></MenuItem>
                </Link>
                <Link to="/lab2">
                    <MenuItem><ListItemText inset>Лабораторная 2</ListItemText></MenuItem>
                </Link>
                <Link to="/lab3">
                    <MenuItem><ListItemText inset>Лабораторная 3</ListItemText></MenuItem>
                </Link>
                <Link to="/lab4">
                    <MenuItem><ListItemText inset>Лабораторная 4</ListItemText></MenuItem>
                </Link>
                <Link to="/lab5">
                    <MenuItem><ListItemText inset>Лабораторная 5</ListItemText></MenuItem>
                </Link>
                <Link to="/lab6">
                    <MenuItem><ListItemText inset>Лабораторная 6</ListItemText></MenuItem>
                </Link>
                <Link to="/lab7">
                    <MenuItem><ListItemText inset>Лабораторная 7</ListItemText></MenuItem>
                </Link>
                <Link to="/lab8">
                    <MenuItem><ListItemText inset>Лабораторная 8</ListItemText></MenuItem>
                </Link>
                <Link to="/lab9">
                    <MenuItem><ListItemText inset>Лабораторная 9</ListItemText></MenuItem>
                </Link>
            </MenuList>
        </Box>
        
    );

    return (
        <div>
            <IconButton onClick={toggleDrawer(true)}><MenuIcon /></IconButton>
            <ThemeProvider theme={theme}>
            <Drawer open={open} onClose={toggleDrawer(false)}>
                {DrawerList}
            </Drawer>
            </ThemeProvider>
        </div>

    );
}

