import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Twitter, Linkedin } from 'lucide-react';
import Link from 'next/link';
import { Button } from './ui/button';
import Menu from './menu';

const Header = () => {
  return (
    <div  className='w-screen xl:w-[1280px]'>
      <div className='flex-row justify-between border-b-2 border-black py-4 hidden xl:flex px-6'>
        <div className='flex flex-row'>
          <h1 className='text-[14px] border-r-2 border-black leading[21px] text-normal pr-4 '>Phone Number: 956 742 455 678</h1>
          <h1 className='text-[14px] leading[21px] text-normal pl-4'>Email:info@ddsgnr.com</h1>
          </div>
        {/* Social Icons Section */}
      <div className="flex flex-row gap-[12px] items-center">
        <Facebook className="w-[24px] h-[24px] cursor-pointer fill-black" />
        <Instagram className="w-[24px] h-[24px] cursor-pointer " />
        <Twitter className="w-[24px] h-[24px] cursor-pointer fill-black" />
        
        <Linkedin className="w-[24px] h-[24px] cursor-pointer bg-black fill-white" />
      </div>     
      </div>

      <div className="flex flex-row justify-between items-center px-[36px] h-[72px] border-b-[1px] border-black">
      {/* Logo Section */}
      <div className="py-[20px] px-2 sm:px-6">
        <Image src="/asset/logo.png" alt="Logo" width={130.6} height={30.38} />
      </div>
      <div className=' hidden xl:flex flex-row gap-6 items-center'>
      <Link href={'/'} className='hover:underline text-[16px] leading-[24px] text-normal'>Home</Link>
      <Link href={'/'} className='hover:underline text-[16px] leading-[24px] text-normal'>Courses</Link>
      <Link href={'/'} className='hover:underline text-[16px] leading-[24px] text-normal'>Services</Link>
      <Link href={'/'} className='hover:underline text-[16px] leading-[24px] text-normal'>Achievement</Link>
      <Link href={'/'} className='hover:underline text-[16px] leading-[24px] text-normal'>About Us</Link>
      <Link href={'/'} className='hover:underline text-[16px] leading-[24px] text-normal'>Testimonial</Link>

      <Button className=' bg-black text-white hover:text-black hover:bg-white hover:border-[1px] hover:border-black'>Log in</Button>
      <Button className='text-black bg-white hover:bg-black hover:text-white border-[1px] border-black'>Sign up</Button>
      </div>
      <div className='xl:hidden'>   <Menu/>
      </div>
   
      

    </div>
    </div>

  );
};

export default Header;
