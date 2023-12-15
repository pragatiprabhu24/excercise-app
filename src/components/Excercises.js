import React, { useEffect, useState } from 'react';
import { options, fetchData } from '../utils/fetchData';
import ExcerciseCard from './ExcerciseCard';

const Excercises = ({ bodyPart }) => {
  const [excercises, setExcercises] = useState([]);

  useEffect(() => {
    const fetchExercisesData = async () => {
      let exercisesData = [];

      // Check if data is stored in local storage
      const storedData = localStorage.getItem('excercisesData');
      if (storedData) {
        exercisesData = JSON.parse(storedData);
      } else {
        if (bodyPart === 'all') {
          exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);
        } else {
          exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, options);
        }

        // Save data to local storage
        localStorage.setItem('excercisesData', JSON.stringify(exercisesData));
      }

      setExcercises(exercisesData);
    };

    fetchExercisesData();
  }, [bodyPart]);

  return (
    <>
      <div className="container mx-auto px-5 py-10 lg:px-40 md:flex-row flex-col items-center">
        <div className="flex flex-wrap -m-4">
          {excercises?.map((excercise, index) => (
            <div className="p-4 lg:w-1/3" key={index}>
              <ExcerciseCard excercise={excercise} />
            </div>
          ))}
        </div>
      </div>
      <h1 className="title-font sm:text-4xl text-center top-0 sm:mb-20 font-bold text-orange-500 opacity-25">
        Fitness is not a destination, it's a way of life.
      </h1>
    </>
  );
};

export default Excercises;
