import React, { useState, useEffect } from 'react'
import { YT_VIDEOS_API } from '../utils/config';
import VideoCard from './VideoCard';
import { Link } from 'react-router-dom';

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    useEffect(() => {
        getVideos();
    }, []);

    const getVideos = async () => {
        const data = await fetch(YT_VIDEOS_API);
        const json = await data.json();

        setVideos(json.items);
    }

    return (
        <div className='flex flex-wrap p-2 m-2'>
            {videos.map((video) => <Link to={"/watch?v=" + video.id} key={video.id} ><VideoCard info={video} /></Link>)}
        </div>
    )
}

export default VideoContainer;