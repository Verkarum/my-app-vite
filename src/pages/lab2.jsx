import React from "react"
import my_button from "../components/my_button"
import '../components/comp.css'
import { useState } from 'react'

const Lab2 = () => {
    const [count, setCount] = useState(0)
    return (
        <div className="LabPage">
            <div className="LabContent">
            <h1>Лабораторная 2</h1>
                <my_button onClick={() => setCount((count) => count + 1)}>
                    Счетчик: {count}
                </my_button>
                <my_button onClick={() => alert("Hello world")}>
                    Вывод сообщения
                </my_button>
            </div>
        </div>
    )
}
export default Lab2