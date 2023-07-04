import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Header = () => {
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
                        <Nav>
                            <Link href="#deets">Profile</Link>
                            <Button className='apply border-0 rounded-3 px-4 fw-semibold text-white'>Login</Button>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;