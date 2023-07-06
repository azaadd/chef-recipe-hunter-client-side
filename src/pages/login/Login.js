import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { FaGithub, FaGoogle } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';

const Login = () => {

    const {signInUser, signInWithGoogle,signInWithGithub} = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location',location);
    const from = location.state?.from?.pathname || '/'

    const handleLogin = event => {
        event.preventDefault();

        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email, password)

        signInUser(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            form.reset();
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGoogleSignIn = () => {
        signInWithGoogle()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error);
        })
    }

    const handleGithubSignIn = () => {
        signInWithGithub()
        .then(result => {
            const loggedUser = result.user;
            console.log(loggedUser);
            navigate(from, {replace: true})
        })
        .catch(error => {
            console.log(error);
        })
    }


    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center fw-bold mb-3'>Please Login</h2>
            <Form onSubmit={handleLogin} className='border p-5 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Remember me" />
                </Form.Group>
                <Button className='w-100 apply fw-semibold' variant="primary" type="submit">
                    Login
                </Button>
                <p className='mt-2'>Don't have any account? <Link to='/register'>Register</Link></p>
            </Form>

            <div>
                <Button onClick={handleGoogleSignIn} className='w-100 fw-semibold mt-3' variant="outline-primary" type="submit">
                <FaGoogle/> Sign-in With Google
                </Button>
                <Button onClick={handleGithubSignIn} className='w-100 fw-semibold mt-3' variant="outline-secondary" type="submit">
                <FaGithub/> Sign-in With GitHub
                </Button>
            </div>

        </div>
    );
};

export default Login;