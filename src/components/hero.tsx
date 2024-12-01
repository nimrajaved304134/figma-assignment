import React from 'react';
import Image from 'next/image';

const Hero = () => {
  return (
    <div className="flex flex-col justify-center lg:flex-row items-center gap-[24px] lg:gap-[36px] py-[64px] lg:pl-[36px] xl:h-[800px] w-screen xl:w-[1280px]">
      {/* Text Content */}
      <div className="flex flex-col gap-[24px] lg:gap-[36px] lg:w-1/2">
        <h1 className="font-bold text-[40px] sm:text-[50px] leading-[48px] sm:leading-[60px] text-center  lg:text-left">
          Learn new skills <br />
          online with ease
        </h1>
        <p className="font-normal text-[18px] sm:text-[27px] leading-[27px] sm:leading-[45px] text-center whitespace-nowrap lg:text-left">
          Discover a wide range of courses covering a <br/>
          variety of subjects, taught by expert instructors.
        </p>
        <div className="flex flex-row justify-center lg:justify-start items-center pt-[10px] gap-[10px] sm:gap-[30px]">
          <button className="h-[48px] w-[178px] rounded-[5px] border-[1px] bg-black text-white hover:text-black hover:bg-white hover:border-[1px] hover:border-black">
            Start learning now
          </button>
          <button className="h-[48px] w-[178px] rounded-[5px] text-black bg-white hover:bg-black hover:text-white border-[1px] border-black py-[12px] px-[24px] gap-[8px] ">
            Explore Courses
          </button>
        </div>
      </div>

      {/* Image Section */}
      <div className="lg:w-1/2">
        <Image
          src="/asset/Image.png"
          alt="Girl learning"
          width={428}
          height={321}
          className="rounded-lg sm:h-[440px] sm:w-[500px] lg:w-[400px] xl:h-[800px] xl:w-[1000px]"
        />
      </div>
    </div>
  );
};

export default Hero;
