import React from 'react'
import Firebase from '../assets/firebase.png';
import Java from '../assets/java.png';
import Javascript from '../assets/javascript.png';
import Python from '../assets/python.png';
import ReactJS from '../assets/react.png';
import Node from '../assets/nodejs.png';
import Linux from '../assets/linux.png';
function Skills() {
  return (
    <div name="skills" className='bg-[#0a192f] w-full h-screen text-gray-300'>
        {/*Container*/}
        <div className='max-w-[1000px] mx-auto p-6 flex flex-col justify-center w-full h-full'>
            <div>
                <p className="text-4xl inline py-4 font-bold border-b-8 border-pink-600">
                    Skills
                </p>
                <p className="py-12"> Technologies I've worked with: </p>
            </div>   
            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className="flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={Firebase} alt="firebase" className="w-20 mx-auto"/>
                    <p className='my-4'>Firebase</p>
                </div>
                <div className="flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={Java} alt="java" className="w-20 mx-auto"/>
                    <p className='my-4'>Java</p>
                </div>
                <div className="flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={Javascript} alt="javascript" className="w-20 mx-auto" />
                    <p className='my-4'>Javascript</p>
                </div>
                <div className="flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={Python} alt="python" className="w-20 mx-auto" />
                    <p className='my-4'>Python</p>
                </div>
                <div className="flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={ReactJS} alt="react" className="w-20 mx-auto" />
                    <p className='my-4'>React</p>
                </div>
                <div className="flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={Node} alt="node" className="w-20 mx-auto" />
                    <p className='my-4'>NodeJS</p>
                </div>   
                <div className="flex flex-col shadow-md shadow-[#040c16] hover:scale-110 duration-500">
                    <img src={Linux} alt="linux" className="w-20 mx-auto" />
                    <p className='my-4'>Linux</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills