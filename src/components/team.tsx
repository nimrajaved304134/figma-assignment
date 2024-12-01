import Image from 'next/image';
import React from 'react';
import { Facebook, Twitter, Dribbble } from 'lucide-react';
import { Button } from "./ui/button";

const teamMembers = [
  {
    image: '/asset/team1.png',
    name: 'James Nduku',
    role: 'Marketing Coordinator',
  },
  {
    image: '/asset/team2.png',
    name: 'Joseph Munyambu',
    role: 'Nursing Assistant',
  },
  {
    image: '/asset/team3.png',
    name: 'Joseph Ngumbau',
    role: 'Medical Assistant',
  },
];

const Team = () => {
  // Duplicate the team members dynamically based on screen size
  const extendedTeamMembers = [...teamMembers, ...teamMembers]; // Duplicate array for sm and above

  return (
    <div className="px-[24px] py-[48px] flex flex-col gap-[48px] justify-center items-center w-screen xl:w-[1280px]">
      {/* Header Section */}
      <div className="h-[120px] flex flex-col justify-center items-center gap-[24px]">
        <h1 className="text-center text-[32px] sm:[48px] leading-[41.6px] font-bold">Our team</h1>
        <p className="text-center text-[18px] sm:text-[27px] leading-[27px] sm:leading-[36px] font-normal">
          Lorem ipsum dolor sit amet, consectetur <br className='lg:hidden'/>
          adipiscing elit.
        </p>
      </div>

      {/* Team Members */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[64px] lg:gap-[70px]">
        {(extendedTeamMembers.map((member, index) => (
          <div
            key={index}
            className="flex flex-col justify-center items-center gap-[20px] h-[209px]"
          >
            <div>
              <Image
                src={member.image}
                alt={`Picture of ${member.name}`}
                width={80}
                height={80}
              />
            </div>
            <div className="flex flex-col gap-[16px] justify-center items-center">
              <h1 className="text-center text-[20px] leading-[30px] font-semibold">
                {member.name}
              </h1>
              <p className="text-center text-[18px] leading-[27px] font-normal">
                {member.role}
              </p>
            </div>
            <div className="flex flex-row justify-center items-center gap-[14px] h-[24px]">
              <Facebook className="w-[24px] h-[24px]" />
              <Twitter className="w-[24px] h-[24px]" />
              <Dribbble className="w-[24px] h-[24px]" />
            </div>
          </div>
        )))}
      </div>

      {/* View All Button */}
      <div>
        <Button className="h-[40px] sm:h-[45px] w-[89px] sm:w-[189px] rounded-[5px] border-[1px] py-[8px] px-[14px] gap-[8px] sm:text-[25px] text-black bg-white hover:bg-black hover:text-white  border-black">
          View All
        </Button>
      </div>
    </div>
  );
};

export default Team;

