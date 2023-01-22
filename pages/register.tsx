import Image from 'next/image' 
export default function Register() {
  return (
    <div className="bg">
    <Image src={"/images/logo.png"} alt="logor" width={700} height={250} className="logo" />
    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLScWmtThZlEbIszOLOUUH5yModrGSozj1Yz_8wXRIhEyUQ3_JQ/viewform?embedded=true" width="640" height="1400" className="form">Loading…</iframe>
    </div>
  ) 
}