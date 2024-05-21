// import React from 'react'

import ContentCard2 from "./ContentCard2"


const ContentCard = (props) => {
    return (
        <>
            <div className="card " style={{ width: '18rem', alignItems: 'center' }}>
                <div className="card" style={{ width: '10rem' }}>
                    <img src={props.image} className="card-img-top" alt="..." style={{ objectFit: 'cover' }} />

                </div>
                <div className="card-body">
                    <p className="card-text text-center">{props.title}</p>
                </div>
            </div>

        </>
    )
}

export default ContentCard
