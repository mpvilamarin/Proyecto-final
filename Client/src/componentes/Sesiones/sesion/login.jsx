import React, { useState } from 'react';
import { validate } from './validate';
import { useSignIn } from 'react-auth-kit';
import { useFormik } from 'formik';
import { useNavigate } from 'react-router-dom';
import { Alert, Button, Form } from 'react-bootstrap'; // Importa los componentes necesarios de React-Bootstrap
import axios, { AxiosError } from 'axios';
import { Link } from 'react-router-dom';
import styles from './login.module.css';

const Login = () => {
  const navigate = useNavigate();
  const signIn = useSignIn();

  const [error, setError] = useState('');

  const onSubmit = async (values) => {
    try {
      const response = await axios.post(
        'http://localhost:3001/usuarios/login',
        values
      );

      signIn({
        token: response.data.token,
        expiresIn: 3600,
        tokenType: 'Bearer',
        authState: { email: values.email },
      });
      navigate('/');
    } catch (err) {
      if (err && err instanceof AxiosError) {
        setError(err.response?.data.message);
      } else if (err && err instanceof Error) {
        setError(err.message);
        console.log(`error : ${err}`);
      }
    }
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      contraseña: '',
    },
    onSubmit,
  });

  return (
    <div className={styles.container}>
      <div className={styles.formContainer}>
        <Form className={styles.form} onSubmit={formik.handleSubmit}>
          <h1 className={styles.title}>Inicia sesión</h1>
          <Form.Group controlId="email">
            <Form.Label>Email:</Form.Label>
            <Form.Control
              type="email"
              value={formik.values.email}
              name="email"
              onChange={formik.handleChange}
              placeholder="Email"
            />
          </Form.Group>
          <Form.Group controlId="contraseña">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              type="password"
              value={formik.values.contraseña}
              name="contraseña"
              onChange={formik.handleChange}
              placeholder="Password"
            />
          </Form.Group>
          {error && <Alert variant="danger">{error}</Alert>}
          <Link to="/registro" className={styles.link}>
            ¿No estás registrado?
          </Link>
          <Button type="submit" className={styles.sendButton}>
            Enviar
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;


        // const handleChange = (event) => {
        //     const { name, value } = event.target;
        //     const error = validate(name, value);
        //     setInput((prevInput) => ({
        //         ...prevInput,
        //         [name]: value,
        //     }));
        //     setErrors((prevErrors) => ({
            //         ...prevErrors,
            //         [name]: error,
        //     }));
        // };
            // const [input, setInput] = useState({
            //     email: '',  
            //     contraseña: '',
            // });