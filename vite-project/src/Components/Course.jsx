import React from "react";
import Underline from "./Underline";

const courses = [
  {
    title: "Python for Everybody",
    platform: "YouTube (Dr. Chuck/Michigan)",
    description:
      "An incredibly popular series that teaches fundamental programming concepts using Python, perfect for absolute beginners.",
    image:
      "https://placehold.co/400x150/0D9488/FFFFFF?text=%7B%3C%3E%7DPYTHON+CODE&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=python+for+everybody+free+course",
  },
  {
    title: "SQL Fundamentals",
    platform: "Khan Academy / FreeCodeCamp",
    description:
      "Learn how to query, manage, and analyze data in relational databases, an essential skill for data roles and analysts.",
    image:
      "https://placehold.co/400x150/2563EB/FFFFFF?text=DB+Query+%7C%7C%7C&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=free+sql+tutorial+for+beginners",
  },
  {
    title: "Intro to Web Development",
    platform: "FreeCodeCamp (YouTube)",
    description:
      "Build your first websites using the core technologies: HTML, CSS, and JavaScript. Perfect starting point for frontend careers.",
    image:
      "https://placehold.co/400x150/F97316/FFFFFF?text=HTML+%2F+CSS+%2F+JS&font=inter&bold=true",
    link: "https://www.youtube.com/user/freecodecamp",
  },
  {
    title: "Data Science with R",
    platform: "Coursera (Audit/Duke University)",
    description:
      "Explore data analysis, visualization, and statistical inference using the powerful R programming language.",
    image:
      "https://placehold.co/400x150/0EA5E9/FFFFFF?text=R+Studio+%2F+Stats&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=free+data+science+R+course",
  },
  {
    title: "Digital Marketing Basics",
    platform: "Google Digital Garage",
    description:
      "Learn key marketing strategies, SEO, social media management, and online advertising fundamentals.",
    image:
      "https://placehold.co/400x150/EC4899/FFFFFF?text=%5BTarget%5D+Growth+Hacks&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=free+digital+marketing+course+for+beginners",
  },
  {
    title: "Excel Mastery for Data",
    platform: "YouTube (Leila Gharani)",
    description:
      "Go beyond the basics: master VLOOKUP, Pivot Tables, and advanced formulas for robust data analysis in business.",
    image:
      "https://placehold.co/400x150/059669/FFFFFF?text=Data+Table+%26+Chart&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=advanced+excel+tutorial",
  },
  {
    title: "Graphic Design Fundamentals",
    platform: "YouTube (Graphtwist)",
    description:
      "Covers color theory, typography, composition, and layout—the building blocks for all visual creative careers.",
    image:
      "https://placehold.co/400x150/FBBF24/1F2937?text=Color+Palette+%26+Grid&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=free+graphic+design+fundamentals",
  },
  {
    title: "Professional Communication",
    platform: "edX (Audit/MIT)",
    description:
      "Enhance your presentation, negotiation, and written communication skills vital for leadership and teamwork.",
    image:
      "https://placehold.co/400x150/6B7280/FFFFFF?text=Team+Chat+%26+Connect&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=professional+communication+skills+course",
  },
  {
    title: "Cloud Computing Intro",
    platform: "Free Amazon/Google Training",
    description:
      "Understand the core concepts of cloud platforms (IaaS, PaaS, SaaS) and deployment models. Essential for all modern IT careers.",
    image:
      "https://placehold.co/400x150/1E3A8A/FFFFFF?text=Cloud+%26+Serverless&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=free+cloud+computing+course+aws",
  },
  {
    title: "Agile Project Management",
    platform: "YouTube (PMP Training)",
    description:
      "Learn the principles of Scrum and Kanban frameworks to efficiently manage projects, teams, and iterative development cycles.",
    image:
      "https://placehold.co/400x150/DC2626/FFFFFF?text=Kanban+Board+%2F+Scrum&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=free+agile+project+management+course",
  },
  {
    title: "Cybersecurity Essentials",
    platform: "Cisco Networking Academy",
    description:
      "Introduction to the concepts of information security, threat analysis, risk management, and secure networking protocols.",
    image:
      "https://placehold.co/400x150/1F2937/6D28D9?text=Firewall+%2F+Lock+Icon&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=free+cybersecurity+course+for+beginners",
  },
  {
    title: "UI/UX Design Principles",
    platform: "Figma Community / YouTube",
    description:
      "Focuses on creating user-friendly interfaces (UI) and understanding the user journey (UX) for digital products.",
    image:
      "https://placehold.co/400x150/6D28D9/FFFFFF?text=Wireframe+%2F+Prototype&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=free+ui+ux+design+course",
  },
  {
    title: "Intro to Financial Accounting",
    platform: "MIT OpenCourseWare",
    description:
      "Learn to read and understand balance sheets, income statements, and cash flow statements, crucial for business literacy.",
    image:
      "https://placehold.co/400x150/34D399/1F2937?text=Ledger+%2F+Balance+Sheet&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=free+financial+accounting+course",
  },
  {
    title: "High-Impact Productivity",
    platform: "Cal Newport / Ali Abdaal",
    description:
      "Techniques for deep work, effective prioritization, and overcoming procrastination to maximize valuable output.",
    image:
      "https://placehold.co/400x150/D1D5DB/1F2937?text=Time+Blocking+%2F+Focus&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=best+time+management+course+free",
  },
  {
    title: "Modern JavaScript (ES6+)",
    platform: "Academind / Traversy Media",
    description:
      "A deep dive into the language that powers the modern web, covering asynchronous programming, frameworks, and modern syntax.",
    image:
      "https://placehold.co/400x150/FDE047/1F2937?text=JS+%28%29+%3D%3E+Async&font=inter&bold=true",
    link: "https://www.youtube.com/results?search_query=free+modern+javascript+course",
  },
];

