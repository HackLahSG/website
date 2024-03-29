import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

const Footer = () => {
  return (
    <div className='footer'>
      <h1 className={`titles footertxt bounce`}>Ready to hack?</h1>
      <Link href="/register"><button className="footerbutton" style={{marginLeft:"2%"}}>Register</button></Link>
<div style={{ display: "flex", justifyContent: "space-between" }}>
  <p className={`infotext footbox disable-link`} style={{ marginRight: "auto", width: "100%", fontSize:"2"}}>
    HackLah! is fiscally sponsored by The Hack Foundation, a 501(c)(3) nonprofit. Our registered EIN is 81-2908499.
  </p>
</div>

    </div>
  )
}

export default Footer
