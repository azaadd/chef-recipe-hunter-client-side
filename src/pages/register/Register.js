import React, { useContext, useState } from 'react';
import { Button, Col, Form, Row, Toast } from 'react-bootstrap';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');
    

    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const location = useLocation();
    console.log('login page location', location);
    const from = location.state?.from?.pathname || '/login'

    const handleRegister = event => {
        event.preventDefault();
        setSuccess('');

        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        
        if(password.length<6){
            setError('Please input password at least 6 characters!')
            return;
        }


        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                form.reset();
                navigate(from, { replace: true })
                userProfileInfo(createdUser, name, photo);
                setError('');
                setSuccess('You have been login successfully!')

            })
            .catch(error => {
                console.log(error.message);
                setError(error.message);

            })

        const userProfileInfo = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo,
            })
                .then(() => {
                    console.log("user name and photo url updated");
                })
                .catch(error => {
                    console.log(error);
                })
        }



    }

    return (
        <div className='container w-50 mx-auto'>
            <h2 className='text-center fw-bold mb-3'>Please Register</h2>
            <Form onSubmit={handleRegister} className='border p-5 rounded'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Your name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter your name" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="Enter your photo url" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" name='accept' label="Accept terms & conditions" />
                </Form.Group>

                <p className='text-danger my-3 fs-5 fw-bold'>{error}</p>
                <p className='text-success my-3 fs-5 fw-bold'>{success}</p>

                <Button className='w-100 apply fw-semibold' variant="primary" type="submit">
                    Register
                </Button>

                <p className='mt-2'>Already have an account? <Link to='/login'>Login</Link></p>
            </Form>

        </div>
    );
};

export default Register;