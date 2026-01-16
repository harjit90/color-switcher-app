import React, { useState } from 'react'
import './App.css'
import Button from './components/Button'
import CardBox from './components/CardBox';

function App() {

  const colors = ['#FEEFF9', '#10a46e', '#f4a584', '#ffa330', '#ff8053', '#b6baf9', '#5c5db9', '#d582ae'];

  const [selectedColor, setSelectedColor] = useState('transaprent');

  function resetColor() {
    setSelectedColor();
  }


  return (
    <>
      <div className='w-screen h-screen flex max-sm:w-full max-sm:block max-sm:bg-white'>
        <h2 className='text-[#333333] text-3xl max-sm:text-2xl text-center w-full py-6 max-sm:py-4 absolute bg-[#ffffff] top-0 left-0 right-0 m-auto z-20 uppercase font-medium max-sm:sticky'>Colour Switcher App</h2>
        <div style={{ backgroundColor: selectedColor }} className='w-1/2 max-sm:w-full h-screen max-sm:h-auto p-14 max-sm:p-5 pe-0 text-center bg-white '>
          <div className='flex items-center justify-center h-full max-sm:h-auto max-sm:w-full'>
            <div className='flex items-center justify-center gap-2 m-auto flex-wrap max-sm:h-auto'>
              {
                colors.map((item) => {
                  return (
                    <Button key={item} color={item} setSelectedColor={setSelectedColor}>
                      {item}
                    </Button>
                  )
                })
              }
            </div>
          </div>
        </div>

        <div className='w-1/2 max-sm:w-full h-screen max-sm:h-auto m-auto flex items-center bg-white relative max-sm:block max-sm:py-6'>
          <CardBox color={selectedColor} />
          <button className='bg-[red] text-[#ffffff] rounded-full absolute max-sm:relative right-0 left-0 bottom-40 max-sm:bottom-0 w-25 h-10 m-auto max-sm:block max-sm:mt-5' onClick={resetColor}>Reset</button>
        </div>
      </div>


    </>
  )
}


export default App
