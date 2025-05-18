import React from "react";
import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectCoverflow } from "swiper/modules";
import { LogIn } from "lucide-react";  // Add this icon import

import "swiper/css";
import "swiper/css/effect-coverflow";

export default function Home() {
  const navigate = useNavigate();

  const images = [
    "/images/image 1.webp",
    "/images/image 2.jpg",
    "/images/image 3.jpg",
    "/images/kael.jpg",
  ];

  return (
    <div className="h-screen w-screen bg-gradient-to-br from-black via-zinc-900 to-gray-800 text-white px-8 py-4 flex flex-col items-center">
      {/* Header bar */}
      <div className="w-full flex items-center justify-between mb-6">
        <h1 className="text-4xl font-bold text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.8)] mx-auto">
          Welcome to GameHub
        </h1>
        <button
          onClick={() => navigate("/login")}
          className="flex items-center gap-2 text-cyan-400 hover:text-cyan-200 transition font-semibold bg-zinc-800 border border-zinc-600 px-4 py-2 rounded-lg shadow hover:shadow-cyan-500/30"
        >
          <LogIn size={20} />
          Login Page
        </button>
      </div>

      {/* Image Slider */}
      <div className="w-full max-w-4xl flex justify-center items-center h-screen">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={2}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 200,
            modifier: 1,
            slideShadows: true,
          }}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          loop={true}
          modules={[Autoplay, EffectCoverflow]}
          className="w-full h-[400px] rounded-2xl overflow-hidden"
        >
          {images.map((img, idx) => (
            <SwiperSlide key={idx}>
              <img
                src={img}
                alt={`Slide ${idx}`}
                className="object-cover w-full h-full rounded-xl"
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
