import React from 'react'
import "./App.css"
export default function Navbar({setImageUrl}) {
  return (
    <div className='nav'>
    <h1>Photo Editor</h1>
    <input placeholder='Image Link' onChange={(e)=>{setImageUrl(e.target.value)}}/>
    </div>
  )
}
