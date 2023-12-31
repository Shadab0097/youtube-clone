import React from 'react'

const Button = ({name}) => {
  return (
    <div>
        <button className='px-3 py-2 m-1.5 bg-gray-200 rounded-lg text-sm '>{name}</button>
    </div>
  )
}

export default Button