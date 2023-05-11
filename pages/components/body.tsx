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
      <div id ="details">
      <h1 className="titles details bounce">Details</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d68311732.23868714!2d-25.10425640886043!3d41.581486936047924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2ssg!4v1683446403663!5m2!1sen!2ssg"
        referrerPolicy="no-referrer-when-downgrade"
        className="map-container"
      />
      <h2 className="infotext detailstext">
        HackLah! would be hosted online using Video Conferencing platforms such as <a href='https://zoom.com'>Zoom</a> and <a href='https://discord.gg/e42r5nFj7X'>Discord</a>. <br/> <br/>We will be using <a href='https://hacklah.devpost.com/'>Devpost</a> for project submissions.
      </h2>
      </div>
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
<div className="icon-container">
  <a href="https://github.com/HackLahSG/" target="_blank" rel="noreferrer">
    <svg className="pfplink" viewBox="0 0 24 24" width="10vw" height="10vw">
      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
    </svg>
  </a>
  <a href="https://instagram.com/aaravmal1k?igshid=YmMyMTA2M2Y=" target="_blank" rel="noreferrer">
    <svg className="pfplink" viewBox="0 0 24 24" width="10vw" height="10vw">
      <path d="M17.34,5.46h0a1.2,1.2,0,1,0,1.2,1.2A1.2,1.2,0,0,0,17.34,5.46Zm4.6,2.42a7.59,7.59,0,0,0-.46-2.43,4.94,4.94,0,0,0-1.16-1.77,4.7,4.7,0,0,0-1.77-1.15,7.3,7.3,0,0,0-2.43-.47C15.06,2,14.72,2,12,2s-3.06,0-4.12.06a7.3,7.3,0,0,0-2.43.47A4.78,4.78,0,0,0,3.68,3.68,4.7,4.7,0,0,0,2.53,5.45a7.3,7.3,0,0,0-.47,2.43C2,8.94,2,9.28,2,12s0,3.06.06,4.12a7.3,7.3,0,0,0,.47,2.43,4.7,4.7,0,0,0,1.15,1.77,4.78,4.78,0,0,0,1.77,1.15,7.3,7.3,0,0,0,2.43.47C8.94,22,9.28,22,12,22s3.06,0,4.12-.06a7.3,7.3,0,0,0,2.43-.47,4.7,4.7,0,0,0,1.77-1.15,4.85,4.85,0,0,0,1.16-1.77,7.59,7.59,0,0,0,.46-2.43c0-1.06.06-1.4.06-4.12S22,8.94,21.94,7.88ZM20.14,16a5.61,5.61,0,0,1-.34,1.86,3.06,3.06,0,0,1-.75,1.15,3.19,3.19,0,0,1-1.15.75,5.61,5.61,0,0,1-1.86.34c-1,.05-1.37.06-4,.06s-3,0-4-.06A5.73,5.73,0,0,1,6.1,19.8,3.27,3.27,0,0,1,5,19.05a3,3,0,0,1-.74-1.15A5.54,5.54,0,0,1,3.86,16c0-1-.06-1.37-.06-4s0-3,.06-4A5.54,5.54,0,0,1,4.21,6.1,3,3,0,0,1,5,5,3.14,3.14,0,0,1,6.1,4.2,5.73,5.73,0,0,1,8,3.86c1,0,1.37-.06,4-.06s3,0,4,.06a5.61,5.61,0,0,1,1.86.34A3.06,3.06,0,0,1,19.05,5,3.06,3.06,0,0,1,19.8,6.1,5.61,5.61,0,0,1,20.14,8c.05,1,.06,1.37.06,4S20.19,15,20.14,16ZM12,6.87A5.13,5.13,0,1,0,17.14,12,5.12,5.12,0,0,0,12,6.87Zm0,8.46A3.33,3.33,0,1,1,15.33,12,3.33,3.33,0,0,1,12,15.33Z" />
    </svg>
  </a>
  <a href="https://www.linkedin.com/company/hacklah/" target="_blank" rel="noreferrer">
    <svg className="pfplink" viewBox="0 0 24 24" width="10vw" height="10vw">
      <path d="M20.47,2H3.53A1.45,1.45,0,0,0,2.06,3.43V20.57A1.45,1.45,0,0,0,3.53,22H20.47a1.45,1.45,0,0,0,1.47-1.43V3.43A1.45,1.45,0,0,0,20.47,2ZM8.09,18.74h-3v-9h3ZM6.59,8.48h0a1.56,1.56,0,1,1,0-3.12,1.57,1.57,0,1,1,0,3.12ZM18.91,18.74h-3V13.91c0-1.21-.43-2-1.52-2A1.65,1.65,0,0,0,12.85,13a2,2,0,0,0-.1.73v5h-3s0-8.18,0-9h3V11A3,3,0,0,1,15.46,9.5c2,0,3.45,1.29,3.45,4.06Z" />
    </svg>
  </a>
  <a href="https://twitter.com/hacklahSG" target="_blank" rel="noreferrer">
    <svg className="pfplink" viewBox="0 0 24 24" width="10vw" height="10vw">
      <path d="M22,5.8a8.49,8.49,0,0,1-2.36.64,4.13,4.13,0,0,0,1.81-2.27,8.21,8.21,0,0,1-2.61,1,4.1,4.1,0,0,0-7,3.74A11.64,11.64,0,0,1,3.39,4.62a4.16,4.16,0,0,0-.55,2.07A4.09,4.09,0,0,0,4.66,10.1,4.05,4.05,0,0,1,2.8,9.59v.05a4.1,4.1,0,0,0,3.3,4A3.93,3.93,0,0,1,5,13.81a4.9,4.9,0,0,1-.77-.07,4.11,4.11,0,0,0,3.83,2.84A8.22,8.22,0,0,1,3,18.34a7.93,7.93,0,0,1-1-.06,11.57,11.57,0,0,0,6.29,1.85A11.59,11.59,0,0,0,20,8.45c0-.17,0-.35,0-.53A8.43,8.43,0,0,0,22,5.8Z" />
    </svg>
  </a>
</div>


      <Link href="https://hackclub.com/bank/"><Image src={"/images/hcb.png"} alt="Hack Club Bank" width={530} height={300} className="hcb"/></Link>
    </div>
  )
}

export default Body
