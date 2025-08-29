import React from "react";
import CommentScroll from "./CommentScroll";
import UnderlineDark from "./UnderlineDark";

const cards = [
  { url: "/imgs/abstract/1.jpg", title: "Title 1", id: 1 },
  { url: "/imgs/abstract/2.jpg", title: "Title 2", id: 2 },
  { url: "/imgs/abstract/3.jpg", title: "Title 3", id: 3 },
  { url: "/imgs/abstract/4.jpg", title: "Title 4", id: 4 },
  { url: "/imgs/abstract/5.jpg", title: "Title 5", id: 5 },
  { url: "/imgs/abstract/6.jpg", title: "Title 6", id: 6 },
  { url: "/imgs/abstract/7.jpg", title: "Title 7", id: 7 },
];

const CommentSection = () => {
  return (
    <div>
      <section className="bg-[#030b37] py-16 sm:py-20 md:py-20 px-6 mt-30">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-sm sm:text-base uppercase tracking-widest text-white mb-4">
            Our Motto
          </p>
            <UnderlineDark title="Testimonials" />
        </div>
        <CommentScroll cards={cards} />
      </section>
    </div>
  );
};

export default CommentSection;
