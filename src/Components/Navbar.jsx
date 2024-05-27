import { Link, Outlet } from 'react-router-dom';


const Navbar = (props) => {



    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark navbar fixed-top" >
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">Localy Done</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse fle d-flex justify-content-around" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <Link className="nav-link " aria-current="page" to="/">Home</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/contact">Contact Us</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/carosuel">Carosuel</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/video">VideoSection</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/singUp">Sign Up</Link>
                            </li>

                        </ul>
                        <div className={`form-check form-switch m-2 text-${props.theme === 'light' ? 'dark' : 'light'} `}>
                            <input className="form-check-input" onClick={props.changeTheme} type="checkbox" id="flexSwitchCheckDefault" />
                            <label className={`form-check-label text-${!props.theme == 'light' ? 'dark' : 'light'}`} htmlFor="flexSwitchCheckDefault">{props.theme}</label>
                        </div>
                    </div>
                </div>
            </nav>
            <Outlet />
        </>
    )
}

export default Navbar
