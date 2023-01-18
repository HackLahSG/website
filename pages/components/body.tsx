import React from 'react'
import Image from 'next/image'

const Body = () => {
  return (

    <div>
        <h1 className={`titles title1`}>What is HackLah!?</h1>
        <h2 className={`infotext infotext1`}>HackLah! is a full-day hackathon event hosted by students, for students around the tiny red dot — Singapore. Come together to build projects and share them with the world!
        Let&apos;s make one thing clear: we don&apos;t mean hack as in gain unauthorized access and take things, we mean create and tinker something new.</h2>
        <Image src={"/images/image1.jpg"} alt="" width={530} height={300} className='image1 max-w-full h-auto'/>
        <h1 className={`titles details`}>Details</h1>
        <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5632.912827907666!2d103.82352216397369!3d1.2528980125220164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19557bd3cdd1%3A0x4738e8af5f70f2c2!2sBattlestar%20Galactica!5e0!3m2!1sen!2ssg!4v1673619662790!5m2!1sen!2ssg"
        width={453}
        height={375}
        style={{ border: 0, marginLeft:950, marginTop: 200}}
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"/>
        <h2 className={`infotext infotext2`}>hello</h2>
    </div>
  )
}

export default Body
