import React from 'react'
import Image from 'next/image'


const Header = () => {
  return (
    <div>
      <Image src={'/images/hero.jpg'} alt="Picture of the author" width={1300} height={700} />
    </div>
  )
}

export default Header
