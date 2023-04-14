import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Marquee from 'react-fast-marquee';

const Body = () => {
  return (
    <div>
      <h1 className="titles title1 bounce">What is HackLah!?</h1>
      <h2 className="infotext infotext1">
        HackLah! is a full-day hackathon event hosted by students, for students around the tiny red dot — Singapore. Come together to build projects and share them with the world!
        Let&apos;s make one thing clear: we don&apos;t mean hack as in gain unauthorized access and take things, we mean create and tinker something new.
      </h2>
      <Image src={"/images/image1.png"} id='image1'alt="image1" width={530} height={300} className='image1 max-w-full h-auto'/>
      <h1 className="titles details bounce">Details</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5632.912827907666!2d103.82352216397369!3d1.2528980125220164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da19557bd3cdd1%3A0x4738e8af5f70f2c2!2sBattlestar%20Galactica!5e0!3m2!1sen!2ssg!4v1673619662790!5m2!1sen!2ssg"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-container"
      />
      <h2 className="infotext detailstext">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </h2>
      <Image src={"/images/FAQ.png"} alt="Frequently Asked Questions" width={530} height={300} className="faq-container"/>
      <div className="center">
        <h1 className="titles sponsors">Sponsors:</h1>
      </div>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
      <Link href="https://www.hudsonrivertrading.com/"><Image src={"/images/hrt.svg"} alt="hrt" width={210} height={123} style={{paddingTop: 90}} className="bounce" /></Link>
      </div>
      <Marquee speed={40} gradient={false}>
        <div className="images">
          <Link href="https://gen.xyz/"><Image src={"/images/xyz.png"} alt=".xyz" width={210} height={123} style={{paddingLeft: 60}} className="" /></Link>
          <Link href="https://artofproblemsolving.com/online"><Image src={"/images/aops.png"} alt="Art of Problem Solving" width={250} height={100} style={{paddingLeft: 60}} className="" /></Link>
          <Link href="https://www.taskade.com/"><Image src={"/images/taskade.png"} alt="Taskade" width={123} height={123} style={{paddingLeft: 60}} className="" /></Link>
          <Link href="https://www.leading-learners.com/"><Image src={"/images/LL.png"} alt="Leading Learners" width={492} height={123} style={{paddingLeft: 60}} className="" /></Link>
          <Link href="https://www.echo3d.com/"><Image src={"/images/echo3D.png"} alt="Echo3D" width={250} height={40} style={{paddingLeft: 60, paddingBottom: 30}} className="" /></Link>
          <Link href="https://1password.com/"><Image src={"/images/1p.png"} alt="1Password" width={123} height={123} style={{paddingLeft: 60}} className="" /></Link>
          <Link href="https://tiiny.host/"><Image src={"/images/th.png"} alt="Tiinyhost" width={250} height={80} style={{paddingLeft: 60, paddingBottom: 30}} className="" /></Link>

        </div>
      </Marquee>
      <p className="infotext prospectus">
        Want to support us? Read our sponsorship <Link href="https://drive.google.com/file/d/1FnQeNZlfaIBwlwxDYzhMCnBtcm333man/view?usp=sharing">prospectus</Link> and then reach out to us at <Link href="mailto: aarav@hacklah.com">aarav@hacklah.com</Link>
        or donate <Link href='https://bank.hackclub.com/donations/start/hacklahsg'>here</Link>.
      </p>
      <Link href="https://hackclub.com/bank/"><Image src={"/images/hcb.png"} alt="Hack Club Bank" width={530} height={300} className="hcb"/></Link>
    </div>
  )
}

export default Body
