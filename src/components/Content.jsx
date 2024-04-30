import React from "react"
import './comp.css'
import {  Routes, Route  } from 'react-router-dom'
import Lab1 from '../pages/lab1'
import Lab2 from '../pages/lab2'
import Lab3 from '../pages/lab3'
import Lab4 from '../pages/lab4'
import Lab5 from '../pages/lab5'
import Lab6 from '../pages/lab6'
import Lab7 from '../pages/lab7'
import Lab8 from '../pages/lab8'
import Lab9 from '../pages/lab9'
import Users_update from "./users_update";


const Content = () => {
    return (
        <div className="content">
            {
                <Routes>
                    
                    <Route path='/lab1' element={<Lab1 />} />
                    <Route path='/lab2' element={<Lab2 />} />
                    <Route path='/lab3' element={<Lab3 />} />
                    <Route path='/lab4' element={<Lab4 />} />
                    <Route path='/lab5' element={<Lab5 />} />
                    <Route path='/lab6' element={<Lab6 />} />
                    <Route path='/lab7' element={<Lab7 />} />
                    <Route path='/lab8' element={<Lab8 />} />
                    <Route path='/lab9' element={<Lab9 />} />
                    <Route exact path='/f1' render={() => {window.location.href="f1.html"}} />
                    
                </Routes>
}
        </div>
    )
}
export default Content