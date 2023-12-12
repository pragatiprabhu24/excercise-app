import React from 'react'

const Loader = () => {
    return (
        <div className='flex flex-col items-center'>
            <img src="https://cdn.dribbble.com/users/1787505/screenshots/7300251/media/a351d9e0236c03a539181b95faced9e0.gif" className='w-40' />
            <h1 className='text-xl font-sans font-bold text-orange-500'>Loading...</h1>
        </div>
    )
}

export default Loader
