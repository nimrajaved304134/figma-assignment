import React from 'react'

const Acheivements = () => {
  return (
    <div className='py-[48px] px-[24px] items-center justify-center bg-gray'>
        <div className='flex-col flex gap-[48px]'>
            <div className='flex-col flex gap-[24px]'>
                <h1 className='text-[32px] sm:text-[48] leading-[41.6px] sm:leading-[60px] text-center font-bold'>
                Our Achivements
                </h1>
                <p className='text[18px] sm:text-[27px] leading-[27px] sm:leading-[36px] text-center font-normal'>
                Lorem ipsum dolor sit amet, consectetur <br className='lg:hidden'/>
                adipiscing elit. Suspendisse varius enim in <br className='lg:hidden'/>
                eros elementum tristique. 
                </p>
            </div>
            <div className='flex flex-col gap-[24px] lg:flex-row lg:gap-[72px] items-center justify-center'>
            <div className='flex flex-row justify-between items-center gap-[48px] sm:gap[48px] lg:gap-[72px] pt-[8px] '>
                <div className='text-center xl:w-[296px]'>
                    <h1 className='text-center text-[20px] sm:text-[36px] sm:leading-[36px] leading-[28px] font-bold'>
                        +200
                    </h1>
                    <p className='text-center text-[16px] leading-[24px] sm:text-[20px] sm:leading-[30px] font-normal'>
                        Courses
                    </p>
                </div>
                <div className='text-center xl:w-[296px]'>
                    <h1 className='text-center text-[20px] leading-[28px] sm:text-[36px] sm:leading-[36px] font-bold'>
                        50K
                    </h1>
                    <p className='text-center text-[16px] leading-[24px] sm:text-[20px] sm:leading-[30px] font-normal'>
                        Mentors
                    </p>
                </div>
            </div>
            
            <div className='flex flex-row justify-between items-center gap-[48px] sm:gap[48px] lg:gap-[72px] pt-[8px]'>
                <div className='text-center xl:w-[296px]'>
                    <h1 className='text-center text-[20px] leading-[28px] sm:text-[36px] sm:leading-[36px] font-bold'>
                        370k
                    </h1>
                    <p className='text-center text-[16px] leading-[24px] sm:text-[20px] sm:leading-[30px] font-normal'>
                        Students
                    </p>
                </div>
                <div className='text-center xl:w-[296px]'>
                    <h1 className='text-center text-[20px] leading-[28px] sm:text-[36px] sm:leading-[36px] font-bold'>
                        100+
                    </h1>
                    <p className='text-center text-[16px] leading-[24px] sm:text-[20px] sm:leading-[30px] font-normal'>
                        Recognition
                    </p>
                </div>  
            </div>
            </div>
        </div>
    </div>

  )
}

export default Acheivements