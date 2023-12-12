import React from 'react';
import bodyPartImg from '../assets/icons/body-part.png';
import targetImg from '../assets/icons/target.png';
import equipmentImg from '../assets/icons/equipment.png';
import gym from '../assets/icons/gym.png';



const Detail = ({ exerciseDetail }) => {
    const { name, gifUrl, equipment, bodyPart, target, instructions } = exerciseDetail;

    const stats = [
        { name: name, icon: gym, title: "Name" },
        { name: bodyPart, icon: bodyPartImg, title: "Body Part" },
        { name: target, icon: targetImg, title: "Target" },
        { name: equipment, icon: equipmentImg, title: "Equipment" }
    ]
    return (
        <div class="container mx-auto flex px-5 py-10 lg:px-40  md:flex-row flex-col items-center">
            <div class="lg:max-w-lg lg:w-full md:w-1/2 w-3/6">
                <img class="object-cover object-center rounded" alt="hero" src={gifUrl} />
                <section class="text-gray-600 body-font">
                    <div class="container px-5 py-5 mx-auto">
                        <div class="flex flex-wrap -m-4 text-center">
                            {stats.map((stat) => (
                                <div class=" md:w-2/4 sm:w-1/2 w-full">
                                    <div class="border-2 border-gray-200 py-2 rounded-lg">
                                        <img className='w-12 h-12 mb-3 inline-block' src={stat.icon} />
                                        <h2 class="title-font font-bold text-transform: uppercase text-gray-900">{stat.name}</h2>
                                        <p class="leading-relaxed">{stat.title}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>
            </div>
            <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                <section class="text-gray-600 body-font">
                    <h1 className='text-xl text-center font-mono font-bold'>Instructions</h1>
                    <div class="container py-10 mx-auto flex flex-wrap">
                        {instructions?.map((instruction, index) => (
                            <React.Fragment key={index}>
                                <div class="flex relative pt-5 pb-5 sm:items-center md:w-2/3 mx-auto">
                                    <div class="h-full w-6 absolute inset-0 flex items-center justify-center">
                                        <div class="h-full w-1 bg-gray-200 pointer-events-none"></div>
                                    </div>
                                    <div class="flex-shrink-0 w-6 h-6 rounded-full mt-5 sm:mt-0 inline-flex items-center justify-center bg-orange-500 text-white relative z-10 title-font font-medium text-sm">{index + 1}</div>
                                    <div class="flex-grow md:pl-8 pl-6 flex sm:items-center items-start flex-col sm:flex-row">
                                        <div class="flex-grow sm:pl-6 mt-2 sm:mt-0">
                                            <p class="leading-relaxed">{instruction}</p>
                                        </div>
                                    </div>
                                </div>
                            </React.Fragment>
                        ))}
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Detail
