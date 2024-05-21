// import painting from './assets/painting.png'
// import PropTypes from 'prop-types'


const Newsitems = () => {

    return (
        <div>
            <div className="card" style="width: 18rem;">
                {/* <img src={props.image} className="card-img-top" alt="..." /> */}
                <div className="card-body">
                    <p className="card-text">hello</p>
                </div>
            </div>
        </div>
    )
}
Newsitems.defaultprops = {
    // image: { painting },
    title: 'service'
}

export default Newsitems
