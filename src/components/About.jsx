import React from 'react'

function About() {
  return (
    <div name="about" className="bg-[#0a192f] w-full h-screen text-gray-300">
        <div className="flex flex-col justify-center items-center w-full h-full">
            <div className="max-w-[1000px] w-full grid grid-cols-2 gap-8">
              <div className="sm:text-right pb-6 pl-5">
                <p className="text-4xl font-bold inline border-b-8 border-pink-600">About</p>
              </div>
              <div>

              </div>
            </div>
            <div className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4">
              <div>
                <p className='sm:text-right font-bold text-4xl'>22 years old, studying BSc Computer Science at Queen Mary University London, a Russell Group University</p>
              </div>
              <div>
                <p>I am incredibly passionate about applying my problem-solving, teamwork and leadership skills to the forefront. My ideal future consists of using my knowledge and skills to help improve people's livelihoods.
                </p>
              </div>
            </div>
        </div>
    </div>
  )
}

export default About