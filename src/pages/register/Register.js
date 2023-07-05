import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../providers/AuthProvider';
import { updateProfile } from 'firebase/auth';

const Register = () => {

    const {createUser, userProfileInfo } = useContext(AuthContext);

    const handleRegister = event =>{
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, photo, email, password)

        createUser(email, password)
        .then(result => {
            const createdUser = result.user;
            console.log(createdUser);
            form.reset();
            userProfileInfo(createdUser, name, photo);
        })
        .catch(error => {
            console.log(error);
        })

        const userProfileInfo = (user, name, photo) => {
            updateProfile(user, {
                displayName: name,
                photoURL: photo,
            })
            .then( () => {
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
                <Button className='w-100 apply fw-semibold' variant="primary" type="submit">
                    Register
                </Button>
                <p className='mt-2'>Already have an account? <Link to='/login'>Login</Link></p>
            </Form>

        </div>
    );
};

export default Register;