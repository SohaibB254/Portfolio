import { ArrowDown, Moon, Sun } from 'lucide-react'
import React from 'react'
import { Link } from 'react-router-dom'
import pfp from '../../assets/images/dev/dp.png'
import { useTheme } from "../../context/ThemeContext";

const Navbar = () => {
  const { toggleTheme,theme } = useTheme()
  return (
    <div className='flex justify-between items-center bg-(--bgLight) z-40 sticky top-0  py-4 px-20'>
        {/* Profile pic and logo */}
        <div  className='flex items-center gap-4' id="dp">
        <div className='h-12 w-12 border bg-(--sectionLight) border-gray-400 overflow-hidden rounded-full' id="pic">
        <img className='object-cover' src={pfp} alt="Dev pfp" />
        </div>
        <h1 className='font-logo text-(--textLight) text-2xl'>Sohaib</h1>
        </div>
        {/* Menu */}
        <div>
            <ul className='flex gap-8 text-(--textLight) font-inter'>
                <Link to={'/'}>Home</Link>
                <Link to={'/devskills'}>Skills</Link>
                <Link to={'/projects'}>Projects</Link>
                <Link to={'/about'}>About</Link>
            </ul>
        </div>
        {/* ThemeIcon and CTA */}
        <div className='flex text-(--textLight) items-center gap-4'>
            {
              theme === 'light' &&
            <Sun size={18} onClick={toggleTheme} strokeWidth={1}/>
            }
            {
              theme === 'dark' &&
            <Moon size={18} onClick={toggleTheme} strokeWidth={1}/>
            }
            <button className='bg-(--accent) font-inter hover:bg-[#744cd1] transition cursor-pointer active:shadow-sm shadow-black/70 p-2 px-6 text-(--textDark) rounded-full'>Resume</button>
        </div>
    </div>
  )
}

export default Navbar
