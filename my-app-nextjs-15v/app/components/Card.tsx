import React from 'react'

const Card = ({children}: {children: React.ReactNode}) => {
  return (
    <div className='border-1 p-[100px] m-[10px] shadow-[0 4px 8px rgba(0,0,0.2)] border-red-700'>
        {children}
    </div>
  )
}

export default Card