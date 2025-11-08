import React from 'react'

const Shapes = () => {
  return (
    <>
      <p className="text-left text-xs block  z-0 text-(--textMini)">
        &#123; Colors are distracting &#125;
      </p>
    <div className='w-[20vw] h-[20vw] rounded-full absolute top-[30vh] -z-10 -left-[10vw] bg-(--shapeLight)'>
    </div>
    <div className='w-[15vw] h-[15vw] lg:block hidden rounded-full absolute top-[5vh] -z-10 -right-[10vw] bg-(--shapeLight)'>
    </div>
    </>
  )
}

export default Shapes
