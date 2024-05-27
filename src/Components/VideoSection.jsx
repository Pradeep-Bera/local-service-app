import React from 'react';
import ReactPlayer from 'react-player';
import './Video.css'

const VideoSection = () => {
    const videos = [{
        url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U',
        title: "cat",
        id: 1
    },
    {

        url: 'https://www.youtube.com/watch?v=ScMzIvxBSi4',
        title: "dog",
        id: 2
    }
        ,
    {
        url: 'https://www.youtube.com/watch?v=2g811Eo7K8U',
        title: 'hourse',
        id: 3
    }
        ,
    {
        url: 'https://www.youtube.com/watch?v=kJQP7kiw5Fk',
        title: 'mouse',
        id: 4
    }


    ];
    // const VideoTitle = [{
    //     title: 'cat'
    // }, {
    //     title: 'dog'
    // }, {
    //     title: 'elephat'
    // }, {
    //     title: 'horse'
    // },
    // ]

    return (
        <div className="video-section">
            <div className="row">
                {videos.map((e) => (
                    <div key={e.id} className="col-md-6 col-lg-3 mb-4">
                        <ReactPlayer url={e.url} className="react-player" width="100%" height="100%" />
                        <h2 className='text-center'>{e.title}</h2>
                    </div>

                ))}


            </div>
        </div>
    );
};

export default VideoSection;