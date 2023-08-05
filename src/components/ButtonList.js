import React from 'react'
import Button from './Button';

const btnList = ["All", "Gaming", "Songs", "Soccer", "Cricket", "News", "Entertainment", "International", "Crime", "Movies", "Mashups"];

let index = 0;

const ButtonList = () => {
    return (
        <div className='flex mt-3 ml-5'>
            {btnList.map((btn) => <Button key={index++} name={btn} />)}
        </div>
    )
};

export default ButtonList;