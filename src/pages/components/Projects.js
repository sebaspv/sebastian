import React from 'react'
const Projects = () => {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-24">
            <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
                <h2 className="font-poppins max-w-lg mb-6 text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto"> 
                    Check out my highlighted projects!
                </h2>
                <p className="text-base text-gray-700 md:text-lg">
                    Many of these projects were made for a Hackathon over the span of 1 or 2 days. However, I'm proud of what I got to build, and I hope you like it too!
                </p>
            </div>
            <div className="grid gap-8 lg:grid-cols-3 sm:max-w-sm sm:mx-auto lg:max-w-full">
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_photos/001/697/947/datas/gallery.jpg"
                        className="object-cover w-full h-32"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                Hack the Valley V<br /><span className="font-light">2nd Place Overall</span>
                        </p>
                        <a
                            href="https://devpost.com/software/medicaid-3f2er5"
                            aria-label="Category"
                            title="My MedicAid"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            My MedicAid
                        </a>
                        <p className="mb-2 text-gray-700 text-xs">
                            An AI-assisted patient management software that uses APIs to predict diseases.
                        </p>
                        <a
                            href="https://devpost.com/software/medicaid-3f2er5"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/682/068/datas/medium.png"
                        className="object-cover w-full h-32"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                Data Day Grind 2<br /><span className="font-light">2nd Place Overall</span>
                        </p>
                        <a
                            href="https://devpost.com/software/collegeloans"
                            aria-label="Category"
                            title="CollegeLoans"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            CollegeLoans
                        </a>
                        <p className="mb-2 text-gray-700 text-xs">
                            An all-in-one platform for college planning and college debt predicting.
                        </p>
                        <a
                            href="https://devpost.com/software/collegeloans"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
                <div className="overflow-hidden transition-shadow duration-300 bg-white rounded shadow-sm">
                    <img
                        src="https://challengepost-s3-challengepost.netdna-ssl.com/photos/production/software_thumbnail_photos/001/708/040/datas/medium.png"
                        className="object-cover w-full h-32"
                        alt=""
                    />
                    <div className="p-5 border border-t-0">
                        <p className="mb-3 text-xs font-semibold tracking-wide uppercase">
                                Hack Around the World<br /><span className="font-light">3rd Place Overall</span>
                        </p>
                        <a
                            href="https://devpost.com/software/easytravel-iscyl0"
                            aria-label="Category"
                            title="CollegeLoans"
                            className="inline-block mb-3 text-2xl font-bold leading-5 transition-colors duration-200 hover:text-deep-purple-accent-700"
                        >
                            EasyTravel
                        </a>
                        <p className="mb-2 text-gray-700 text-xs">
                            A culture sharing platform made for tourists and locals to interact and share advice.
                        </p>
                        <a
                            href="https://devpost.com/software/easytravel-iscyl0"
                            aria-label=""
                            className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                        >
                            Learn more
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projects