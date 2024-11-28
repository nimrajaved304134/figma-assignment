import { useState } from "react";
import { Button } from "./ui/button";
import { Card } from "./ui/card"
// import {Star} from 'lucide-react';
import {  AiOutlineUp, AiOutlineDown } from 'react-icons/ai';

const CoursesPage = () => {
    const [showAllCourses, setShowAllCourses] = useState(false);
  
    const allCourses = [
      {
        title: "UX/UI Design 201",
        image: "/asset/course1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        price: "$400",
        category:"Design"
      },
      {
        title: "UX/UI Design 201",
        image: "/asset/course2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        price: "$400",
        category:"Design"
      },
      {
        title: "UX/UI Design 201",
        image: "/asset/course3.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        price: "$400",
        category:"Design"
      },
      {
        title: "UX/UI Design 201",
        image: "/asset/course1.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        price: "$400",
        category:"Design"
      },
      {
        title: "UX/UI Design 201",
        image: "/asset/course2.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        price: "$400",
        category:"Design"
      },
      {
        title: "UX/UI Design 201",
        image: "/asset/course3.png",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros.",
        price: "$400",
        category:"Design"
      },
    ]

    const visibleCourses = showAllCourses ? allCourses : allCourses.slice(0, 3);

    return (
        <div>

           
            <div>
                <h1>Courses</h1>
                <p>Your Ultimate Guide to learning</p>
            </div>

            <div>
                <div>
                    <h1>Popular</h1>
                    <h1>Recommended</h1>
                    <h1>Best  Price</h1>
                </div>
            </div>


                {/* Grid Layout */}
                <div
                    className={`grid gap-6 ${
                        showAllCourses
                            ? "grid-cols-1 xl:grid-cols-3"
                            : "grid-cols-1 xl:grid-cols-3"
                    }`}
                >
                    {visibleCourses.map((category, index) => (
                        <Card
                            key={index}
                            className="p-4 hover:shadow-lg transition-shadow w-full h-[138px] lg:w-[500px] lg:h-[150px] xl:h-[130px] xl:w-[410px]"
                        >
                            <div className="flex items-center space-x-4 lg:gap-12">
                                <div className="p-2 bg-gray-100 rounded-[5px] w-[100px] h-[100px] flex items-center justify-center text-center">
                                    {category.image}
                                </div>
                                <div>
                                    <h3 className="font-semibold text-[20px] leading-[30px] text-center xl:text-[27px] xl:leading-[41.6px]">
                                        {category.title}
                                    </h3>
                                    <p className="font-semibold text-[18px] leading-[27px] text-center xl:text-[20px] xl:leading-[30px]">
                                        {category.description}
                                    </p>
                                </div>
                            </div>
                        </Card>
                    ))}
                </div>

                
                {/* Toggle Button */}
                <div className='flex justify-center'>
                <Button
                    onClick={() => setShowAllCourses(!showAllCourses)}
                    aria-label={
                        showAllCourses
                            ? "Show fewer courses"
                            : "View all courses"
                    }
                    className="w-[155px] rounded-[5px] border-[1px] py-[12px] px-[24px] text-blue-600 font-medium hover:text-blue-700 transition-colors"
                >
                    {showAllCourses ? (
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
    )

} 
export default CoursesPage