import React from 'react'

const Button = ({ color, setSelectedColor, children }) => {

  function setColor() {
    setSelectedColor(color);
  }

  return (
    <>
      <button onClick={setColor} style={{ backgroundColor: color }} className='size-30 max-sm:size-20 max-md:size-20 uppercase rounded-2xl mb-4 border border-black/20 hover:border-2 hover:drop-shadow-2xl max-sm:text-2xl max-sm:mb-0'>{children}</button>
    </>
  )
}


export default Button
