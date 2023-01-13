import Image from 'next/image' 
export default function Register() {
  return (
    <div className='bg'>
    <Image src="/images/logo.png" alt="Picture of the author" width={700} height={250} className="logo" />
    <h1 className='regtext'>Let&apos;s get you registered!</h1>
    <div className='email'>
    <h1>Email</h1>
    <input type='text'></input>
    </div> 
    <div className='fullname'>
    <h1>Full name</h1>
    <input type='text'></input>
    </div>
    </div>
  ) 
}