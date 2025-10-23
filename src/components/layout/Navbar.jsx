import { Sun } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import pfp from '../../assets/images/dev/dp.png'

const Navbar = () => {
  return (
    <div className='flex justify-between items-center bg-(--bgLight) z-40 sticky top-0  py-4 px-20'>
        {/* Profile pic and logo */}
        <div  className='flex items-center gap-4' id="dp">
        <div className='h-12 w-12 border bg-white border-gray-400 overflow-hidden rounded-full' id="pic">
        <img className='object-cover' src={pfp} alt="Dev pfp" />
        </div>
        <h1 className='font-logo text-2xl'>Sohaib</h1>
        </div>
        {/* Menu */}
        <div>
            <ul className='flex gap-8 font-inter'>
                <Link>Home</Link>
                <Link>Skills</Link>
                <Link>Projects</Link>
                <Link>About</Link>
            </ul>
        </div>
        {/* ThemeIcon and CTA */}
        <div className='flex items-center gap-4'>
            <Sun strokeWidth={1}/>
            <button className='bg-(--accent) p-2 px-6 text-(--textDark) rounded-full'>Resume</button>
        </div>
    </div>
  )
}

export default Navbar
