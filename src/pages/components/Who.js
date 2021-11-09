import React from 'react'

function Who() {
    return (
        <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
            <div className="flex flex-col lg:flex-row">
                <div className="max-w-xl pr-16 mx-auto mb-10">
                    <h5 className="mb-6 text-3xl font-extrabold leading-none">
                        Some of my skills
                    </h5>
                    <p className="mb-6 text-black">
                        I've been programming for +2 years, so I've focused on many areas, and therefore
                        have knowledge in many types of frameworks that work in different developing
                        environments. However, I'm always learning and I love expanding my knowledge into
                        things I don't know about.
                    </p>
                </div>
                <div className="grid gap-5 row-gap-5 sm:grid-cols-2">
                    <div className="max-w-md">
                        <h6 className="mb-2 font-semibold leading-5">Machine Learning</h6>
                        <p className="text-sm text-gray-700">
                            Machine Learning is my main skill. I have worked for 2 years on areas like
                            model training, serving, and deployment to web and IoT solutions. 
                        </p>
                    </div>
                    <div className="max-w-md">
                        <h6 className="mb-2 font-semibold leading-5">When has justice</h6>
                        <p className="text-sm text-gray-700">
                            Rough pomfret lemon shark plownose chimaera southern sandfish
                            kokanee northern sea robin Antarctic cod. Yellow-and-black
                            triplefin.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <h6 className="mb-2 font-semibold leading-5">Organically grow</h6>
                        <p className="text-sm text-gray-700">
                            A slice of heaven. O for awesome, this chocka full cuzzie is as
                            rip-off as a cracker. Meanwhile, in behind the bicycle shed,
                            Hercules.
                        </p>
                    </div>
                    <div className="max-w-md">
                        <h6 className="mb-2 font-semibold leading-5">A slice of heaven</h6>
                        <p className="text-sm text-gray-700">
                            Disrupt inspire and think tank, social entrepreneur but
                            preliminary thinking think tank compelling. Inspiring, invest
                            synergy capacity.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Who
