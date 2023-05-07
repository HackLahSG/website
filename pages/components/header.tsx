import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='header'>
      <Image src='/images/logo.png' alt='Logo' width={900} height={288} className='head-logo'/>
      <h2 className={`head-text h2a`} >Join us for a day of Hacking:</h2>
      <h1 className={`head-text h1a`} >3rd of June 1200hrs - 4th of June 1000hrs<br/>SGT</h1>
      <a href="#details"><h3 className={`head-text h3a`} >Online, Singapore </h3></a>
      <Link href="/register">
<button className='RegButton'>Register</button>
    </Link>
    </div>
  )
}

export default Header
