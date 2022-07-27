import React from 'react'

function Contact() {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center">
        <form action="https://getform.io/f/9cde4c17-9e59-441d-9ea8-88ba623eb6bd" method="POST" className="flex flex-col max-w-[1000px] w-full mx-auto p-4">
            <div className="pb-10">
                <p className="text-4xl font-bold inline border-b-8 border-pink-600 text-gray-300">Contact</p>
                <p className="text-gray-300 py-4"> Submit the form below or submit a message to shoryaoct20@gmail.com</p>
            </div>
            <input className="p-2" placeholder="Name" type="text" name="name" />
            <input className="my-4 p-2 bg-[#ccd6f6]" placeholder="Email" type="email" name="email"/>
            <textarea name="message" rows="10" placeholder="Message" className="bg-[#ccd6f6] p-2"/>
            <button className='text-white border-2 text-lg hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>Let's collaborate!</button>
        </form>
    </div>
  )
}

export default Contact