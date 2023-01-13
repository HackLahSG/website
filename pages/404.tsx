import Image from 'next/image'
import Link from 'next/link';

export default function Custom404() {
    
    return (
        <div>
        <Image src="/images/404.png" alt="404" width={438}  height={160} className='img404'/>
        <Link href="/"><input type="button" value="Return to home" className={`RegButton img404`}></input></Link>
        </div>
    )
  }