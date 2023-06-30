import React from 'react'
import HTML from '../assets/HTML5.png'
import CSS from '../assets/css3.png'
import Reactjs from '../assets/react.png'
import Tailwind from '../assets/Tailwind.png'
import python from '../assets/Python.png'
import Tensorflow from '../assets/Tensorflow.png'
import Java from '../assets/Java.png'
import Laravel from '../assets/laravel.png'
import Anaconda from '../assets/anaconda.png'
import Git from '../assets/Git.png'
import Jupyter from '../assets/Jupyter.png'
import C from '../assets/C.png'

const Skills = () => {
  return (
    <div name='Skills' className='w-full bg-[#0a192f] text-gray-300'>
        <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'> 
            <div>
                <p className='text-4xl font-bold inline border-b-4 border-pink-500'>Experience</p>
                <p className='py-4'>These are the technologies i've worked with</p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8'>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={HTML} alt="HTML icon"/>
                    <p>HTML</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={CSS} alt="Css icon"/>
                    <p>CSS3</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Reactjs} alt="React icon"/>
                    <p>ReactJs</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Laravel} alt="laravel icon"/>
                    <p>LARAVEL</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tailwind} alt="Tailwind icon"/>
                    <p>Tailwind</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={python} alt="Python icon"/>
                    <p>Python</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Java} alt="Java icon"/>
                    <p>Java</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={C} alt="C icon"/>
                    <p>C</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Git} alt="Git icon"/>
                    <p>Git</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Jupyter} alt="Jupyter icon"/>
                    <p>Jupyter</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-20 mx-auto' src={Tensorflow} alt="Tensorflow icon"/>
                    <p>Tensorflow</p>
                </div>
                <div className='shadow-md shadow-[#040c16] hover:scale-110 duration-500'>
                    <img className='w-40 mx-auto' src={Anaconda} alt="Anaconda icon"/>
                    <p>Anaconda</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Skills