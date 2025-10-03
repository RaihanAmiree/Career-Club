import React, { useState, useEffect, useRef } from "react";

const images = [
  "https://images.unsplash.com/photo-1549410188-7512f455b550?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1549410188-7512f455b550?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1550953683-167883d6a4c2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1517700201633-1491753c15d7?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1506748686214-e917173e6601?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1524270258525-24155b413009?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1563721345688-66af7e6c97a2?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  "https://images.unsplash.com/photo-1574577239301-49e0c156f2f9?q=80&w=2670&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
];

const SwiperImageSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const sliderRef = useRef(null);
  const totalImages = images.length;

  useEffect(() => {
    const sliderElement = sliderRef.current;
    if (!sliderElement) return;

    let isThrottled = false;
    const throttleDelay = 500;

    const handleScroll = (event) => {
      event.preventDefault();
      if (isThrottled) return;

      isThrottled = true;
      const scrollDirection = event.deltaY > 0 ? 1 : -1;

      setCurrentIndex((prevIndex) => {
        let newIndex = prevIndex + scrollDirection;
        if (newIndex >= totalImages) {
          newIndex = 0;
        } else if (newIndex < 0) {
          newIndex = totalImages - 1;
        }
        return newIndex;
      });

      setTimeout(() => {
        isThrottled = false;
      }, throttleDelay);
    };

    sliderElement.addEventListener("wheel", handleScroll, { passive: false });

    return () => {
      sliderElement.removeEventListener("wheel", handleScroll);
    };
  }, [totalImages]);

  return (
    <div className="swiper-image-slider-container">
      <div className="swiper-image-slider" ref={sliderRef} style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
        {images.map((image, index) => (
          <div key={index} className="swiper-image-item">
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default SwiperImageSlider;