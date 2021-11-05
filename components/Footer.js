import SocialLinks from '@/components/SocialLinks'

const Footer = () => {
  return (
    <div className="bg-white pb-10 px-10 w-full flex flex-row flex-wrap justify-between">
      <div className="mt-10 flex flex-col w-full md:w-1/4">
        <span className="font-medium text-xl">Auriga</span>
        <a className="mt-2 font-light" href="" target="_blank">
          Auriga Care
        </a>
        <a className="font-light" href="" target="_blank">
          My Digi Gaon
        </a>
        <a className="font-light" href="" target="_blank">
          The Divyaang
        </a>
        <a className="font-light" href="" target="_blank">
          Auriga Literature
        </a>
        <a className="font-light" href="" target="_blank">
          Auriga Agro Solutions
        </a>
        <a className="font-light" href="" target="_blank">
          {'Auriga Consults & Design Think'}
        </a>
      </div>
      <div className="mt-10 space-y-2 flex flex-col w-full md:w-1/4">
        <span className="mb-2 font-medium text-xl">Follow Us</span>
        <SocialLinks />
      </div>
      <div className="mt-10 flex flex-col w-full md:w-1/4">
        <span className="font-medium text-xl">Have any question?</span>
        <button className="mt-2 w-[75%] bg-[#343a40] text-white py-2 px-4 rounded">
          Send Message
        </button>
      </div>
      <div className="mt-10 flex flex-col w-full md:w-1/4">
        <span className="font-medium text-xl">Contact Us</span>
        <a className="mt-2 font-light" href="tel:+91-9425269485" target="_blank">
          +91-9425269485
        </a>
        <a className="mt-2 font-light" href="https://goo.gl/maps/t6FWswcaUysSMqQa6" target="_blank">
          Ambikapur, Chhattisgarh 497001
        </a>
        <a className="mt-2 font-light" href="mailto:aurigaworld@gmail.com" target="_blank">
          aurigaworld@gmail.com
        </a>
      </div>
    </div>
  )
}

export default Footer
