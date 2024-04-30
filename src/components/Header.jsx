import React, { useContext,useState } from "react"
import './comp.css'
import { AppBar, Stack, Toolbar, Typography } from '@mui/material'
import Switch from '@mui/material/Switch';
import { ThemeContext } from "../providers/ThemeProvider";
import Labs from './Labs'
import ListItem from '@mui/material/ListItem';
const Header = () => {
    const [theme, setTheme] = useContext(ThemeContext);
    
  const ThemeSwitch = () => {
    setTheme(theme === "light" ? "dark" : "light");

  };

    return (
        <div className="header">
             <AppBar position="static" sx={{ bgcolor: "rgba(139, 64, 205, 0.348)" }}>
                <Toolbar>
                    <Labs/>
                    <Typography fontSize={36} flexGrow={2} fontFamily={"Cambria Math"}>
                        Заголовок какой-то
                    </Typography>
                    <Stack direction="row" spacing={1} alignItems="center">
                    <Typography>Ночь</Typography>
                    <Switch color="secondary" onClick={() => ThemeSwitch()}/>
                    <Typography>День</Typography>
                    </Stack>
                </Toolbar>
                
            </AppBar>
        </div>

    )
}

export default Header