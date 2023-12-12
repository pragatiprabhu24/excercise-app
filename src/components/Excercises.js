import React from 'react'
import { useEffect } from 'react'
import { options, fetchData } from '../utils/fetchData'
import ExcerciseCard from './ExcerciseCard'

const Excercises = ({ excercises, setExcercises, bodyPart }) => {

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      if (bodyPart === 'all') {
        exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);
      } else {
        exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options);
      }

      setExcercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <>
      <div class="container mx-auto px-5 py-10 lg:px-40  md:flex-row flex-col items-center">
        <div class="flex flex-wrap -m-4">
          {excercises?.map((excercise, index) => (
            <div class="p-4 lg:w-1/3">
              <ExcerciseCard key={index} excercise={excercise} />
            </div>
          ))}
        </div>
      </div>
      <h1 class="title-font sm:text-4xl text-center top-0 sm:mb-20 font-bold text-orange-500 opacity-25">Fitness is not a destination, it's a way of life.</h1>
    </>
  )
}

export default Excercises
