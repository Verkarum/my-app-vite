import React, { useCallback } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { Button, TextField } from '@mui/material';
import axios from 'axios';




const validationSchema = yup.object({
  username: yup
    .string('Введите Логин')
    .required('Необходимо Логин'),
  email: yup
    .string('Введите E-mail')
    .email('Неверный E-mail')
    .required('Необходимо ввести E-mail'),
  password: yup
    .string('Введите пароль')
    .min(5, 'Минимальная длинна пароля 5 символов')
    .required('Необходимо ввести пароль'),
});

const SignForms = () => {
  const formSubmit = useCallback((form_value) => {

    axios
      .post('http://localhost:3000/users/', JSON.stringify(form_value))
      .then((response) => {
        console.log(response.data);
        alert("Новый пользователь добавлен");
      })

      .catch((error) => {
        console.log(error);
      });
  }, []);


  const formik = useFormik({
    initialValues: {
      username: '',
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      formSubmit(values);
      formik.resetForm();
    },
  });

  return (
    <div>
      <form onSubmit={formik.handleSubmit} onReset={formik.handleReset}>
        <TextField
          fullWidth
          id="username"
          name="username"
          label="Логин"
          value={formik.values.username}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          error={formik.touched.username && Boolean(formik.errors.userame)}
          helperText={formik.touched.username && formik.errors.userame}
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
          Отправить
        </Button>
        <Button color="primary" variant="contained" type="reset" size='small'>
          Сбросить
        </Button>
      </form>
    </div>
  );
};
export default SignForms
