import React from 'react'
import { Link } from 'react-router-dom'

const PageNotFound = () => {
    return (

        <div class="h-screen w-screen bg-orange-50 flex items-center">
            <div class="container flex flex-col md:flex-row items-center justify-center px-5 text-gray-700">
                <div class="max-w-md">
                    <div class="text-5xl font-dark font-bold">404</div>
                    <p
                        class="text-2xl md:text-3xl font-light leading-normal"
                    >Sorry we couldn't find this page. </p>
                    <p class="mb-8">But dont worry, you can find plenty of other things on our homepage.</p>

                    <Link to='/'>
                        <button class="px-4 inline py-2 text-sm font-medium leading-5 shadow text-white transition-colors duration-150 border border-transparent rounded-lg focus:outline-none focus:shadow-outline-blue bg-orange-500 active:bg-orange-500 hover:bg-orange-600">Back to Homepage</button>
                    </Link>
                </div>
                <div class="max-w-lg">
                    <img src='https://www.drhealthclinic.com/wp-content/uploads/2019/06/Exercise-Reduces-Psoriasis.gif' />
                </div>

            </div>
        </div>
    )
}

export default PageNotFound
