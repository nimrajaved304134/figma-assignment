"use client";

import Image from 'next/image';
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';


const Menu = () => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <div>
        {!open ? (
          <Image
            src= '/asset/column.png'
            alt=""
            width={48}
            height={48}
            onClick={() => setOpen(true)}
          />
        ) : (
          <Image
            src= '/asset/close.png'
            alt=""
            width={48}
            height={48}
            onClick={() => setOpen(false)}
          />
        )}
      </div>
      
        {open&& <div className='text-black bg-white absolute left-0 top-24 h-[calc(100vh-6rem)] flex flex-col gap-8 items-center justify-center w-full text-3xl z-10'>
            <Link href={"/"} className=''>
              Home
            </Link>
            <Link href={'/'} className='hover:underline text-[16px] leading-[24px] text-normal'>Courses</Link>
            <Link href={'/'} className='hover:underline text-[16px] leading-[24px] text-normal' onClick={()=>setOpen(false)}>Services</Link>
            <Link href={'/'} className='hover:underline text-[16px] leading-[24px] text-normal' onClick={()=>setOpen(false)}>Achievement</Link>
            <Link href={'/'} className='hover:underline text-[16px] leading-[24px] text-normal' onClick={()=>setOpen(false)}>About Us</Link>
            <Link href={'/'} className='hover:underline text-[16px] leading-[24px] text-normal' onClick={()=>setOpen(false)}>Testimonial</Link>
            
            <div className='flex flex-row gap-4'>
              
      <Button>Log in</Button>
      <Button>Sign up</Button>
      </div>
        </div>

        }
      
    </>
  );
};

export default Menu;

