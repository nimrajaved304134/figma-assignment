import Image from 'next/image';
import React from 'react';

const Socialproof = () => {
  return (
    <div className="py-[48px] px-[24px] xl:py-[80px] xl:px-[64px] xl:flex xl:flex-row justify-around items-center">
      {/* Heading */}
      <div className="text-center">
      <p className="hidden lg:flex text-[24px] leading-[33.6px] text-left font-bold">
      Trusted by 2000+ companies  <br />
      worldwide.
        </p>
        <p className="text-[18px] sm:text-[27px] leading-[27px] sm:leading[45px] font-bold lg:hidden">
          Trusted by the world`&apos;`s best companies <br />
          [social proof to build credibility]
        </p>
      </div>

      {/* Logos */}
      <div className="py-[16px] lg:pl-5 sm:py-[48px] grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-[16px] justify-items-center">
        <Image src="/asset/logo1.png" alt="Company 1 logo" height={33.34} width={107.15} />
        <Image src="/asset/logo2.png" alt="Company 2 logo" height={33.34} width={107.15} />
        <Image src="/asset/logo3.png" alt="Company 3 logo" height={33.34} width={107.15} />
        <Image src="/asset/logo4.png" alt="Company 4 logo" height={33.34} width={107.15} />
        <Image src="/asset/logo5.png" alt="Company 5 logo" height={33.34} width={107.15} />
        <Image src="/asset/logo6.png" alt="Company 6 logo" height={33.34} width={107.15} />
      </div>
    </div>
  );
};

export default Socialproof;
