import React, { useCallback, useState } from 'react'
import Navbaritem from './Navbaritem';
import Mobilemenu from './Mobilemenu';
import { GiHamburgerMenu } from "react-icons/gi";




const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const toggleMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    },[setShowMobileMenu])
  return (
    <nav className='w-full z-40'>
        <div className='px-4 md:px-16 py-4 flex flex-row justify-end transition duration-500 bg-blue-900 fixed w-full'>          
            {/* Large Screen */}
            <div className='flex-row  gap-7 hidden lg:flex uppercase font-semibold'>
            <Navbaritem label='Home'/>
            <Navbaritem label='Skills'/>
            <Navbaritem label='Projects'/>
          
            </div>
            {/* Small Screen */}
            <div className='lg:hidden cursor-pointer relative uppercase font-semibold'>               
                <GiHamburgerMenu className='text-white transition' onClick={toggleMenu}/>
                <Mobilemenu visible={showMobileMenu}/>
            </div>
          
        </div>
    </nav>
  )
}

export default Navbar