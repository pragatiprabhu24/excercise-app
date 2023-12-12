import React from 'react'
import { Box } from '@mui/material'
import ExerciseCarousal from './ExerciseCarousal'
import Loader from './Loader'


const SimilarExercises = ({ targetMuscleExercises, equipmentExercises }) => {

    return (
        <div class="container mx-auto px-5 py-10 lg:px-20  md:flex-row flex-col items-center">
            <h1 className='text-2xl mb-10'>
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Target Muscle</span> exercises
            </h1>

            {targetMuscleExercises.length !== 0 ? <ExerciseCarousal data={targetMuscleExercises} /> : <Loader />
            }

            <h1 className='text-2xl mt-20'>
                Similar <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>Equipment</span> exercises
            </h1>

            {equipmentExercises.length !== 0 ? <ExerciseCarousal data={equipmentExercises} /> : <Loader />}

        </div>
    )
}

export default SimilarExercises
