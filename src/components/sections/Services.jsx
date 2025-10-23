import React from 'react'
import webdev from '../../assets/images/illustrations/webdev.png'

const Services = () => {
    let services = [
        {id:1,title:'Responsive Web Design',img: webdev},
        {id:2,title:'Responsive Web Design',img: webdev},
        {id:3,title:'Responsive Web Design',img: webdev},
    ]
  return (
    <div className='flex flex-col items-center mt-8 pt-8 gap-16  px-24'>
      <h1 className='text-4xl font-bold font-dm'>Why Choose Me?</h1>
      <div className='flex flex-col gap-24 '>
        {/* Service */}
        {
            services.map(s =>{
                let isOdd = s.id%2 === 0;
                return (
                     <div className={`flex ${isOdd ?'flex-row-reverse':''} gap-44 justify-between items-center`}>
        <div className='w-[350px] h-[300px] object-cover overflow-hidden rounded-md ' id="image">
            <img className='w-full h-full grayscale-100' src={webdev} alt="" />
        </div>
        <div className='flex flex-col gap-4 flex-1' id="text">
            <h1 className='text-2xl text-(--textLight) font-dm font-bold'>Responive Web Design</h1>
            <p className='text-(--textSec) font-inter'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos ad cupiditate harum dolore est in nostrum magni, ut et cum, similique perferendis molestias animi odio alias voluptates praesentium. Magni illum beatae illo dolorum distinctio, labore voluptates est sunt voluptate.
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eos ad cupiditate harum dolore est in nostrum magni, ut et cum, similique perferendis molestias animi odio alias voluptates praesentium. Magni illum beatae illo dolorum distinctio, labore voluptates est sunt voluptate.
            </p>
        </div>
          </div>
                )
            })
        }

      </div>
    </div>
  )
}

export default Services
