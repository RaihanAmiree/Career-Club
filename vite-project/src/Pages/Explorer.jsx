import React, { useState, useEffect } from "react";
import '../Components/Explorer.css' // External CSS for custom keyframes

const jobs = [
  // ...same job list as before
  { id: 1, title: "Data Analyst", desc: "Analyze complex data sets to drive strategic decisions in the corporate sector.", category: "urban", gender: "male", ageMin: 25, ageMax: 45, img_keyword: "data analysis", imageUrl: "https://placehold.co/400x200/4c51bf/ffffff?text=Your+Custom+Image+Here" },
            { id: 2, title: "Mobile App Developer", desc: "Design and code user-friendly applications for iOS and Android platforms.", category: "urban", gender: "female", ageMin: 20, ageMax: 35, img_keyword: "coding", imageUrl: "https://placehold.co/400x200/d53f8c/ffffff?text=Your+Custom+Image+Here" },
            { id: 3, title: "Agricultural Consultant", desc: "Advise farmers on optimal crop planning, soil health, and sustainable practices.", category: "rural", gender: "male", ageMin: 35, ageMax: 60, img_keyword: "farming" },
            { id: 4, title: "Public Health Nurse", desc: "Provide essential medical services and health education to remote populations.", category: "rural", gender: "female", ageMin: 30, ageMax: 55, img_keyword: "health care" },
            { id: 5, title: "Cyber Security Expert", desc: "Develop protocols to protect enterprise networks from sophisticated digital threats.", category: "urban", gender: "male", ageMin: 25, ageMax: 50, img_keyword: "security" },
            { id: 6, title: "Graphic Designer", desc: "Create visually compelling materials for marketing, branding, and web projects.", category: "urban", gender: "female", ageMin: 20, ageMax: 40, img_keyword: "design" },
            { id: 7, title: "Solar Panel Installer", desc: "Install, maintain, and troubleshoot residential and commercial solar systems.", category: "rural", gender: "male", ageMin: 18, ageMax: 30, img_keyword: "solar panels" },
            { id: 8, title: "Microfinance Officer", desc: "Manage small loan portfolios and deliver financial literacy training.", category: "rural", gender: "female", ageMin: 30, ageMax: 55, img_keyword: "finance" },
            { id: 9, title: "HR Manager", desc: "Oversee recruitment, employee relations, and talent development programs.", category: "urban", gender: "male", ageMin: 30, ageMax: 50, img_keyword: "office" },
            { id: 10, title: "Art Teacher", desc: "Inspire creativity and instruct students in various visual art techniques.", category: "urban", gender: "female", ageMin: 25, ageMax: 50, img_keyword: "teaching art" },
            { id: 11, title: "Water Quality Technician", desc: "Collect and test water samples to ensure compliance with environmental standards.", category: "rural", gender: "male", ageMin: 20, ageMax: 40, img_keyword: "water testing" },
            { id: 12, title: "Livestock Manager", desc: "Supervise breeding, feeding, and health programs for farm animals.", category: "rural", gender: "female", ageMin: 40, ageMax: 65, img_keyword: "cattle farm" },
            { id: 13, title: "E-commerce Specialist", desc: "Manage online store operations, product listings, and digital sales campaigns.", category: "urban", gender: "male", ageMin: 20, ageMax: 35, img_keyword: "computer shopping" },
            { id: 14, title: "Digital Marketing Lead", desc: "Strategize and execute multi-channel digital campaigns to boost brand visibility.", category: "urban", gender: "female", ageMin: 30, ageMax: 45, img_keyword: "marketing" },
            { id: 15, title: "Civil Engineer", desc: "Design and oversee the construction of public infrastructure like roads and bridges.", category: "urban", gender: "male", ageMin: 30, ageMax: 55, img_keyword: "construction" },
            { id: 16, title: "Food Scientist", desc: "Conduct R&D on new food products, focusing on safety, flavor, and shelf life.", category: "urban", gender: "female", ageMin: 25, ageMax: 50, img_keyword: "laboratory food" },
            { id: 17, title: "Community Development Agent", desc: "Facilitate local projects and secure funding for rural infrastructure and education.", category: "rural", gender: "female", ageMin: 30, ageMax: 60, img_keyword: "community outreach" },
            { id: 18, title: "Heavy Equipment Operator", desc: "Operate bulldozers, excavators, and graders for mining or road projects.", category: "rural", gender: "male", ageMin: 40, ageMax: 65, img_keyword: "machinery" },
            { id: 19, title: "Network Administrator", desc: "Configure, maintain, and secure local area networks (LANs) and servers.", category: "urban", gender: "male", ageMin: 20, ageMax: 40, img_keyword: "network server" },
            { id: 20, title: "Corporate Lawyer", desc: "Provide legal counsel on commercial transactions, mergers, and regulatory compliance.", category: "urban", gender: "female", ageMin: 35, ageMax: 60, img_keyword: "law office" },
            { id: 21, title: "Forest Ranger", desc: "Protect natural resources, manage wilderness areas, and fight wildfires.", category: "rural", gender: "male", ageMin: 25, ageMax: 50, img_keyword: "forest" },
            { id: 22, title: "Elderly Care Specialist", desc: "Assist and support elderly individuals with daily activities and healthcare needs.", category: "rural", gender: "female", ageMin: 35, ageMax: 60, img_keyword: "elderly care" },
            { id: 23, title: "Investment Banker", desc: "Facilitate capital raising and advise clients on complex financial transactions.", category: "urban", gender: "male", ageMin: 25, ageMax: 45, img_keyword: "money finance" },
            { id: 24, title: "Content Writer", desc: "Produce engaging articles, blog posts, and website copy for various clients.", category: "urban", gender: "female", ageMin: 20, ageMax: 35, img_keyword: "writing keyboard" },
            { id: 25, title: "Welder", desc: "Join metals using specialized equipment for construction or manufacturing purposes.", category: "urban", gender: "male", ageMin: 18, ageMax: 40, img_keyword: "welding" },
            { id: 26, title: "School Principal", desc: "Provide administrative leadership and manage all aspects of school operations.", category: "urban", gender: "female", ageMin: 40, ageMax: 65, img_keyword: "education" },
            { id: 27, title: "Geologist", desc: "Study the Earth's physical structure and processes to locate mineral deposits.", category: "rural", gender: "male", ageMin: 30, ageMax: 55, img_keyword: "geology rocks" },
            { id: 28, title: "Nutritionist", desc: "Design personalized meal plans and advise clients on healthy eating habits.", category: "rural", gender: "female", ageMin: 25, ageMax: 50, img_keyword: "healthy food" },
            { id: 29, title: "Cloud Architect", desc: "Design and implement scalable cloud computing solutions on major platforms.", category: "urban", gender: "male", ageMin: 30, ageMax: 55, img_keyword: "cloud computing" },
            { id: 30, title: "Photographer", desc: "Capture and edit high-quality images for advertising, media, or personal events.", category: "urban", gender: "female", ageMin: 20, ageMax: 40, img_keyword: "camera" },
            { id: 31, title: "Electrician", desc: "Install, maintain, and repair electrical wiring and control systems.", category: "rural", gender: "male", ageMin: 18, ageMax: 35, img_keyword: "electricity wires" },
            { id: 32, title: "NGO Program Coordinator", desc: "Manage humanitarian aid projects and budgets for non-profit organizations.", category: "rural", gender: "female", ageMin: 30, ageMax: 50, img_keyword: "humanitarian aid" },
            { id: 33, title: "Sales Executive", desc: "Drive revenue growth by developing new client relationships and closing deals.", category: "urban", gender: "male", ageMin: 20, ageMax: 45, img_keyword: "sales meeting" },
            { id: 34, title: "Veterinarian", desc: "Diagnose, treat, and prevent diseases in farm and companion animals.", category: "rural", gender: "female", ageMin: 25, ageMax: 55, img_keyword: "veterinary animal" },
            { id: 35, title: "Urban Planner", desc: "Create designs and policies for sustainable and efficient city development.", category: "urban", gender: "male", ageMin: 35, ageMax: 60, img_keyword: "city planning" },
            { id: 36, title: "Social Worker", desc: "Provide counseling and advocacy for individuals and families facing complex challenges.", category: "urban", gender: "female", ageMin: 30, ageMax: 55, img_keyword: "social help" },
            { id: 37, title: "Logistics Coordinator", desc: "Manage the flow of goods and services from production to delivery.", category: "urban", gender: "male", ageMin: 25, ageMax: 50, img_keyword: "logistics warehouse" },
            { id: 38, title: "Research Assistant (Biotech)", desc: "Conduct laboratory experiments and analyze data for scientific research projects.", category: "urban", gender: "female", ageMin: 20, ageMax: 30, img_keyword: "research lab" },
            { id: 39, title: "Waste Management Specialist", desc: "Develop and implement recycling and sanitation programs in regional areas.", category: "rural", gender: "male", ageMin: 25, ageMax: 45, img_keyword: "garbage recycling" },
            { id: 40, title: "Midwife", desc: "Provide care and support to women during pregnancy, labor, and the postpartum period.", category: "rural", gender: "female", ageMin: 30, ageMax: 50, img_keyword: "birth delivery" },
            { id: 41, title: "Robotics Technician", desc: "Install, program, and maintain automated and robotic production equipment.", category: "urban", gender: "male", ageMin: 20, ageMax: 40, img_keyword: "robotics" },
            { id: 42, title: "Quality Assurance Engineer", desc: "Design and execute test plans to ensure software products meet quality standards.", category: "urban", gender: "female", ageMin: 25, ageMax: 40, img_keyword: "testing" },
            { id: 43, title: "Aquaculture Technician", desc: "Manage and monitor fish farming operations, focusing on water quality and growth.", category: "rural", gender: "male", ageMin: 20, ageMax: 45, img_keyword: "fish farm" },
            { id: 44, title: "Museum Curator", desc: "Manage and maintain collections, and design exhibitions for educational purposes.", category: "urban", gender: "female", ageMin: 35, ageMax: 60, img_keyword: "museum artifacts" },
            { id: 45, title: "HVAC Technician", desc: "Install, service, and repair heating, ventilation, and air conditioning systems.", category: "urban", gender: "male", ageMin: 18, ageMax: 35, img_keyword: "air conditioning" },
            { id: 46, title: "ESL Instructor", desc: "Teach English as a Second Language to adult learners or international students.", category: "urban", gender: "female", ageMin: 25, ageMax: 50, img_keyword: "english teaching" },
            { id: 47, title: "Telecommunications Tech", desc: "Install and repair communication equipment, including fiber optics and cell networks.", category: "rural", gender: "male", ageMin: 20, ageMax: 40, img_keyword: "communications network" },
            { id: 48, title: "Public Relations Officer", desc: "Manage public image, handle media inquiries, and draft press releases.", category: "urban", gender: "female", ageMin: 25, ageMax: 45, img_keyword: "press conference" },
            { id: 49, title: "Construction Laborer", desc: "Perform physical tasks on construction sites, assisting skilled tradespeople.", category: "rural", gender: "male", ageMin: 18, ageMax: 50, img_keyword: "construction labor" },
            { id: 50, title: "Academic Dean", desc: "Lead faculty and manage academic programs at a college or university level.", category: "urban", gender: "female", ageMin: 50, ageMax: 65, img_keyword: "higher education" },
];

