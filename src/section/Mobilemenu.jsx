import React from 'react';

const Mobilemenu = ({visible}) => {
    if(!visible){
        return null;
    }
  return (
    <div className='bg-black w-56 absolute top-8 right-0 py-3 flex-col border-gray-800 flex z-10 bg-opacity-50 border-t-slate-500'>
        <div className='flex flex-col gap-4'>
            <div className='px-3 text-center text-white hover:underline'>
                Home
            </div>
            <div className='px-3 text-center text-white hover:underline'>
                Skills
            </div>
            <div className='px-3 text-center text-white hover:underline'>
                Projects
            </div>          
        </div>
    </div>
  )
}

export default Mobilemenu