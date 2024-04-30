import React from "react"
import './comp.css'
import { Typography } from '@mui/material'
import MailIcon from '@mui/icons-material/Mail';
import PhoneIcon from '@mui/icons-material/Phone';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Footer = () => {
    return (
        <div className="footer">
            
            <Typography fontSize={24} fontFamily={"sans-serif"}>
            © Дорошенко Б.С. 2024
            </Typography>
            <div >
            <Container style={{disply:'flex', justifyContent:'right'}}>
                
                <Col >
                <Row>
            <Typography fontSize={18} fontFamily={"sans-serif"}>
                Контакты
            </Typography>
            </Row>
                
            <Row>
                <Typography fontSize={16} fontFamily={"sans-serif"}>
                <MailIcon/>plotvaqas@gmail.com
                </Typography>        
                </Row>
                <Row>
                <Typography fontSize={16} fontFamily={"sans-serif"}>
                <PhoneIcon/>8-961-984-80-49
                </Typography>
                </Row>
                </Col>        
                </Container>
                
                </div>
        </div>
    )
}
export default Footer