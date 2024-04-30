import React from "react"
import my_button from "../components/my_button"
import { useState } from 'react'
import '../components/comp.css'
import Users_table from "../components/users_table";
import { Link } from "react-router-dom";
const Lab6 = () => {
    return (
        <div className="LabPage">
            
            <div className="LabContent">
            <h1>Лабораторная 6</h1>
            <Users_table></Users_table>
                
            </div>
        </div>
    )
}
export default Lab6