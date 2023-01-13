import React from 'react'
import Image from 'next/image'

const Body = () => {
  return (

    <div className='bg'>
        <h1 className={`titles title1`}>What is<br/>HackLah!?</h1>
        <h2 className={`infotext infotext1`}>HackLah! is a full-day hackathon event hosted by students, for students around the tiny red dot — Singapore. Come together to build projects and share them with the world!
        Let's make one thing clear: we don't mean hack as in gain unauthorized access and take things, we mean create and tinker something new.</h2>
        <Image src="/images/image1.jpg" alt="Picture of the author" width={530} height={228} className='image1'/>
        <h1 className={`titles title2`}>At HackLah!, 100+ of us will come together to...</h1>
    </div>
  )
}

export default Body
