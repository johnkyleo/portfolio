import React from "react";

const Navbaritem = ({label, id}) => {

  return (
    <a href={`#${id}`} className='text-white cursor-pointer hover:text-black transition'>
        {label}
    </a>
  )
}

export default Navbaritem