import React, { useEffect, useState } from 'react'
import ChatMessage from './ChatMessage';
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from '../utils/chatSlice';
import { getName } from "../utils/helper";

const LiveChat = () => {
    const dispatch = useDispatch();
    const [liveMessage, setLiveMessage] = useState("");

    const chatMessages = useSelector(store => store.chat.messages);

    useEffect(() => {
        const Inter = setInterval(() => {
            // API polling
            dispatch(addMessage({
                name: getName(),
                message: 'Hello there'
            }));
        }, 2000);

        return () => clearInterval(Inter);

    }, [])

    return (
        <>

            <div className='w-full h-[600px] mx-3 py-2 border border-black bg-slate-200 rounded-lg overflow-y-scroll flex flex-col-reverse overflow-x-hidden'>

                <form className='flex' onSubmit={(e) => {
                    e.preventDefault()
                    dispatch(addMessage(
                        {
                            name: "Shubham",
                            message: liveMessage,
                        }
                    ));
                    setLiveMessage("");
                }}>
                    <input className='w-[400px] mx-2 px-2 flex justify-center items-center rounded-lg' type="text" value={liveMessage} onChange={(e) => setLiveMessage(e.target.value)} />
                    <button className='bg-gray-500 rounded-lg border p-1 px-3'>Send</button>
                </form>
                <div className='flex px-2'>
                    <div className='ml-2 mb-2 font-bold'>Live Chat</div>
                    <img className="w-4 h-4 ml-2 mt-1" src="https://w7.pngwing.com/pngs/175/947/png-transparent-arrow-computer-icons-down-arrow-angle-black-desktop-wallpaper.png" alt="down" />
                </div>
                <div className='my-1 border border-gray-500 w-full'></div>
                {chatMessages.map((chat, index) =>
                    <ChatMessage key={index} name={chat.name} message={chat.message} />
                )}


            </div >

        </>
    )
}

export default LiveChat;