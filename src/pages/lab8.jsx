import React from "react"
import my_button from "../components/my_button"
import { useState } from 'react'
import '../components/comp.css'
import React_users_table from "../components/react_users_table";

const Lab8 = () => {
    return (
        <div className="LabPage">
            
            <div className="LabContent">
            <h1>Лабораторная 8</h1>
            <React_users_table></React_users_table>
                
            </div>
        </div>
    )
}
export default Lab8