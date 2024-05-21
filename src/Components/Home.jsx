import React from 'react'
import Board from './Board'
import ContentOne from './ContentOne'
import ContentTwo from './ContentTwo'


const Home = () => {
    return (
        <div>
            <Board />
            <ContentOne />
            <div>
                <ContentTwo />
            </div>
        </div>
    )
}

export default Home
