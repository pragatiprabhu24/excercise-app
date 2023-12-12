import React, { useEffect } from 'react';
import { useState } from 'react';
import BannerImg from '../assets/images/banner.png'
import { options, fetchData } from '../utils/fetchData';
import HorizontalScrollBar from './HorizontalScrollBar';

const SearchExcercises = ({ setExcercises, bodyPart, setBodyPart }) => {
    const [search, setSearch] = useState('');
    const [bodyParts, setBodyParts] = useState([]);

    useEffect(() => {
        const fetchExcercisesData = async () => {
            const bodyPartsData = await fetchData("https://exercisedb.p.rapidapi.com/exercises/bodyPartList", options)
            setBodyParts([...bodyPartsData]);
        }
        fetchExcercisesData();
    }, [])


    const handleSearch = async () => {
        if (search) {
            const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', options);

            const searchedExercises = exercisesData.filter(
                (item) => item.name.toLowerCase().includes(search)
                    || item.target.toLowerCase().includes(search)
                    || item.equipment.toLowerCase().includes(search)
                    || item.bodyPart.toLowerCase().includes(search),
            );

            window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

            setSearch('');
            setExcercises(searchedExercises);
        }
    };


    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto px-5 py-10 lg:px-40  md:flex-row flex-col items-center">
                <h1 class="title-font sm:text-4xl text-center top-0 sm:mb-20 font-bold text-gray-900">Awesome Excercises You Should Know</h1>
                <div>
                    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
                    <div class="relative">
                        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                            </svg>
                        </div>
                        <input type="search"
                            id="default-search"
                            class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-500 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-orange-500 dark:focus:border-orange-500"
                            placeholder="Search Mockups, Logos..."
                            value={search}
                            onChange={(e) => setSearch(e.target.value.toLowerCase())}
                            required />
                        <button type="submit"
                            class="text-white absolute end-2.5 bottom-2.5 bg-orange-500 hover:bg-orange-500focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-orange-500 dark:hover:bg-orange-500 dark:focus:ring-orange-500"
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
}

export default SearchExcercises;
