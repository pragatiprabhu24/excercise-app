import React from 'react'
import { useState, useEffect } from 'react';
import ExcerciseCard from '../components/ExcerciseCard'
import { options, fetchData } from '../utils/fetchData';

const ExercisePage = () => {
    const [excercises, setExcercises] = useState([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
            let exercisesData = [];
                exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);
            setExcercises(exercisesData);
        };

        fetchExercisesData();
    }, []);
    return (
        <div class="container mx-auto px-5 py-10 lg:px-40  md:flex-row flex-col items-center">
            <div class="flex flex-wrap -m-4">
                {excercises?.map((excercise, index) => (
                    <div class="p-4 lg:w-1/3">
                        <ExcerciseCard key={index} excercise={excercise} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ExercisePage
