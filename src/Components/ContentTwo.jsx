// import React from 'react'
import ContentCard2 from './ContentCard2'
import homerepair from '../assets/homerepair.jpg'
import homepaint from '../assets/home painting.jpg'
import acservice from '../assets/acservice.png'
import clening from '../assets/cleaning service.png'
import painting from '../assets/painting.png'


const ContentTwo = () => {
    const data = [
        {
            id: 1,
            title: 'Home Repair',
            image: homerepair,
            dis: 'Carpentry,Electrical,False Ceiling,etc'

        },
        {
            id: 2,
            title: 'Home Paint',
            image: homepaint,
            dis: 'Exterior-Inerior Painting,Full Home painting '

        },
        {
            id: 3,
            title: 'Ac Service',
            image: acservice,
            dis: 'AC, fridge, Washing Machine,etc'

        },
        {
            id: 4,
            title: 'Cleaning Service',
            image: clening,
            dis: 'All type of Home Cleaning Done'

        },
        {
            id: 5,
            title: 'Home Painting',
            image: painting,
            dis: 'hellow wprls'

        },
        {
            id: 6,
            title: 'Paintingr',
            image: painting,
            dis: 'hellow wprls'
        }
    ]

    return (
        <>
            <div>
                <div className='text-center'>
                    <h2>Our Services</h2>
                    <p>Choose From Our Wide Range Of Household Services.</p>
                </div>
                <div className="d-flex flex-wrap justify-content-evenly  ">
                    {data.map((e) => (

                        <div key={e.id}>
                            <ContentCard2 image={e.image} title={e.title} dis={e.dis} />
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default ContentTwo
