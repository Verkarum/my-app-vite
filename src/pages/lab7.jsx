import React from "react"
import my_button from "../components/my_button"
import { useState } from 'react'
import '../components/comp.css'
import { Typography } from '@mui/material'

const Lab7 = () => {
    return (
        <div className="LabPage">
            
            <div className="LabContent">
            <h1>Лабораторная 7</h1>
                <Typography fontSize={36} fontFamily={"sans-serif"}>
                        Выдвигающееся меню, Оформление Header и Footer
                    </Typography>
                
            </div>
        </div>
    )
}
export default Lab7