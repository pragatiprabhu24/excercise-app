import React from 'react'
import { Link } from 'react-router-dom'

const ExcerciseCard = ({ excercise }) => {
    return (
        <Link to={`/excercise/${excercise.id}`}>
            <div class="h-full bg-gray-100 bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
                <img src={excercise.gifUrl} alt={excercise.name} loading='lazy' />
                <div class="flex items-center justify-center gap-4 mt-5">
                    <button class="bg-red-400 hover:bg-red-400 text-white font-bold py-2 px-4 rounded-full">
                        {excercise.bodyPart}
                    </button>
                    <button class="bg-orange-400 hover:bg-orange-400 text-white font-bold py-2 px-4 rounded-full">
                        {excercise.target}
                    </button>
                </div>
                <h2 class="text-xl font-bold mt-5">{excercise.name}</h2>
            </div>
        </Link>

    )
}

export default ExcerciseCard
