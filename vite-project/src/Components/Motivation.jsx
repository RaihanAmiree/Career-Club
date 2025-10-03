import React from "react";
import Underline from "./Underline";

const cards = [
  {
    title: "Deep Work",
    img: "https://placehold.co/400x200/6D28D9/FFFFFF?text=Focus",
    alt: "Image representing quiet focus",
    description:
      "Breakthrough demands isolation. Protect the hours where only the complexity of the problem exists. This is where value is actually forged.",
  },
  {
    title: "First Principles",
    img: "https://placehold.co/400x200/FFFFFF/6D28D9?text=Question",
    alt: "Abstract image representing challenging fundamental ideas",
    description:
      "Dismantle the fundamental assumptions. Ask the basic, difficult questions. The greatest leverage is found in the radical first step.",
  },
  {
    title: "The Imperative",
    img: "https://placehold.co/400x200/9CA3AF/1F2937?text=Legacy",
    alt: "Image representing long-term legacy and architecture",
    description:
      "Focus on building structures that will outlast you. Let the desire to leave an undeniable, high-quality mark be the engine of your daily effort.",
  },
  {
    title: "Systems Thinking",
    img: "https://placehold.co/400x200/1E40AF/FFFFFF?text=Ecosystem",
    alt: "Image representing complex interconnected system",
    description:
      "Don't optimize the part; optimize the whole. See the ecosystem of processes and people. A small adjustment here can create monumental efficiency there.",
  },
  {
    title: "Humility",
    img: "https://placehold.co/400x200/EDE9FE/6D28D9?text=Openness",
    alt: "Image representing open mind and learning",
    description:
      "The smartest minds know how much they do not know. Defend your findings, but surrender to better evidence. Learning is the highest form of professional strength.",
  },
  {
    title: "Geometry of Time",
    img: "https://placehold.co/400x200/4B5563/FFFFFF?text=Decades",
    alt: "Image representing long-term planning",
    description:
      "Have patience in decades, but urgency in moments. Long-term vision provides direction; short-term execution provides results. Respect the compounding effect.",
  },
  {
    title: "Constraints",
    img: "https://placehold.co/400x200/1F2937/6D28D9?text=Limitless",
    alt: "Image representing boundaries and innovation",
    description:
      "Innovation thrives where resources are scarce. The constraint is not a barrier to be lamented, but a puzzle to be solved. Embrace the limits; they breed brilliance.",
  },
  {
    title: "Synthesis",
    img: "https://placehold.co/400x200/9333EA/FFFFFF?text=Connect",
    alt: "Image representing merging ideas",
    description:
      "Originality is the act of connecting disparate fields. Read outside your silo. The breakthrough insight often arrives when two unrelated concepts finally touch.",
  },
  {
    title: "Iterative Perfection",
    img: "https://placehold.co/400x200/E5E7EB/1F2937?text=Refine",
    alt: "Image representing continuous refinement",
    description:
      "The first version is meant to fail; the hundredth must endure. Perfection is not achieved when there is nothing left to add, but when there is nothing left to take away.",
  },
  {
    title: "Uncomfortable Truth",
    img: "https://placehold.co/400x200/6D28D9/FFFFFF?text=Challenge",
    alt: "Image representing critical feedback",
    description:
      "Seek out the criticism that stings the most. Comfort is intellectual stagnation. If your ideas are not being vigorously challenged, you are working in the wrong room.",
  },
  {
    title: "Craftsmanship",
    img: "https://placehold.co/400x200/059669/FFFFFF?text=Quality",
    alt: "Image representing detailed work and quality",
    description:
      "Reject the disposable. The quality of your output is the only metric that matters in the long run. Build something once, but build it with enduring integrity.",
  },
  {
    title: "Curiosity",
    img: "https://placehold.co/400x200/F4F7FB/6D28D9?text=Explore",
    alt: "Image representing exploration and asking questions",
    description:
      "Treat questions as assets, not gaps in knowledge. The capacity to be continuously fascinated is your greatest professional advantage. Stay relentlessly interested.",
  },
  {
    title: "Antifragility",
    img: "https://placehold.co/400x200/4B5563/FFFFFF?text=Strength",
    alt: "Image representing strength through disorder",
    description:
      "Do not just endure shock; grow stronger from it. Every period of chaos is a design challenge. Your greatest intellectual power is the ability to adapt and improve under stress.",
  },
  {
    title: "Silent Progress",
    img: "https://placehold.co/400x200/E5E7EB/1F2937?text=Work",
    alt: "Image representing quiet, consistent work",
    description:
      "The profound changes happen without fanfare. Stop chasing headlines and start creating substance. Let the quality of your output be the only necessary announcement.",
  },
  {
    title: "Adjacent Possible",
    img: "https://placehold.co/400x200/3B82F6/FFFFFF?text=New+Path",
    alt: "Image representing new pathways and possibilities",
    description:
      "Don't dream of the impossible future; build bridges to the next known possibility. Innovation is often about combining existing parts in a novel, achievable way.",
  },
];

const Motivation = () => {
  return (
    <div className="min-h-screen p-6 md:p-12 bg-[#F4F7FB] text-[#1F2937] font-inter">
      {/* Header Section */}
      <Underline  title="Get Some Motivations" className="my-[clamp(2rem,5vw,5rem)]"></Underline>

      {/* Cards Grid */}
      <main className="max-w-7xl mx-auto grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
        {cards.map((card, index) => (
          <div key={index} className="card p-6 rounded-2xl bg-white border border-gray-200 shadow-sm transition-transform duration-300 ease-in-out hover:translate-y-[-4px] hover:bg-gray-100 hover:shadow-lg">
            <h2 className="text-2xl font-bold mb-3 text-[#0a1a2f]">{card.title}</h2>
            <img
              src={card.img}
              alt={card.alt}
              className="w-full h-24 object-cover rounded-lg mb-3 shadow-sm"
              onError={(e) => { e.target.onerror = null; e.target.src = "https://placehold.co/400x200/F4F7FB/1F2937?text=Error"; }}
            />
            <div className="text-gray-700 leading-snug italic border-l-2 pl-3 text-sm" style={{ borderLeftColor: "#6D28D9" }}>
              <p>{card.description}</p>
            </div>
          </div>
        ))}
      </main>

      {/* Footer Quote */}
      <footer className="mt-20 text-center max-w-4xl mx-auto">
        <blockquote className="text-2xl italic text-gray-500 border-t border-gray-300 pt-8">
          "We are what we repeatedly do. Excellence, then, is not an act, but a habit."
          <cite className="block mt-4 not-italic font-semibold text-gray-600 text-lg">
            — Aristotle
          </cite>
        </blockquote>
      </footer>
    </div>
  );
};

export default Motivation;
