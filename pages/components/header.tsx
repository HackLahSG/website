import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Header = () => {
  return (
    <div className='header'>
      <Image src='/images/logo.png' alt='Logo' width={900} height={288} className='head-logo'/>
      <h2 className={`head-text h2a`} >Join us for a day of Hacking</h2>
      <h1 className={`head-text h1a`} >  March 18th 2023 <br/>9:00am–9:00pm</h1>
      <h3 className={`head-text h3a`} >???, Singapore </h3>
      <Link href="/register"><input type="button" value="Register Now" className="RegButton"></input></Link>
    </div>
  )
}

export default Header
