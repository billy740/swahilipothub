// Hero.tsx
"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const HeroNew: React.FC = () => {
  const slides = [
    {
      image: "/00.jpg",
      title: "COMMUNITY",
      text: "We are a Safe Space to Create, Innovate and Collaborate. Open to all members of the community.",
    },
    {
      image: "/01.jpg",
      title: "INNOVATION",
      text: "Bringing ideas to life through collaboration and technology.",
    },
    {
      image: "/02.jpg",
      title: "COLLABORATION",
      text: "Working together to achieve more and build a stronger community.",
    },
  ];

  return (
    // Added mt-16 to move below the navbar (adjust if needed)
    <section className="relative w-full h-screen mt-16">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 5000, disableOnInteraction: false }}
        className="w-full h-full"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="relative w-full h-full bg-cover bg-center"
              style={{
                backgroundImage: `url(${slide.image})`,
                backgroundSize: "cover", // Ensure images cover the entire slide
                backgroundPosition: "center", // Center the images
              }}
            >
              <div className="absolute inset-0 bg-opacity-40 flex items-center justify-center">
                <div className="text-center text-white p-4">
                  <h1 className="text-4xl md:text-6xl font-bold mb-4">{slide.title}</h1>
                  <p className="text-lg md:text-xl">{slide.text}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default HeroNew;
