import React from 'react'
import Pharmacy from '../assets/pharmacists.jpg'
import mobile from '../assets/mobile_App.jpg'
import nlp from '../assets/nlp.jpg'
import ml from '../assets/MachineLearning.jpg'



const Work = () => {
  return (
    <div name='work' className='w-full bg-[#0a192f] text-gray-300 md:h-full'>
      <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='inline text-4xl border-b-4 border-pink-500 font-bold text-gray-300'>Work</p>
                <p className='py-6'>check out some of my recent work</p>
            {/* container */}
            <div className='grid sm:grid-cols-2 md:grid-cols-2 gap-4'>

              {/* grid item */}
                <div style={{backgroundImage: `url(${Pharmacy})`}}
                 className='text-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                          Pharmacy Storage Management website
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Rachid-Mek/storageManagement' target='blank'>
                              <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                      </div>
                    </div>
                    {/* item 2 */}

                    <div style={{backgroundImage: `url(${mobile})`}}
                 className='text-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                          Flutter development
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Rachid-Mek/App' target='blank'>
                              <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                      </div>
                    </div>

                    {/* item 3 */}
                    <div style={{backgroundImage: `url(${nlp})`, backgroundSize: 'cover'}}
                 className='text-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                          Naturel language processing Project
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Rachid-Mek/Spam-Detection' target='blank'>
                              <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                      </div>
                    </div>

                    {/* item 4 */}
                    <div style={{backgroundImage: `url(${ml})`, backgroundSize: 'cover'}}
                 className='text-center shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div '>
                    {/* hover effects */}
                    <div className='opacity-0 group-hover:opacity-100'>
                        <span className='text-2xl font-bold text-white tracking-wider'>
                          developing Machine learning models
                        </span>
                        <div className='pt-8 text-center'>
                            <a href='https://github.com/Rachid-Mek/IARN' target='blank'>
                              <button className='text-center bg-white rounded-lg px-4 py-3 m-2 text-gray-700 font-bold text-lg'>Code</button>
                            </a>
                        </div>
                      </div>
                    </div>
                </div>
            </div>
       </div>
    </div>
  )
}
export default Work