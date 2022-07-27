import React from 'react'
import FDM from '../assets/FDM.png';
import Weather from '../assets/weather_app.png';
function Projects() {
  return (
    <div name="work" className="bg-[#0a192f] w-full md:h-screen text-gray-300 ">
        <div className="max-w-[1000px] mx-auto p-4 mx-auto flex flex-col justify-center w-full h-full"> 
            <div className="pb-6">
                <p className="text-4xl py-4 font-bold inline border-b-8 border-pink-600">Projects</p>
                <p className="py-10">Check out my recent projects: </p>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
                <div style={{backgroundImage:`url(${FDM})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto wellbeing">
                    <div className="opacity-0 group-hover:opacity-100">
                        <span className="text-lg font-bold text-[#384014] tracking-wider">
                            FDM Wellbeing App
                        </span>
                        <div className="pt-8 text-center">
                            <a href="https://github.research.its.qmul.ac.uk/ec20499/wellbeing_fdm">
                                <button className="rounded-lg px-4 text-center py-3 m-2 bg-pink-600 text-white font-bold text-md">Code</button>
                            </a>
                        </div>
                    </div>
                </div>
                <div style={{backgroundImage:`url(${Weather})`}} className="shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto fdm">
                    <div className="opacity-0 group-hover:opacity-100">
                            <span className="text-lg font-bold text-[#384014] tracking-wider">
                                Real-time weatherapp
                            </span>
                            <div className="pt-8 text-center">
                                <a href="https://github.com/shorya20/weather_app">
                                    <button className="rounded-lg px-4 text-center py-3 m-2 bg-pink-600 text-white font-bold text-md">Code</button>
                                </a>
                                <a href="https://shorya20.github.io/weather_app/">
                                    <button className="rounded-lg px-4 text-center py-3 m-2 bg-pink-600 text-white font-bold text-md">Demo</button>
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