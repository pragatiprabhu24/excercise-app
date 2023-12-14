import React from 'react';
import BannerImg from '../assets/images/banner.png'
import { Link } from 'react-router-dom';

const HerBanner = () => {
    return (
        <section class="text-gray-600 body-font">
            <div class="container mx-auto flex px-5 py-10 lg:px-40  md:flex-row flex-col items-center">
                <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                    <h1 class="title-font sm:text-4xl text-center top-0 sm:mb-20 font-bold text-orange-500 opacity-25">Fitness is not a destination, it's a way of life.</h1>
                    <h6 class="title-font sm:text-xl text-xl mb-4 font-bold text-orange-500">Fitness Club</h6>
                    <h1 class="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900">Sweat, Smileand Repeat</h1>
                    <p class="mb-8 leading-relaxed">Check out the most effective Excercises.</p>
                    <div class="flex justify-center">
                       <Link to="/excercises">
                       <button class="inline-flex text-white bg-orange-500 border-0 py-2 px-6 focus:outline-none hover:bg-orange-600 rounded text-lg">Explore Excercises</button>
                       </Link>
                    </div>
                </div>
                <div class="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
                    <img class="object-cover object-center rounded" alt="hero" src={BannerImg} />
                </div>
            </div>
            <h1 class="title-font sm:text-4xl text-end top-0 sm:mb-20 font-bold text-orange-500 opacity-25">Strong body, strong mind, unstoppable spirit.</h1>
        </section>
    );
}

export default HerBanner;
