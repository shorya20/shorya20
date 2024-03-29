import React from 'react'
import {HiArrowNarrowRight} from 'react-icons/hi';
import {Link} from 'react-scroll'
const Home = () => {
  return (
    <div name="Home" className="bg-[#0a192f] w-full h-screen">
        {/*Name/Info Container*/}
        <div className="max-w-[1000px] mx-auto h-full px-10 flex flex-col justify-center">
          <p className="text-pink-600">Hi, my name is</p>
          <h1 className="text-4xl sm:text-7xl font-bold text-[#bcbfc7]">Shorya Sinha.</h1>
          <h2 className="text-4xl sm:text-7xl font-bold text-[#ccd6f6]">I'm an aspiring developer,</h2>
          <p className="text-[#8892b0] py-4 max-w-[700px]">currently looking for a fulltime position in the field of software development.</p>
          <div>
            <button className="button-animation duration-300 border-2 px-6  text-white flex items-center py-4 hover:bg-pink-600 hover:border-pink-600">
                <Link to="work"  smooth={true} offset={50} duration={500} >
                View Work
                </Link>
              <span><HiArrowNarrowRight className="ml-2 duration-300"/>
              </span>
              </button>
          </div>
        </div>
    </div>
  )
}

export default Home