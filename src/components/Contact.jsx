import React from 'react'

function Contact() {
  return (
    <div name="contact" className="w-full h-screen bg-[#0a192f] flex justify-center items-center">
        <form action="" className="flex flex-col max-w-[1000px] w-full mx-auto p-4">
            <div className="pb-10">
                <p className="text-4xl font-bold inline border-b-8 border-pink-600 text-gray-300">Contact</p>
                <p className="text-gray-300 py-4"> Submit the form below or submit a message to shoryaoct20@gmail.com</p>
            </div>
            <input placeholder="Name" type="text" name="name" />
            <input className="" placeholder="Email" type="email" name="email"/>
            <input placeholder="Message" type="text" name="message" />
        </form>
    </div>
  )
}

export default Contact