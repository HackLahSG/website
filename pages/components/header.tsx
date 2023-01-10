import React from 'react'
import Image from 'next/image'


const Header = () => {
  return (
    <div>
      <Image src={'/images/hero.jpg'} alt="Lion" width={1300} height={700} className="grid-container"/>
    </div>
  )
}

export default Header
