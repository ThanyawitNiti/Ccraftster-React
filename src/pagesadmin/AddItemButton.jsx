import React from 'react'
import { Children } from 'react'

export default function AddItemButton({children, onClick }) {
  return (
    <button className='bg-cGreen shadow-lg shadow-cyan-500/50 flex flex-row rounded-lg py-2 px-2 items-center' onClick={onClick}>
        {children}
    </button>
  )
}
