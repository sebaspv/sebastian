import React from 'react'

function Me() {
    return (
        <div className="bg-white">
            <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="max-w-xl sm:mx-auto lg:max-w-2xl">
                    <div className="flex flex-col mb-16 sm:text-center sm:mb-0">
                        <div className="max-w-xl mb-8 md:mx-auto sm:text-center lg:max-w-2xl md:mb-1">
                            <h2 className="max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-black sm:text-4xl md:mx-auto font-poppins">
                                Hi! I'm <span className="font-extrabold text-transparent bg-clip-text bg-gradient-to-br from-purple-800 to-blue-200"> Sebastian. </span>
                            </h2>
                            <p className="text-base text-black md:text-lg">
                                I'm a Machine Learning developer who also focuses in web technologies like Backend and API development.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Me
