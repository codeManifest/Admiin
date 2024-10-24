import React from 'react'

export default function Delete_popup() {
  return (
    <div className='h-200px w-1/3 rounded-lg shadow-lg '>
        <h1>Are you sure ?</h1>
        <div>
            <button className='py-2 px-3 text-white bg-blue-600 rounded-lg' >Cancel</button>
            <button className='py-2 px-3 text-white bg-red-600 rounded-lg' >Delete</button>
        </div>
    </div>
  )
}
