// import React from 'react'

import ContentCard from "./ContentCard";
import fingerIcon from '../assets/finger.png'
import peoplehead from '../assets/peoplehead.png'
import thumsup from '../assets/thumsup.png'
import service from '../assets/service.jpg'

const cardData = [
    {
        id: 1,
        title: 'Now home services at your Fingertips',
        image: fingerIcon
    },
    {
        id: 2,
        title: 'Background-verified & trained professionals',
        image: thumsup
    },
    {
        id: 3,
        title: '100% service warranty',
        image: service
    },
    {
        id: 4,
        title: 'Dedicated relationship manager',
        image: peoplehead
    }

]




const ContentOne = () => {



    return (
        <>
            <div className="d-flex justify-content-around">
                {cardData.map((cd) => (
                    <div key={cd.id}>
                        <ContentCard title={cd.title} image={cd.image} />
                    </div>
                ))}
            </div>
        </>
    )
}

export default ContentOne
