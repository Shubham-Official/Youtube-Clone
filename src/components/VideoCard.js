import React from 'react'

const VideoCard = ({ info }) => {
    const { snippet, statistics } = info;
    const { channelTitle, title, thumbnails } = snippet;
    return (
        <div className='p-2 m-2 w-60 shadow-lg'>
            <img className='rounded-lg' src={thumbnails.medium.url} alt="thumbnail" />
            <ul>
                <li className='text-lg font-semibold p-2'>{title}</li>
                <li className='pl-2'>{channelTitle}</li>
                <li className='pl-2'>{statistics.viewCount} views</li>
            </ul>
        </div>
    );
};

export default VideoCard;