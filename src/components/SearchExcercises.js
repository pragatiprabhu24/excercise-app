import React, { useEffect, useState } from 'react';
import BannerImg from '../assets/images/banner.png';
import { options, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExcercises = ({ setExcercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExcercisesData = async () => {
            let storedBodyParts = localStorage.getItem('bodyPartsData');
            if (storedBodyParts) {
                setBodyParts(JSON.parse(storedBodyParts));
            } else {
                const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', options);
                setBodyParts(bodyPartsData);
                localStorage.setItem('bodyPartsData', JSON.stringify(bodyPartsData));
            }
        };
        fetchExcercisesData();
    }, []);

    const handleSearch = () => {
        if (search) {
            let storedExcerciseData = JSON.parse(localStorage.getItem('excercisesData')) || [];
            
    
            const filteredExercises = storedExcerciseData.filter((exercise) =>
                exercise.name.toLowerCase().includes(search.toLowerCase())
            );
            console.log('Filtered Exercises:', filteredExercises);
    
            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    
            setSearch('');
            setExcercises(filteredExercises);
        }
    };
    
    return (
        <section className="text-gray-600 body-font">
            <div className="container mx-auto px-5 py-10 lg:px-40 md:flex-row flex-col items-center">
                <h1 className="title-font sm:text-4xl text-center top-0 sm:mb-20 font-bold text-gray-900">
                    Awesome Excercises You Should Know
                </h1>
                <div>
                    <label htmlFor="default-search" className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">
                        Search
                    </label>
                    <div className="relative">
                        <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg
                                className="w-4 h-4 text-gray-500 dark:text-gray-400"
                                aria-hidden="true"
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 20 20"
                            >
                                <path
                                    stroke="currentColor"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                />
                            </svg>
                        </div>
                        <input
                            type="search"
                            id="default-search"
                            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Search Mockups, Logos..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value.toLowerCase())}
                            required
                        />
                        <button
                            type="submit"
                            className="text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-500focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-500"
                            onClick={handleSearch}
                        >
                            Search
                        </button>
                    </div>
                </div>
                <HorizontalScrollBar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
            </div>
        </section>
    );
};

export default SearchExcercises;
