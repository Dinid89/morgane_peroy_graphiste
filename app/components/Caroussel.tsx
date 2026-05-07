"use client";

import { useEffect, useRef } from "react";
import caroussel from "./caroussel.json"; 


export default function AutoCarousel() {
  const images = caroussel.map((item) => item.img);
  const trackRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let animationId: number;
    let offset = 0;

    const speed = 1; // adjust speed here

    const animate = () => {
      if (!track) return;

      offset += speed;

      const halfWidth = track.scrollWidth / 2;

      if (offset >= halfWidth) {
        offset = 0;
      }

      track.style.transform = `translateX(-${offset}px)`;

      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationId);
  }, []);

  // duplicate images for seamless loop
  const loopImages = [...images, ...images];

  return (
    <div className="overflow-hidden w-full">
      <div
        ref={trackRef}
        className="flex w-max"
        style={{ willChange: "transform" }}
      >
        {loopImages.map((img, i) => (
          <img
            key={i}
            src={img}
            alt={`slide-${i}`}
            className="w-[400px] h-[500px] object-cover flex-shrink-0"
          />
        ))}
      </div>
    </div>
  );
}
