import React from 'react'

function CTA() {
    return (
        <div class="bg-white dark:bg-gray-800 ">
            <div class="text-center w-full mx-auto py-1 px-4 sm:px-6 lg:pb-3 lg:px-8 z-20 lg:pt-12">
                <h2 class="text-3xl font-extrabold text-black dark:text-white sm:text-4xl font-poppins">
                    <span class="block">
                        Do you like what you see?
                    </span>
                    <span class="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-800 to-blue-200">
                        Contact me!
                    </span>
                </h2>
                <div class="lg:mt-0 lg:flex-shrink-0">
                    <div class="mt-5 inline-flex rounded-md shadow">
                    <a href="https://www.linkedin.com/in/sebaspv">
                        <button type="button" class="py-4 px-6  bg-gradient-to-br from-purple-800 to-blue-200 focus:ring-indigo-500 focus:ring-offset-indigo-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                            Connect with me!
                        </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CTA
