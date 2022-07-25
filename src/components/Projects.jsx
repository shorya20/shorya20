import React from 'react'

function Projects() {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300 ">
        <div className="max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full"> 
            <div className="pb-6">
                <p className="text-4xl py-4 font-bold inline border-b-8 border-pink-600">Projects</p>
                <p className="py-10">Check out my recent projects: </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div className="">
                    <div>
                        <span>

                        </span>
                        <div>
                            <a href="/">
                                <button></button>
                            </a>
                            <a href="">
                                <button></button>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Projects