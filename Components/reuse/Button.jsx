import React from 'react'

export default function Button(props) {
    const {btn}= props
  return (
    <button className=' mt-6  text-white py-2 px-4 bg-blue-600 rounded-md transition-all' >{btn}</button>
  )
}