const filters = {
  category: [
    { label: "All Jobs", value: "all" },
    { label: "Urban Roles", value: "urban" },
    { label: "Rural Development", value: "rural" },
  ],
  gender: [
    { label: "Male Focus", value: "male" },
    { label: "Female Focus", value: "female" },
  ],
};

const Explorer = () => {
  const [activeFilters, setActiveFilters] = useState({ category: "all", gender: "all" });
  const [filteredJobs, setFilteredJobs] = useState(jobs);

  useEffect(() => {
    const filtered = jobs.filter((job) => {
      const passesCategory = activeFilters.category === "all" || job.category === activeFilters.category;
      const passesGender = activeFilters.gender === "all" || job.gender === activeFilters.gender;
      return passesCategory && passesGender;
    });
    setFilteredJobs(filtered);
  }, [activeFilters]);

  const handleFilterClick = (type, value) => {
    setActiveFilters((prev) => ({ ...prev, [type]: value }));
  };

  const getPlaceholderUrl = (keyword) => {
    const searchKey = keyword.replace(/\s/g, "+");
    return `https://source.unsplash.com/random/400x200/?${searchKey},career&${Math.random()}`;
  };

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Title */}
      <div className="pt-8 pb-4 text-center">
        <h1 className="text-4xl font-extrabold text-gray-900">Career Explorer</h1>
        <p className="mt-2 text-lg text-gray-500">
          Discover 50+ opportunities filtered by region and gender.
        </p>
      </div>

      {/* Filters */}
      <div className="sticky top-0 z-10 bg-white border-b border-gray-200 shadow-sm pt-4 pb-4 mb-8">
        <div className="flex flex-wrap gap-4 items-center justify-center sm:justify-start">
          <span className="font-semibold text-base text-gray-800 mr-2 hidden sm:inline">
            Filter By:
          </span>
          {filters.category.map((f) => (
            <button
              key={f.value}
              className={`px-3 py-1 rounded-md whitespace-nowrap cursor-pointer font-medium transition-colors duration-200 ${
                activeFilters.category === f.value
                  ? "text-blue-600 font-bold"
                  : "text-gray-500 hover:text-blue-600"
              }`}
              onClick={() => handleFilterClick("category", f.value)}
            >
              {f.label}
            </button>
          ))}
          {filters.gender.map((f) => (
            <button
              key={f.value}
              className={`px-3 py-1 rounded-md whitespace-nowrap cursor-pointer font-medium transition-colors duration-200 ${
                activeFilters.gender === f.value
                  ? "text-blue-600 font-bold"
                  : "text-gray-500 hover:text-blue-600"
              }`}
              onClick={() => handleFilterClick("gender", f.value)}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      {/* Job Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 py-4">
        {filteredJobs.length === 0 && (
          <div className="col-span-full text-center py-12 text-gray-500">
            <svg
              className="mx-auto h-12 w-12 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <h3 className="mt-2 text-sm font-medium text-gray-900">No Jobs Found</h3>
            <p className="mt-1 text-sm text-gray-500">Try broadening your focus area.</p>
          </div>
        )}
        {filteredJobs.map((job, index) => {
          const imageSrc = job.imageUrl || getPlaceholderUrl(job.img_keyword);
          const googleSearchUrl = `https://www.google.com/search?q=${encodeURIComponent(
            job.title + " job description"
          )}`;

          return (
            <div
              key={job.id}
              className="bg-white border border-gray-200 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 ease-in-out animate-fadeInUp hover:-translate-y-2 hover:shadow-2xl"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <img
                className="h-48 w-full object-cover"
                src={imageSrc}
                alt={job.title + " thumbnail"}
                onError={(e) => (e.currentTarget.src = getPlaceholderUrl("placeholder"))}
              />
              <div className="p-5">
                <h3 className="text-xl font-bold mt-2 text-gray-900">{job.title}</h3>
                <p className="text-sm text-gray-600 mt-1 h-12 overflow-hidden">{job.desc}</p>
                <div className="mt-4 flex flex-wrap text-xs font-semibold text-gray-500">
                  <span className="mr-3">{job.category.toUpperCase()}</span> |
                  <span className="mx-3">{job.gender.toUpperCase()}</span> |
                  <span>
                    Age {job.ageMin}-{job.ageMax}
                  </span>
                </div>
                <a
                  href={googleSearchUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-block bg-blue-600 text-white font-bold py-2 px-4 rounded-lg text-sm hover:bg-blue-700 transition duration-200"
                >
                  View Details (Google Search)
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </main>
  );
};

export default Explorer;
