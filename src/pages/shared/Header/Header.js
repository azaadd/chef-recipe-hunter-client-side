import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../providers/AuthProvider';

const Header = () => {

    const {user, logOut} = useContext(AuthContext);

    const handleLogout = () => {
        logOut()
        .then()
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div className='mt-2 mb-4 sticky-top'>
            <Navbar collapseOnSelect expand="lg" className="bg-white">
                <Container>
                    <Navbar.Brand className='fw-bold fs-1' href="#home"><span className='text-success'>Ban</span><span className='text-danger'>gla</span><span className='text-success'>Food</span></Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse className='fs-5' id="responsive-navbar-nav">
                        <Nav className="mx-auto fw-semibold">
                            <Link className='text-decoration-none text-secondary' to="/">Home</Link>
                            <Link className='ms-3 text-decoration-none text-secondary' to="/blog">Blog</Link>
                        </Nav>
                        
                            { user ? 
                            <>
                            
                            <img src={user.photoURL} className='rounded-5 profile-image' 
                            alt="" 
                            title={user.displayName} 
                            style={{ height: "50px", width: "50px" }}
                            />
                            <Button onClick={handleLogout} className='apply border-0 rounded-3 px-4 fw-semibold text-white ms-3'>Logout</Button>
                            </>:
                            <Link to="/login">
                                <Button className='apply border-0 rounded-3 px-4 fw-semibold text-white ms-3'>Login</Button>
                            </Link>
                            }
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;