const Course = () => {
  return (
    <div className="min-h-screen p-6 md:p-12 bg-[#F4F7FB] text-gray-800 font-inter">
      {/* Header */}
     <Underline title="Career Guideline Courses" className="my-[clamp(2rem,5vw,5rem)]"></Underline>

      {/* Courses */}
      <main className="max-w-7xl mx-auto">
        <h2 className="text-4xl font-extrabold mb-8 text-[#18355c] text-center">
          Top 15 Free Courses & Tutorials
        </h2>

        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {courses.map((course, index) => (
            <div
              key={index}
              className="bg-white border border-gray-200 rounded-2xl p-4 shadow-sm hover:shadow-lg transition transform hover:-translate-y-1"
            >
              <img
                src={course.image}
                alt={`Thumbnail for ${course.title}`}
                className="w-full h-32 object-cover rounded-lg mb-4 shadow-sm"
                onError={(e) =>
                  (e.target.src =
                    "https://placehold.co/400x150/F4F7FB/1F2937?text=Error")
                }
              />
              <h3 className="text-xl font-bold mb-2 text-gray-800">
                {course.title}
              </h3>
              <p className="text-sm font-semibold text-[#18355c]">
                Platform: {course.platform}
              </p>
              <p className="text-gray-600 mt-2 text-sm">{course.description}</p>
              <a
                href={course.link}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-4 inline-block text-white font-semibold py-2 px-4 rounded-lg transition duration-200 hover:opacity-90 bg-purple-700"
              >
                Watch Course →
              </a>
            </div>
          ))}
        </div>
      </main>

      {/* Footer */}
      <footer className="mt-20 text-center max-w-4xl mx-auto">
        <blockquote className="text-2xl italic text-gray-500 border-t border-gray-300 pt-8">
          "The capacity to learn is a gift; the ability to learn is a skill; the willingness to learn is a choice."
          <cite className="block mt-4 not-italic font-semibold text-gray-600 text-lg">
            — Brian Herbert
          </cite>
        </blockquote>
      </footer>
    </div>
  );
};

export default Course;
