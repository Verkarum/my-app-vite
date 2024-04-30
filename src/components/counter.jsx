import { Button } from '@mui/material'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset } from '../Redux/actions';


export default function Counter() {
    const dispatch = useDispatch();
    const count = useSelector((state) => state.count)
    return (
        <div>
            <p>{count}</p>
            <Button variant='contained' onClick={() => dispatch(increment())}>Плюс</Button>
            <Button variant='contained' sx={{bgcolor: "green"}} onClick={() => dispatch(decrement())}>Минус</Button>
            <Button variant='contained'  sx={{bgcolor: "red"}} onClick={() => dispatch(reset())}>Сброс</Button>
        </div>
    )
}
