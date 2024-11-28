import React, { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

const Slider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      id: 1,
      name: "James Nduku",
      position: "Software Developer",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/asset/team1.png",
    },
    {
      id: 2,
      name: "Erick Kipkemboi",
      position: "Scrum Master",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/asset/team2.png",
    },
    {
      id: 3,
      name: "Stephen Kerubo",
      position: "UI/UX Designer",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/asset/team3.png",
    },
    {
      id: 4,
      name: "Joseph Munyambu",
      position: "Nursing Assistant",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/asset/team4.png",
    },
    {
      id: 5,
      name: "John Leboo",
      position: "Dog Trainer",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/asset/team5.png",
    },
    {
      id: 6,
      name: "James Nduku",
      position: "Software Developer",
      rating: 5,
      comment: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare.",
      image: "/asset/team6.png",
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-screen-lg mx-auto">
      <div className="flex flex-col justify-center items-center mb-6">
        <h1 className="text-[32px] leading-[41.6px] font-bold text-center">
          What Our Students Say
        </h1>
        <p className="text-[18px] leading-[27px] font-normal text-center">
          Lorem ipsum dolor sit amet, consectetur <br /> adipiscing elit.
        </p>
      </div>

      {/* Slider Container */}
      <div className="overflow-hidden w-[380px] h-[321px] mx-auto flex items-center justify-center">
        <div
          className="flex transition-transform duration-300 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <Card
              key={slide.id}
              className="w-[380px] h-[321px] flex-shrink-0 mx-auto flex items-center justify-center"
            >
              <CardContent className="p-6">
                <div className="flex flex-col items-center">
                  <div className="flex mb-4">
                    {[...Array(slide.rating)].map((_, i) => (
                      <span key={i} className="text-yellow-400">
                        ★
                      </span>
                    ))}
                  </div>

                  <p className="text-center text-gray-600 mb-6">
                   {slide.comment}
                  </p>

                  <div className="flex items-center gap-3">
                    <Image
                      src={slide.image}
                      alt={`Profile of ${slide.name}`}
                      className="w-10 h-10 rounded-full"
                      width={40}
                      height={40}
                    />
                    <div className="text-left">
                      <p className="font-semibold">{slide.name}</p>
                      <p className="text-sm text-gray-500">{slide.position}</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="flex justify-center gap-2 mt-4">
        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-8 w-8"
          onClick={prevSlide}
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          className="rounded-full h-8 w-8"
          onClick={nextSlide}
        >
          <ChevronRight className="h-4 w-4" />
        </Button>
      </div>

      {/* Pagination Dots */}
      <div className="flex justify-center gap-2 mt-4">
        {slides.map((_, index) => (
          <button
            key={index}
            className={`w-2 h-2 rounded-full transition-colors duration-200 ${
              currentSlide === index ? "bg-gray-800" : "bg-gray-300"
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default Slider;
