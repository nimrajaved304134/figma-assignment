import React, { useState } from 'react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';
import { AiOutlineSchedule, AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

const Categories = () => {
    const [showAllCategories, setShowAllCategories] = useState(false);

    const allCategories = [
        { title: "Design & Development", icon: <AiOutlineSchedule className="w-8 h-8" />, courses: "50+ Courses Available" },
        { title: "Marketing", icon: <AiOutlineSchedule className="w-8 h-8" />, courses: "50+ Courses Available" },
        { title: "Development", icon: <AiOutlineSchedule className="w-8 h-8" />, courses: "50+ Courses Available" },
        { title: "UX/UI Designing", icon: <AiOutlineSchedule className="w-8 h-8" />, courses: "50+ Courses Available" },
        { title: "Software Developments", icon: <AiOutlineSchedule className="w-8 h-8" />, courses: "50+ Courses Available" },
    ];

    const visibleCategories = showAllCategories
        ? allCategories
        : allCategories.slice(0, 3);

    return (
        <div className="flex flex-col justify-center items-center gap-6">
            <div className="w-full max-w-4xl mx-auto space-y-4 p-4 xl:p-0">
                <h1 className="font-bold text-[32px] leading-[41.6px] text-center">
                    Explore Courses By Category
                </h1>
                <p className="font-normal text-[18px] leading-[27px] text-center">
                    Discover a wide range of courses covering a variety of subjects, taught by expert instructors.
                </p>

                {/* Grid Layout */}
                <div
                    className={`grid gap-6 xl:gap-[24px] xl:justify-between items-stretch ${
                        showAllCategories
                            ? "grid-cols-1 lg:grid-cols-2 xl:grid-cols-3"
                            : "grid-cols-1 lg:grid-cols-2  xl:grid-cols-3"
                    } `}
                >
                    {visibleCategories.map((category, index) => (
                        <Card
                            key={index}
                            className="p-4 hover:shadow-lg transition-shadow w-auto h-[138px] lg:w-[400px] lg:h-[150px] xl:h-[100px] xl:w-[300px]  "
                        >
                            <div className="flex items-center space-x-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 xl:gap-2">
                                <div className="p-2 bg-gray-100 rounded-[5px] w-[100px] h-[100px] xl:w-[60px] xl:h-[70px] flex items-center justify-center text-center">
                                    {category.icon}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[20px] leading-[30px] text-left lg:text-[27px] lg:leading-[41.6px] xl:text-[20px] xl:leading-[30px] whitespace-nowrap">
                                        {category.title}
                                    </h3>
                                    <p className="font-normal text-[18px] leading-[27px] text-left lg:text-[20px] lg:leading-[30px] xl:text-[18px] xl:leading-[27px] whitespace-nowrap">
                                        {category.courses}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                {/* Toggle Button */}
                <div className='flex justify-center'>
                <Button
                    onClick={() => setShowAllCategories(!showAllCategories)}
                    aria-label={
                        showAllCategories
                            ? "Show fewer courses"
                            : "View all courses"
                    }
                    className="w-[155px] rounded-[5px] border-[1px] py-[12px] px-[24px] text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                    {showAllCategories ? (
                        <>
                            Show Fewer Courses
                            <AiOutlineUp className="w-4 h-4 ml-2" />
                        </>
                    ) : (
                        <>
                            View All Courses
                            <AiOutlineDown className="w-4 h-4 ml-2" />
                        </>
                    )}
                </Button>
                </div>
            </div>
        </div>
    );
};

export default Categories;