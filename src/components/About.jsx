import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-[#0a192f] text-gray-300'>
        <div className='flex flex-col justify-center items-center w-full h-screen'>
           <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
                <div className='sm:text-right pb-8 pl-4'>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500'>About</p>
                 </div>
                
            </div>
                <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
                    <div>
                        <p className='sm:text-right text-4xl font-bold '>Hi, I'm MEKDOUD Rachid </p>
                    </div>
                    <div>
                        <p>I'm an experienced programmer with over 4 years of expertise in complex algorithms, 
                            problem-solving, artificial intelligence, machine learning, deep learning, and web applications.
                            I excel in developing systems of varying complexity, specializing in web application design using 
                            Laravel and React. 
                            I am proficient in Python and Java, having created numerous applications using these languages
                            </p>
                    </div>

                </div>
         </div>
     </div>
  )
}

export default About