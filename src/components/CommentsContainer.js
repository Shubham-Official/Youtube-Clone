import React from 'react'

const commentsData = [
    {
        name: "Shubham",
        comment: "Hello there",
        replies: [
            {
                name: "Shubham",
                comment: "Hello there",
                replies: []
            },
            {
                name: "Shubham",
                comment: "Hello there",
                replies: [
                    {
                        name: "Shubham",
                        comment: "Hello there",
                        replies: []
                    },
                    {
                        name: "Shubham",
                        comment: "Hello there",
                        replies: [
                            {
                                name: "Shubham",
                                comment: "Hello there",
                                replies: []
                            }
                        ]
                    },
                ]
            },
            {
                name: "Shubham",
                comment: "Hello there",
                replies: []
            },
        ]
    },
    {
        name: "Shubham",
        comment: "Hello there",
        replies: [
            {
                name: "Shubham",
                comment: "Hello there",
                replies: []
            },
            {
                name: "Shubham",
                comment: "Hello there",
                replies: []
            },
        ]
    },
    {
        name: "Shubham",
        comment: "Hello there",
        replies: []
    },
    {
        name: "Shubham",
        comment: "Hello there",
        replies: []
    },
];

const Comment = ({ data }) => {

    const { name, comment, replies } = data;

    return (
        <div className='flex shadow-md bg-gray-200 rounded-lg ml-4 my-2'>
            <img className='w-14 h-14 p-3' src='https://w7.pngwing.com/pngs/178/595/png-transparent-user-profile-computer-icons-login-user-avatars-thumbnail.png' alt='user'></img>
            <div className='m-1 '>
                <p className='font-semibold'>{name}</p>
                <p>{comment}</p>
            </div>
        </div>

    )
};

const CommentsList = ({ comments }) => {
    return comments.map((comment, index) =>
        <div>
            <Comment key={index} data={comment} />
            <div className='pl-5 ml-5 border border-l-black'>
                {/* Note: Component recursion (Beautiful) a.k.a N-level Nesting*/}
                <CommentsList comments={comment.replies} />
            </div>
        </div>
    )
}

const CommentsContainer = () => {
    return (
        <div>
            <div className='text-2xl font-bold m-3 p-2'>Comments:</div>
            <CommentsList comments={commentsData} />
        </div>
    )
}

export default CommentsContainer;