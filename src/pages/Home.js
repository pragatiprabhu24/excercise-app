import React, { useState } from 'react'
import { Box } from '@mui/material'
import HerBanner from '../components/HerBanner'
import SearchExcercises from '../components/SearchExcercises'
import Excercises from '../components/Excercises'


const Home = () => {
  const [excercises, setExcercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all')
 
  return (
    <Box>
      <HerBanner />
      <SearchExcercises
        setExcercises={setExcercises}
        bodyPart={bodyPart}
        setBodyPart={setBodyPart}
      />
      <h1 className='text-center mt-10 text-4xl font-bold'>Showing Exercises</h1>
      <Excercises
        excercises={excercises}
        setExcercises={setExcercises}
        bodyPart={bodyPart}
      />
    </Box>
  )
}

export default Home
