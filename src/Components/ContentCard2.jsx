import React, { useState } from 'react';




const ContentCard2 = (props) => {



    const [isHovered, setIsHovered] = useState(false)

    const divStyle = {

        backgroundColor: isHovered ? '#e9ecef' : '#f8f9fa',

        transition: 'background-color 0.3s ease, box-shadow 0.3s ease',
        boxShadow: isHovered ? '0 4px 8px rgba(0, 0, 0, 0.2)' : 'none',

    }



    const handleMouseEnter = () => setIsHovered(true);
    const handleMouseLeave = () => setIsHovered(false);



    return (



        < a href='/' style={{ textDecoration: 'none' }
        }  >
            <div style={divStyle}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}>

                <div style={{ width: '24rem', border: '3px solid blue', height: '30rem', margin: '30px', }}   >
                    <div className="card" style={{ width: '23rem', height: '24rem' }}>
                        <img src={props.image} className="card-img-top object-fit-cover border rounded" alt="..." />

                    </div>
                    <div>
                        <div className="text-center ">
                            <h2 className=" "> {props.title}</h2>
                            <p> {props.dis}</p>
                        </div>
                    </div>
                </div>
            </div>
        </a >
    )
}

export default ContentCard2
