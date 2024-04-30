import React from "react"
import my_button from "../components/my_button"
import { useState } from 'react'
import '../components/comp.css'
import { Typography } from '@mui/material'

const Lab3 = () => {
    return (
        <div className="LabPage">
            
            <div className="LabContent">
            <h1>Лабораторная 3</h1>
                    
                    <Typography fontSize={36} fontFamily={"sans-serif"}>
                        Вывод лабораторных работ и компоненты
                    </Typography>
                
            </div>
        </div>
    )
}
export default Lab3