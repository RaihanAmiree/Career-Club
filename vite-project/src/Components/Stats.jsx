import React from "react";

const statsData = [
  {
    id: 1,
    logo: "https://img.icons8.com/ios/100/ffffff/user-group-man-man.png",
    number: "6,561+",
    label: "Satisfied Clients",
  },
  {
    id: 2,
    logo: "https://img.icons8.com/ios/100/ffffff/opened-folder.png",
    number: "600+",
    label: "Finished Projects",
  },
  {
    id: 3,
    logo: "https://img.icons8.com/ios/100/ffffff/idea.png",
    number: "250+",
    label: "Skilled Experts",
  },
  {
    id: 4,
    logo: "https://img.icons8.com/ios/100/ffffff/megaphone.png",
    number: "590+",
    label: "Media Posts",
  },
];

const Stats = () => {
  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto bg-gradient-to-r from-[#030b37] via-[#040e47] to-[#071567] rounded-2xl shadow-lg px-6 py-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {statsData.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center">
              {/* Logo / Icon */}
              <img
                src={stat.logo}
                alt={stat.label}
                className="w-12 h-12 mb-3"
              />

              {/* Number */}
              <h2 className="text-2xl font-bold text-white">{stat.number}</h2>

              {/* Label */}
              <p className="text-white font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Stats;
