import React from 'react'

const Input = () => {
  return (
    <div className='w-full'>
        <label className='relative block cursor-text w-full'>
            <input type="email" className='h-14 w-full border-primary border-[1px] outline-none px-4 peer pt-2' required/>
            <span className='absolute top-0 left-0 px-2 h-full flex items-center text-sm peer-focus:h-7 peer-focus:text-xs peer-valid:h-7 peer-valid:text-xs transition-all'>Email</span>
        </label>
    </div>
  )
}

export default Input 