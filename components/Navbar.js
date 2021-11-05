import SocialLinks from '@/components/SocialLinks'

const Navbar = () => {
  return (
    <div className="bg-white py-2 px-10 absolute h-[40px] w-full flex flex-row items-center justify-between">
      <h1 className="text-md">Auriga</h1>
      <SocialLinks />
      <span className="hidden md:block"></span>
    </div>
  )
}

export default Navbar
