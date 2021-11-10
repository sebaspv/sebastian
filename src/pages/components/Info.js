import React from 'react'

function Info() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-8">
            <div className="grid gap-10 lg:grid-cols-2">
                <div className="lg:pr-10">
                    <a
                        href="/"
                        className="inline-block mb-5"
                    >
                        <div className="flex items-center justify-center w-12 h-12 rounded-full bg-indigo-50">
                        </div>
                    </a>
                    <h5 className="mb-4 text-4xl font-extrabold leading-none">
                        Who am I?
                    </h5>
                    <p className="mb-6 text-gray-900">
                        I'm Sebastian! Other than my name, I have over 2 years of experience with Machine Learning
                        and over 4 years of coding experience in general. I have knowledge in areas like Backend,
                        API, and Frontend Development. I'm a student from Mexico, and I'm currently in my junior year of High School.
                    </p>
                    <hr className="mb-5 border-gray-300" />
                    <div className="flex items-center space-x-4">
                        <a
                            href="https://github.com/sebaspv"
                            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <svg className="h-5 fill-current text-gray-600" viewBox="0 0 30 30">
                                <path d="M16 2a14 14 0 0 0-4.43 27.28c.7.13 1-.3 1-.67v-2.38c-3.89.84-4.71-1.88-4.71-1.88a3.71 3.71 0 0 0-1.62-2.05c-1.27-.86.1-.85.1-.85a2.94 2.94 0 0 1 2.14 1.45a3 3 0 0 0 4.08 1.16a2.93 2.93 0 0 1 .88-1.87c-3.1-.36-6.37-1.56-6.37-6.92a5.4 5.4 0 0 1 1.44-3.76a5 5 0 0 1 .14-3.7s1.17-.38 3.85 1.43a13.3 13.3 0 0 1 7 0c2.67-1.81 3.84-1.43 3.84-1.43a5 5 0 0 1 .14 3.7a5.4 5.4 0 0 1 1.44 3.76c0 5.38-3.27 6.56-6.39 6.91a3.33 3.33 0 0 1 .95 2.59v3.84c0 .46.25.81 1 .67A14 14 0 0 0 16 2z" fillRule="evenodd" fill="currentColor" />
                            </svg>
                        </a>
                        <a
                            href="https://www.linkedin.com/in/sebaspv/"
                            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 32 32" className="h-6">
                                <path d="M26.21 4H5.79A1.78 1.78 0 0 0 4 5.73V26.2a1.77 1.77 0 0 0 1.79 1.73h20.42A1.77 1.77 0 0 0 28 26.2V5.73A1.78 1.78 0 0 0 26.21 4zm-15.1 20.41H7.59V13h3.52zm-1.72-13a2.07 2.07 0 0 1-2.07-2.02a2 2 0 0 1 2.07-2.07a2.07 2.07 0 0 1 0 4.13zm15.09 12.93H21v-5.58c0-1.33 0-3.06-1.86-3.06S17 17.16 17 18.63v5.65h-3.56V13h3.32v1.5h.07a3.72 3.72 0 0 1 3.39-1.86c3.59 0 4.26 2.4 4.26 5.45z" fill="currentColor" />
                            </svg>
                        </a>
                        <a
                            href="https://devpost.com/poncegramming"
                            className="text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            <svg xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 24 24" className="h-5">
                                <path d="M6.002 1.61L0 12.004L6.002 22.39h11.996L24 12.004L17.998 1.61zm1.593 4.084h3.947c3.605 0 6.276 1.695 6.276 6.31c0 4.436-3.21 6.302-6.456 6.302H7.595zm2.517 2.449v7.714h1.241c2.646 0 3.862-1.55 3.862-3.861c.009-2.569-1.096-3.853-3.767-3.853z" fill="currentColor"/>
                            </svg>
                        </a>
                    </div>
                </div>
                <div>
                    <img
                        className="object-cover w-full h-56 rounded shadow-lg sm:h-96"
                        src="https://res.cloudinary.com/dj4sgprga/image/upload/v1636565823/donruabastian_jn734z.jpg"
                        alt=""
                    />
                </div>
            </div>
        </div>
    )
}

export default Info
