import React from 'react';
import Image from 'next/image';
import { Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <div className="flex flex-col xl:flex-row gap-[48px] justify-center items-center py-[48px] px-[24px]">
      <div className="flex flex-col gap-[48px] justify-center items-center">
        <div className="flex flex-col  xl:flex-row justify-center items-center text-center gap-[24px]">
          <div className='flex flex-col  xl:flex-row justify-center items-center text-center gap-[24px]'>
            <div className='xl:flex xl:flex-col'>
          <h1 className="text-[18px] font-semibold leading-[27px] sm:text-[24px] sm:leading-[36px] text-center xl:text-[18px] xl:leading-[27px] xl:text-left">Subscribe to our newsletter</h1>
          <p className="text-[16px] font-normal leading-[24px] sm:text-[24px] sm:leading-[36px] text-center xl:text-[16px] xl:leading-[24px] xl:text-left">
            Lorem ipsum dolor sit amet, <br />
            consectetur adipiscing elit.
          </p>
          </div>
          </div>
          <div className="flex flex-col xl:flex-row justify-center items-center space-y-2 gap-[8px]">
            <input
              id="username"
              type="text"
              placeholder="Enter your username"
              className="text-[16px] leading-[24px] font-normal w-[380px] h-[48px] rounded-[5px] border-[1px] p-[12px] border-black xl:w-[265px] xl:h-[48] xl:text-[16px] xl:leading-[24px] xl:text-left"
            />
            <button className="h-[48px] w-[380px] rounded-[5px] border-[1px] py-[12px] px-[24px] text-[16px] leading-[24px] font-normal border-black xl:w-[119px] xl:h-[48]">
              Subscribe
            </button>
            <p className="text-[12px] font-normal leading-[18px] text-center sm:text-[18px] sm:leading-[24px] xl:hidden">
              By subscribing you agree to with our Privacy Policy
            </p>
          </div>
        </div>

      <div className="flex flex-col xl:flex-row gap-[32px] xl:justify-center items-center xl:gap-[40px]">
                <div className="py-[20px]">
          <Image src="/asset/logo.png" alt="Logo" width={130.6} height={30.38} />
        </div>

          <div>

            <h1 className="text-[16px] font-semibold leading-[24px] text-center sm:text-[24px] sm:leading-[36px] xl:text-[16px] xl:leading-[24px]">Courses</h1>
 
            <p className="text-[11px] font-normal leading-[21px] text-center sm:text-[24px] sm:leading-[30px] xl:text-[14px] xl:leading-[21px]">Business</p>

            <p className="text-[11px] font-normal leading-[21px] text-center sm:text-[24px] sm:leading-[30px] xl:text-[14px] xl:leading-[21px]">Development</p>

            <p className="text-[11px] font-normal leading-[21px] text-center sm:text-[24px] sm:leading-[30px] xl:text-[14px] xl:leading-[21px]">Technology</p>
          </div>
          <div>

            <h1 className="text-[16px] font-semibold leading-[24px] text-center sm:text-[24px] sm:leading-[36px] xl:text-[16px] xl:leading-[24px]">Courses</h1>

            <p className="text-[11px] font-normal leading-[21px] text-center sm:text-[24px] sm:leading-[30px] xl:text-[14px] xl:leading-[21px]">Business</p>
             <p className=" leading-[21px] text-center sm:text-[24px] sm:leading-[30px] xl:text-[14px] xl:leading-[21px]">Development</p>

            <p className="text-[11px] font-normal leading-[21px] text-center sm:text-[24px] sm:leading-[30px] xl:text-[14px] xl:leading-[21px]">Technology</p>
          </div>
          <div>
 
            <h1 className="text-[16px] font-semibold leading-[24px] text-center sm:text-[24px] sm:leading-[36px] xl:text-[16px] xl:leading-[24px]">Courses</h1>
  
            <p className="text-[11px] font-normal leading-[21px] text-center sm:text-[24px] sm:leading-[30px] xl:text-[14px] xl:leading-[21px]">Business</p>
    
            <p className="text-[11px] font-normal leading-[21px] text-center sm:text-[24px] sm:leading-[30px] xl:text-[14px] xl:leading-[21px]">Development</p>

            <p className="text-[11px] font-normal leading-[21px] text-center sm:text-[24px] sm:leading-[30px] xl:text-[14px] xl:leading-[21px]">Technology</p>
          </div>
        </div>
        <div className=" flex flex-col xl:flex-row border-t-[1px] border-black gap-[24px] w-auto mt-[32px] px-[16px] ">
          <p className="text-[14px] leading-[21px] text-center font-normal mt-[32px] sm:text-[24px] sm:leading-[36px]  whitespace-nowrap xl:text-[14px] xl:leading-[21px] ">2023 Ddsgnr. All rights reserved.</p>
          <div className="flex justify-center items-center gap-[24px] xl:text-[14px] xl:leading-[21px]">
            <p className="underline whitespace-nowrap">Privacy Policy</p>
            <p className="underline whitespace-nowrap">Terms of Service</p>
            <p className="underline whitespace-nowrap">Cookies Settings</p>
          </div>
          <div className="flex justify-center items-center gap-[12px] mt-[32px] xl:mt-[14px]">
            <Facebook className="w-[24px] h-[24px]" />
            <Instagram className="w-[24px] h-[24px]" />
            <Twitter className="w-[24px] h-[24px]" />
            <Linkedin className="w-[24px] h-[24px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
