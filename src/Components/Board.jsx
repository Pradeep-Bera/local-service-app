// import carwash from '../assets/car wash1.jpg'

const Board = () => {

    return (
        <div className="col-6 mx-auto">
            <div className=" d-flex  justify-content-center align-items-center " style={{ height: '300px', maxWidth: "800px", flexDirection: 'column' }}
            >

                <div>
                    <h2>LARGEST HOME SERVICE PROVIDER</h2>
                    <h5 className="text-center">Quick | Affordable | Trusted</h5>
                </div>

                <div className="dropdown">
                    <a className="btn btn-secondary dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                        What service do you need?
                    </a>

                    <ul className="dropdown-menu">
                        <li><a className="dropdown-item" href="/">Home Repair</a></li>
                        <li><a className="dropdown-item" href="/">Cleaning Service</a></li>
                        <li><a className="dropdown-item" href="/">Gadgets Repair</a></li>
                    </ul>
                </div>
            </div>
            <hr />
        </div>
    )
}

export default Board
