import React from 'react'
import spinner from './spinner.png'
import '../stylesshets/spinner.css'

const Spinner = () => {
  return (
    <div className='spinnercontainer'>
        <img className='spinner' src={spinner}/>
    </div>
  )
}

export default Spinner