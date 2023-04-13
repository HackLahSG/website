import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className={`titles footertxt bounce`}>Ready to hack?</h1>
      <Link href="/register"><input type="button" value="Register Now" className="RegButton footerbutton"></input></Link>
    <div>
        <p className={`infotext footbox disable-link`}>Made with ❤️ by the ️HackLah! Team &emsp;&emsp;HackLah! is fiscally sponsored by The Hack Foundation, a 501(c)(3) nonprofit. Our registered EIN is 81-2908499.</p>
    </div>
    </div>
  )
}

export default Footer
