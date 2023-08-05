import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/appSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer';
import LiveChat from './LiveChat';

const WatchPage = () => {

    const [searchParams] = useSearchParams();
    const vidId = searchParams.get("v");

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(closeMenu());
    }, [dispatch])

    return (
        <div className='flex flex-col w-full max-w-[1500px]'>
            <div className='flex mt-2 ml-2'>
                <div>
                    <iframe width="950" height="600" src={"https://www.youtube.com/embed/" + vidId} title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                </div>
                <div className='w-full'>
                    <LiveChat />
                </div>
            </div>
            <CommentsContainer />
        </div>
    )
}

export default WatchPage;