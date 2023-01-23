import Header from './components/header'
import Body from './components/body'
import Footer from './components/footer'
import Head from 'next/head'

export default function Home() {
  return (
  <div className='bg'>
    <meta property="og:image" content="/images/preview.png" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <Header/>
    <Body/>
    <Footer/>
  </div>
  ) 
  }
