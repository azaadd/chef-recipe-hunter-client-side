import React from 'react';
import { Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram, FaGithub, FaWhatsapp } from 'react-icons/fa';


const Footer = () => {
    return (
        <div>
            <div style={{ background: "#93ba8b" }}>
                <Container>
                    <footer className="legal-footer text-white mt-5 py-5">
                        <div className="row row-cols-2 row-cols-md-3 g-3">
                            <div className="border-end col">
                                <h5 className="text-danger fw-bold mb-4">Subscribe</h5>
                                <p>
                                    Subscribe for our latest & Articles. You will not be sent spam mails in the future.
                                </p>
                                <form role="search">
                                    <div className="d-flex">
                                        <input
                                            className="form-control me-2"
                                            type="email"
                                            placeholder="Your Email Address"
                                            aria-label="email"
                                        />
                                        <div>
                                            <Button className="bg-danger border-0" type="email">
                                                Subscribe
                                            </Button>
                                        </div>
                                    </div>
                                </form>
                            </div>
                            <div className="col border-end px-5">
                                <h5 className="text-danger fw-bold mb-4">Explore</h5>
                                <ul className="list-group">
                                    <NavLink
                                        to="/"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "#dc3545" : "white",
                                                textDecoration: isActive ? "none" : "none"
                                            };
                                        }}
                                    >
                                        Home
                                    </NavLink>
                                    <NavLink
                                        to="/blog"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "#dc3545" : "white",
                                                textDecoration: isActive ? "none" : "none"
                                            };
                                        }}
                                    >
                                        Blog
                                    </NavLink>
                                    <NavLink
                                        to="/login"
                                        style={({ isActive }) => {
                                            return {
                                                fontWeight: isActive ? "bold" : "",
                                                color: isActive ? "#dc3545" : "white",
                                                textDecoration: isActive ? "none" : "none"
                                            };
                                        }}
                                    >
                                        Login
                                    </NavLink>
                                </ul>
                            </div>
                            <div className="px-md-5 col py-4 py-md-0">
                                <h5 className="text-danger fw-bold mb-4">Contact</h5>
                                <p>10 Mirpur Rd, Dhanmondi 32, Dhaka, Bangladesh.</p>
                                <p>666 888 0000</p>
                                <p>info@gmail.com</p>
                            </div>
                        </div>
                    </footer>
                </Container>
            </div>
            <div className='text-center p-3 foot-icon-con'>
                <div className=''>
                    <FaFacebook className='social-icon text-primary'/>
                    <FaTwitter className='social-icon text-primary' />
                    <FaInstagram className='social-icon fainsta' />
                    <FaGithub className='social-icon' />
                    <FaWhatsapp className='social-icon fawhats' />
                </div>
                <p>&copy; Copyright 2023. All Rights Reserved by AK_Azad.</p>
            </div>
        </div>
    );
};

export default Footer;