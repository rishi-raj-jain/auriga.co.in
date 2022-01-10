import NextImage from 'next/image'
import { shimmer, toBase64 } from '@/lib/shimmer'

const tabs = [
  {
    href: 'https://energy.auriga.co.in',
    tagline: 'Renewable Energy Solutions',
    heading: 'Auriga Yo World',
    content:
      'We provide renewable energy solutions with competitive product quality as per the international standards and develop advanced products through cutting edge technology.    ',
    gradient: 'from-[#1e7e01] to-[rgb(30,126,1,0)] opacity-100',
    gradientMobile: 'from-[rgba(29,133,0,.7)] to-[rgba(29,133,0,.7)] opacity-100',
    mobile: 'https://auriga-gold.vercel.app/Back-Energy.jpg',
    image: 'https://auriga-gold.vercel.app/Back-Inside-Energy-2.jpg',
  },
  {
    href: 'http://inv.auriga.co.in',
    tagline: 'Financial Solutions',
    heading: 'Auriga Investment and Properties',
    content:
      'We at Auriga Investment believe that protection and growth of your financial assets, is a prime job and it needs to be addressed with lots of knowledge and proper planning.',
    gradientMobile: 'from-[#004e85b3] to-[#004e8573] opacity-100',
    mobile: 'https://auriga-gold.vercel.app/Back-Finance.jpg',
    image: 'https://auriga-gold.vercel.app/Back-Inside-Finance-2.jpg',
  },
  {
    href: 'https://ail.auriga.co.in',
    tagline: 'Innovative Solutions',
    heading: 'Auriga Innovative Labs',
    content:
      'At Auriga Innovative labs (P) Ltd. we are focused at solving problems of people with innovative ideas and by deploying new technologies!',
    gradientMobile: 'from-[#850000b3] to-[#85000047] opacity-100',
    mobile: 'https://auriga-gold.vercel.app/Back-Innovation.jpg',
    image: 'https://auriga-gold.vercel.app/Back-Inside-Innovation.jpg',
  },
]

const Home = () => {
  return (
    <div className="mt-[42px] h-[calc(100vh-42px)] w-screen flex flex-col">
      <div className="h-full flex flex-col md:flex-row">
        {tabs.map((item, index) => (
          <a
            key={index}
            target="_blank"
            href={item.href}
            className="relative h-1/3 md:h-full w-full md:w-1/3 flex flex-col items-start justify-center"
          >
            <h2 className="hidden md:block px-8 font-light z-20 text-md md:text-xl text-white">
              {item.tagline}
            </h2>
            <h1 className="md:mt-2 px-8 font-black z-20 text-3xl md:text-4xl leading-tight text-white">
              {item.heading}
            </h1>
            <h3 className="mt-3 px-8 z-20 font-light text-white">{item.content}</h3>
            <div
              className={`bg-gradient-to-br ${item.gradient} z-10 absolute h-full w-full`}
            ></div>
            <div className="z-0 absolute h-full w-full">
              <NextImage
                layout="fill"
                objectFit="cover"
                placeholder="blur"
                src={item.image}
                blurDataURL={`data:image/svg+xml;base64,${toBase64(shimmer(1400, 720))}`}
              />
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}

export default Home

export const config= {
  unstable_runtimeJS: false
}
