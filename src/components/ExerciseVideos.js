import React from 'react'
import { Link } from 'react-router-dom'
import Loader from './Loader'

const ExerciseVideos = ({ exerciseVideos, name }) => {
    return (
        <div class="container mx-auto px-5 py-10 lg:px-20  md:flex-row flex-col items-center">
            <h1 className='text-2xl mb-10'>Watch <span className='text-orange-500'>{name}</span> related videos</h1>
            <div class="flex flex-wrap -m-4">
                {exerciseVideos.slice(0, 4).map((video, index) => (
                    video.length !== 0 ?
                        <div class="p-4 lg:w-1/4 md:w-1/2">
                            <div class="h-full p-2 bg-white shadow-lg flex flex-col items-center text-center">
                                <a href={`https://www.youtube.com/watch?v=${video.video.channelId}`} target='_blank'><img alt="team" class="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={video.video.thumbnails[0].url} loading='lazy' /></a>
                                <h1 className='text-center'>{video.video.lengthText}</h1>
                                <div class="w-full">
                                    <h2 class="title-font font-bold text-lg text-gray-900">{video.video.title}</h2>
                                    <h3 class="text-gray-500 mb-3">{video.video.channelName}</h3>
                                    <div class="flex flex-col items-center text-center">
                                        <div className='flex gap-4'>
                                            <h2 class="title-font font-bold text-rose-600">{video.video.viewCountText}</h2>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div> :
                        <Loader />
                ))}

            </div>
        </div>
    )
}

export default ExerciseVideos
