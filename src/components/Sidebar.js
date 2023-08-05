import React from 'react'
import { useSelector } from 'react-redux';

const Sidebar = () => {

    const isMenuOpen = useSelector(store => store.app.isMenuOpen);

    //Early return
    if (!isMenuOpen) return null;

    return (
        <div className='w-36 p-5 shadow-lg h-screen'>
            <ul>
                <li>Home</li>
                <li>Shorts</li>
                <li>Live</li>
                <li>Videos</li>
            </ul>
            <h1 className='py-5 font-semibold'>Subscriptions</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
            <h1 className='py-5 font-semibold'>Watch Later</h1>
            <ul>
                <li>Music</li>
                <li>Sports</li>
                <li>Gaming</li>
                <li>Movies</li>
            </ul>
        </div>
    )
}

export default Sidebar;