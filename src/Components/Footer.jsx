import React from 'react'
import { Link, Outlet } from 'react-router-dom';


const Footer = () => {
    return (
        <div>
            <footer className="bg-dark text-white py-4 mt-auto">
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <h5>About Us</h5>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque nisl eros, pulvinar facilisis justo mollis, auctor consequat urna.</p>
                        </div>
                        <div className="col-md-4">
                            <h5>Contact Us</h5>
                            <ul className="list-unstyled">
                                <li>Email: contact@example.com</li>
                                <li>Phone: +123 456 7890</li>
                                <li>Address: 123 Street, City, Country</li>
                            </ul>
                        </div>
                        <div className="col-md-4">
                            <h5>Follow Us</h5>
                            <ul className="list-unstyled">
                                <li><a href="/" className="text-white">Facebook</a></li>
                                <li><a href="/" className="text-white">Twitter</a></li>
                                <li><a href="/" className="text-white">Instagram</a></li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center pt-3">
                        <p>&copy; 2024 Your Company. All rights reserved.</p>
                    </div>
                </div>
            </footer>
            <Outlet />
        </div>
    )
}

export default Footer
