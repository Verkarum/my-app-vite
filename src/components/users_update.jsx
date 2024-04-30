import React, { useCallback, useEffect, useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import {IconButton, Button, TextField } from '@mui/material';
import axios from 'axios';
import { useParams, Link as RouterLink} from 'react-router-dom';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import '../components/comp.css'

const validationSchema = yup.object({
    username: yup
        .string('Введите Логин')
        .required('Необходимо Логин'),
    email: yup
        .string('Введите E-mail')
        .email('Введите правильный E-mail')
        .required('Необходимо ввести E-mail'),
    password: yup
        .string('Введите пароль')
        .min(3, 'Пароль должен быть минимум 3 символа в длину'),
});

const Users_update = () => {
    const { id } = useParams();
    const [data, setData] = useState({
        id: id,
        username: '',
        email: '',
        password: '',
    });
    useEffect(() => {

        axios
            .get('http://localhost:3000/users/' + id)
            .then((responce) => {
                setData(responce.data);
            })

            .catch((error) => {
                console.log(error);
            });


    }, [])

    const formSubmit = useCallback((form_value) => {

        axios
            .put('http://localhost:3000/users/' + id, JSON.stringify(form_value))
            .then(() => {
                alert("Данные обновлены");

            })

            .catch((error) => {
                console.log(error);
            });
    }, []);


    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            username: data.username,
            email: data.email,
            password: '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            if (values.password == '') values.password = data.password;
            formSubmit(values);
            formik.resetForm();
        },
    });

    return (
        <div>
            
            <form onSubmit={formik.handleSubmit} enableReinitialize>
                <TextField
                    fullWidth
                    InputProps={{
                        readOnly: true,
                    }}
                    id="id"
                    name="id"
                    label="ID"
                    value={data.id}
                />
                <TextField
                    fullWidth
                    id="username"
                    name="username"
                    label="Логин"
                    value={formik.values.username}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.username && Boolean(formik.errors.username)}
                    helperText={formik.touched.username && formik.errors.username}
                />
                <TextField
                    fullWidth
                    id="email"
                    name="email"
                    label="Email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                />
                <TextField
                    fullWidth
                    id="password"
                    name="password"
                    label="Пароль"
                    type="password"
                    value={formik.values.password}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                />
                <Button color="primary" variant="contained" type="submit" size='small'>
                    Сохранить
                </Button>
                <Button style={{color:"white"}} variant="contained" size='small' component={RouterLink} to={`/lab6`} sx={{'&.MuiButton-root:hover':{bgcolor: 'purple'}, bgcolor: "red"}}>
                   <ArrowBackIosIcon/>Назад
                </Button>
            </form>
        </div>
    );
};
export default Users_update

