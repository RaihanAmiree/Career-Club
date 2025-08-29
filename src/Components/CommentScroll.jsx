import React, { useRef, useState, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import CommentCard from "./CommentCard";

const placeholderCards = [
  { id: "1", name: "Alice Johnson", comment: "This club transformed my career outlook! Highly recommend!", timestamp: "Aug 29, 2025" },
  { id: "2", name: "Bob Smith", comment: "Networking events here are top-notch.", timestamp: "Aug 28, 2025" },
  { id: "3", name: "Charlie Brown", comment: "Practical workshops helped me polish my resume.", timestamp: "Aug 27, 2025" },
  { id: "4", name: "Diana Prince", comment: "The community support is amazing.", timestamp: "Aug 26, 2025" },
  { id: "5", name: "Eve Adams", comment: "Found my dream internship through a contact.", timestamp: "Aug 25, 2025" },
  { id: "6", name: "Frank White", comment: "Learned so much about different career paths.", timestamp: "Aug 24, 2025" },
  { id: "7", name: "Grace Lee", comment: "The mentors are truly invested in your success.", timestamp: "Aug 23, 2025" },
  { id: "8", name: "Henry King", comment: "A fantastic resource for any student.", timestamp: "Aug 22, 2025" },
];

const CommentScroll = ({ cards = placeholderCards }) => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  const [contentWidth, setContentWidth] = useState(0);
  const [containerWidth, setContainerWidth] = useState(0);

  const [mobileIndex, setMobileIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Measure widths
  useEffect(() => {
    const updateWidths = () => {
      if (contentRef.current && containerRef.current) {
        setContentWidth(contentRef.current.scrollWidth);
        setContainerWidth(containerRef.current.offsetWidth);
      }
    };
    updateWidths();
    window.addEventListener("resize", updateWidths);
    return () => window.removeEventListener("resize", updateWidths);
  }, [cards.length]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const gap = 40; // Corresponds to Tailwind's gap-10
  const padding = 16; // Corresponds to Tailwind's px-4

  const x = useTransform(
    scrollYProgress,
    [0, 1],
    [0, Math.min(containerWidth - contentWidth - gap - padding * 2, 0)]
  );

  const handlePrev = () => {
    setDirection(-1);
    setMobileIndex((prev) => (prev === 0 ? cards.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setDirection(1);
    setMobileIndex((prev) => (prev === cards.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="py-16">
      {/* Desktop Scroll */}
      <section ref={containerRef} className="hidden md:block relative h-[200vh]">
        <div className="sticky top-0 flex h-screen items-center overflow-hidden px-4">
          <motion.div
            style={{ x }}
            ref={contentRef}
            className="flex gap-10 min-w-max"
          >
            {cards.map((comment) => (
              <CommentCard key={comment.id} comment={comment} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mobile Carousel */}
      <div className="relative md:hidden w-full h-[500px] flex flex-col justify-center items-center py-6">
        <AnimatePresence initial={false} custom={direction} mode="wait">
          <motion.div
            key={mobileIndex}
            custom={direction}
            initial={{ opacity: 0, x: direction > 0 ? "100%" : "-100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: direction > 0 ? "-100%" : "100%" }}
            transition={{ duration: 0.4, ease: "easeOut" }}
            className="w-full flex justify-center px-4"
          >
            <CommentCard comment={cards[mobileIndex]} />
          </motion.div>
        </AnimatePresence>

        <div className="flex gap-20 mt-8">
          <button
            onClick={handlePrev}
            className="w-10 h-10 bg-blue-200 text-black rounded-full shadow-lg flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
          >
            &lt;
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 bg-blue-200 text-black rounded-full shadow-lg flex items-center justify-center hover:bg-blue-400 transition-colors duration-300"
          >
            &gt;
          </button>
        </div>
      </div>
    </div>
  );
};

export default CommentScroll;