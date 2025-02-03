import React, { useCallback, useState } from 'react'
import Mobilemenu from './Mobilemenu';
import { GiHamburgerMenu } from "react-icons/gi";
import Navbaritem from './Navbaritem';


const Navbar = () => {

    const [showMobileMenu, setShowMobileMenu] = useState(false)

    const toggleMenu = useCallback(() => {
        setShowMobileMenu((current) => !current);
    },[setShowMobileMenu])

  return (
    <nav className='w-full z-40'>
        <div className='px-4 lg:px-16 py-4 flex flex-row justify-end transition duration-500 bg-blue-600 fixed w-full'>          
            {/* Large Screen */}
            <div className='flex-row  gap-7 hidden lg:flex font-medium'>
            <Navbaritem label='Home' id='home'/>
            <Navbaritem label='Skills' id='skills'/>
            <Navbaritem label='Projects' id='project'/>
            <Navbaritem label='Contact' id='contact'/>
          
            </div>
            {/* Small Screen */}
            <div className='lg:hidden'>               
                <GiHamburgerMenu className='text-white transition' onClick={toggleMenu}/>
                <Mobilemenu visible={showMobileMenu}/>
            </div>
          
        </div>
    </nav>
  )
}

export default Navbar