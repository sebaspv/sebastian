import React from 'react'

function Footer() {
    return (
        <div className="px-4 pt-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
            <div className="flex flex-col-reverse justify-between pt-5 pb-10 border-t lg:flex-row">
                <p className="text-sm text-gray-600">
                    Made by Sebastian Ponce under the GNU LGPLv3 License.
                </p>
                <ul className="flex flex-col mb-3 space-y-2 lg:mb-0 sm:space-y-0 sm:space-x-5 sm:flex-row">
                    <li>
                        <a
                            href="https://github.com/sebaspv"
                            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            GitHub
                        </a>
                    </li>
                    <li>
                        <a
                            href="https://www.linkedin.com/in/sebaspv"
                            className="text-sm text-gray-600 transition-colors duration-300 hover:text-deep-purple-accent-400"
                        >
                            LinkedIn
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Footer
