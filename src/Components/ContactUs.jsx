import React, { useState } from 'react'
// import Navbar from './Navbar'

const ContactUs = () => {
    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [email, setEmail] = useState('');
    const [pincode, setPincode] = useState('');
    const [showPopup, setShowPopup] = useState(false);

    const handleSubmit = (event) => {
        event.preventDefault();
        setShowPopup(true);
    };

    const closePopup = () => {
        setShowPopup(false);
    };

    return (
        <div className="App">
            <form className="row g-3" onSubmit={handleSubmit}>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Name</label>
                    <input
                        type="text"
                        className="form-control"
                        id="inputEmail4"
                        placeholder="Name"
                        onChange={(e) => setName(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="" className="form-label">Mobile</label>
                    <input
                        type="tel"
                        className="form-control"
                        id="inputPassword4"
                        placeholder="Mobile"
                        onChange={(e) => setMobile(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">E-mail</label>
                    <input
                        type="email"
                        className="form-control"
                        placeholder="E-mail"
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>
                <div className="col-md-6">
                    <label htmlFor="inputEmail4" className="form-label">Pincode</label>
                    <input
                        type="text"
                        className="form-control"
                        placeholder="Pincode"
                        onChange={(e) => setPincode(e.target.value)}
                    />
                </div>
                {/* <input className="btn btn-primary" type="submit" value="Submit" />
                 */}
                <button>Submit</button>

            </form>

            {showPopup && (
                <div className="popup">
                    <div className="popup-content">
                        <span className="close-btn" onClick={closePopup}>&times;</span>
                        <p>Form submitted successfully!</p>
                        <p>Name: {name}</p>
                        <p>Mobile: {mobile}</p>
                        <p>Email: {email}</p>
                        <p>Pincode: {pincode}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ContactUs
