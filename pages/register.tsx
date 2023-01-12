import Image from 'next/image' 
export default function Register() {
  return (
    <div className='bg'>
    <Image src="/images/logo.png" alt="Picture of the author" width={700} height={250} className="logo" />
    <h1 className='regtext'>Let's get you registered!</h1>
    <h1 className='dear'>Dear Hacker, we are extremely excited to meet you at Hacklah! Please fill out the registration<br/>form below</h1>
    </div>
  ) 
}