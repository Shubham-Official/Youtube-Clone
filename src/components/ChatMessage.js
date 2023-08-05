import React from 'react'

const ChatMessage = ({ name, message }) => {
    return (
        <div className='flex items-center shadow-md p-2 '>
            <img className='h-8' src="https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png" alt="user" />
            <span className='font-semibold ml-2'>{name}</span>
            <span className='ml-2'>{message} 🙏🏻</span>
        </div>
    )
}

export default ChatMessage;