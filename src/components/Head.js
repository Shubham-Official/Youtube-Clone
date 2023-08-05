import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../utils/appSlice';
import { YT_SEARCH_API } from '../utils/config';
import { cacheResults } from '../utils/searchSlice';

const Head = () => {

    const [searchQuery, setSearchQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [showSuggestions, setShowSuggestions] = useState(false);

    const searchCache = useSelector(store => store.search);

    useEffect(() => {
        //Debouncing
        const timer = setTimeout(() => {
            if (searchCache[searchQuery]) {
                setSuggestions(searchCache[searchQuery]);
            } else {
                getSearchSuggestions();
            }
        }, 100);

        return () => clearTimeout(timer); // Cleanup
    }, [searchQuery]);

    const getSearchSuggestions = async () => {
        const data = await fetch(YT_SEARCH_API + searchQuery);
        const json = await data.json();

        setSuggestions(json[1]);

        //update cache
        dispatch(cacheResults({
            [searchQuery]: json[1],
        }));
    }

    const dispatch = useDispatch();

    const toggleMenuHandler = () => {
        dispatch(toggleMenu());
    }

    return (
        <div className='grid grid-flow-col p-3 shadow-lg'>
            <div className='flex col-span-1 pt-2'>
                <img className='h-6 mx-3 cursor-pointer' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/2048px-Hamburger_icon.svg.png" alt="ham" onClick={() => {
                    toggleMenuHandler();
                }} />
                <a href="/">
                    <img className='h-6 mx-3' src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/1200px-YouTube_Logo_2017.svg.png" alt="logo" />
                </a>
            </div>
            <div className='col-span-10 pl-60'>
                <div>
                    <input type="text" className='w-2/4 border border-gray-400 p-2 pl-5 rounded-full rounded-r-none font-semibold text-md' value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} onFocus={() => {
                        setShowSuggestions(true);
                    }} onBlur={() => {
                        setShowSuggestions(false);
                    }} />
                    <button className='border border-gray-400 p-2 rounded-full rounded-l-none px-5'>Search</button>
                </div>


                {suggestions.length > 0 && showSuggestions && (<div className='absolute bg-white mt-2 py-2 px-4 w-[29rem] rounded-lg shadow-lg border-gray-100'>
                    <ul>
                        {
                            suggestions.map((suggestion) =>
                                <li
                                    key={suggestion}
                                    className='py-1 hover:bg-gray-200 font-semibold'><img className='w-4 inline-block mr-3' src="https://www.pngfind.com/pngs/m/617-6173786_small-icon-png-search-icon-svg-transparent-png.png" alt="search-logo" />{suggestion}
                                </li>)
                        }
                    </ul>
                </div>)
                }

            </div>
            <div className='col-span-1'>
                <img className='h-8' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user" />
            </div>
        </div>
    )
}

export default Head;