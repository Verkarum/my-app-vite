import React from "react"
import my_button from "../components/my_button"
import { useState } from 'react'
import '../components/comp.css'
import Counter from "../components/counter"

const Lab4 = () => {
    return (
        <div className="LabPage">
            
            <div className="LabContent">
            <h1>Лабораторная 4</h1>
            <Counter></Counter>
                
            </div>
        </div>
    )
}
export default Lab4