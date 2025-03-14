import React from 'react'

const Tasklist = () => {
  return (
    <div id='tasklist'className='h-50  overflow-x-auto w-full  mt-10 py-5 flex gap-5 flex-nowrap justify-start text-white'> 
      <div className='h-full p-3 flex-shrink-0 w-60 bg-yellow-400 rounded-xl '>
            <div className='flex justify-between items-center text-small'>
                <h3 className='bg-red-600 text-sm  px-2 py-0.5 rounded'>High </h3>
                <h4 className='text-sm' >26 Feb 2025</h4>
            </div>
            <h2 className='mt-1 text-xl font-bold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis rerum omnis voluptate, pariatur vel placeat.</p>
     </div>
     <div className='h-full p-3 flex-shrink-0 w-60 bg-red-400 rounded-xl '>
            <div className='flex justify-between items-center text-small'>
                <h3 className='bg-red-600 text-sm  px-2 py-0.5 rounded'>High </h3>
                <h4 className='text-sm' >26 Feb 2025</h4>
            </div>
            <h2 className='mt-1 text-xl font-bold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis rerum omnis voluptate, pariatur vel placeat.</p>
     </div>
     <div className='h-full p-3 flex-shrink-0 w-60 bg-blue-400 rounded-xl '>
            <div className='flex justify-between items-center text-small'>
                <h3 className='bg-red-600 text-sm  px-2 py-0.5 rounded'>High </h3>
                <h4 className='text-sm' >26 Feb 2025</h4>
            </div>
            <h2 className='mt-1 text-xl font-bold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis rerum omnis voluptate, pariatur vel placeat.</p>
     </div>
     <div className='h-full p-3 flex-shrink-0 w-60 bg-green-400 rounded-xl '>
            <div className='flex justify-between items-center text-small'>
                <h3 className='bg-red-600 text-sm  px-2 py-0.5 rounded'>High </h3>
                <h4 className='text-sm' >26 Feb 2025</h4>
            </div>
            <h2 className='mt-1 text-xl font-bold'>Make a youtube video</h2>
            <p className='text-sm mt-2'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis rerum omnis voluptate, pariatur vel placeat.</p>
     </div>
    </div>
  )
}
export default Tasklist


