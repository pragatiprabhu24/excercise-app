import { Box } from '@mui/material'
import React from 'react'
import BodyPart from './BodyPart'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { Link } from 'react-router-dom';

const ExerciseCarousal = ({ data }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 5,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 3,
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 2,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                }
            }
        ]
    };
    return (
        <Slider {...settings}>
            {data.map((excercise) => (
                <Link to={`/excercise/${excercise.id}`}>
                    <div class="h-full bg-opacity-75 px-8 pt-16 pb-24 rounded-lg overflow-hidden text-center relative">
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

            ))}

        </Slider>
    )
}

export default ExerciseCarousal
