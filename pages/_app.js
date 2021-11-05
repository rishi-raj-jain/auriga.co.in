import '@/styles/global.css'
import SEO from '@/components/Seo'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import { deploymentUrl } from '@/lib/data'
import { useEffect, useState } from 'react'

const MyApp = ({ Component, pageProps }) => {
  const [mounted, setMounted] = useState('print')
  useEffect(() => {
    setMounted('all')
  }, [])
  return (
    <>
      <SEO canonical={deploymentUrl}>
        <link
          media={mounted}
          rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,700&display=swap"
        />
      </SEO>
      <div className="bg-white text-black font-display flex flex-col items-center">
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </div>
    </>
  )
}

export default MyApp
