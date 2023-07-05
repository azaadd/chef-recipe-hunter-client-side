import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center fw-bold mb-3'>Please Login</h2>
            <Form className='border p-5 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button className='w-100 apply fw-semibold' variant="primary" type="submit">
                    Login
                </Button>
                <p className='mt-2'>Don't have an account? <Link to='/register'>Register</Link></p>
            </Form>

            <div>
                <Button className='w-100 fw-semibold mt-3' variant="outline-primary" type="submit">
                <FaGoogle/> Sign-in With Google
                </Button>
                <Button className='w-100 fw-semibold mt-3' variant="outline-secondary" type="submit">
                <FaGithub/> Sign-in With GitHub
                </Button>
            </div>

        </div>
    );
};

export default Login;