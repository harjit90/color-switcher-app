import React from 'react'

const CardBox = ({ color }) => {
  return (
    <>
      <div style={{ backgroundColor: color }} className='size-40 text-center content-center m-auto rounded-2xl border-black/30 border font-semibold uppercase'>{color}</div>
    </>
  )
}

export default CardBox
