import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-full bg-[#0a192f] flex justify-center items-center p-4 '>
        <form method='POST' action='https://getform.io/f/a433d964-6e83-4556-a947-7f918f66dfbd' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500 text-gray-300'>Contact</p>
                <p className='text-gray-300 py-4'>//submit the form below or send me an email</p>
            </div>
            <input className='bg-[#ccd6f6] p-2' type='text' placeholder='Name' name='name' />
            <input className=' my-4 bg-[#ccd6f6] p-2' type='email' placeholder='email' name='email'/>
            <textarea className='bg-[#ccd6f6] p-2' name='message' placeholder='Message' rows='5'></textarea>
            <button className='text-white border-2 hover:bg-pink-500 hover:border-pink-500 px-4 py-3 my-8 mx-auto flex items-center'>Submit</button>
        </form>
    </div>
  )
}
export default Contact