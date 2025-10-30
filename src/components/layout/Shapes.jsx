import React from 'react'

const Shapes = () => {
  return (
    <>
      <p className="text-left text-xs block z-10 text-(--textMini)">
        &#123; Colors are distracting &#125;
      </p>
    <div className='w-[20vw] h-[20vw] rounded-full absolute top-[30vh] -z-10 -left-[10vw] bg-(--shapeLight)'>
    </div>
    <div className='border-t-0'></div>
    </>
  )
}

export default Shapes
