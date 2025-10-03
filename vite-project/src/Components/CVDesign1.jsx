import React, { useState, useEffect } from "react";

const CVDesign1 = () => {
  const [formData, setFormData] = useState({
    photoUrl: "https://placehold.co/128x128/34495e/ffffff?text=Photo",
    name: "RICHARD SANCHEZ",
    title: "MARKETING MANAGER",
    phone: "+123-456-7890",
    email: "hello@reallygreatsite.com",
    address: "123 Anywhere St., Any City",
    website: "www.reallygreatsite.com",
    summary:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam quis nostrud exercitation.",
    expTitle1: "Marketing Manager & Specialist",
    expCompany1: "Borcelle Studio",
    expDates1: "2030 - PRESENT",
    expDesc1:
      "Develop and execute comprehensive marketing strategies and campaigns that align with the company's goals and objectives.\nLead, mentor, and manage a high-performing marketing team, fostering a collaborative and results-driven work environment.\nMonitor brand consistency across marketing channels and materials.",
    eduDegree1: "Master of Business Management",
    eduInst1: "WARDIERE UNIVERSITY",
    eduDates1: "2029 - 2030",
    gpa1: "3.8 / 4.0",
    skills:
      "Project Management\nPublic Relations\nTeamwork\nTime Management\nLeadership\nEffective Communication\nCritical Thinking",
    languages: "English (Fluent)\nFrench (Fluent)\nGerman (Basic)\nSpanish (Intermediate)",
    refName1: "Estelle Darcy",
    refTitle1: "Wardiere Inc. / CTO",
    refPhone1: "123-456-7890",
    refEmail1: "hello@reallygreatsite.com",
    refName2: "Harper Richard",
    refTitle2: "Wardiere Inc. / CEO",
    refPhone2: "123-456-7890",
    refEmail2: "hello@reallygreatsite.com",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const renderList = (text) => {
    if (!text) return null;
    return text
      .split("\n")
      .filter((line) => line.trim().length > 0)
      .map((line, idx) => (
        <li key={idx} className="mb-1">
          {line.replace(/^-/g, "").trim()}
        </li>
      ));
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen antialiased">
      {/* Input Panel */}
      <div className="w-full lg:w-1/3 overflow-y-auto p-6 bg-white border-r border-gray-200">
        <h1 className="text-3xl font-extrabold text-blue-600 mb-6">CV Builder</h1>
        <p className="text-sm text-gray-500 mb-6">
          Fill out the forms below and watch your CV update instantly on the right.
        </p>

        <form className="space-y-6">
          {/* Personal Details */}
          <div className="bg-blue-50 p-4 rounded-lg">
            <h2 className="text-xl font-semibold mb-3 text-blue-700">
              1. Personal Details
            </h2>
            <div className="space-y-3">
              <input
                type="url"
                id="photoUrl"
                placeholder="Profile Photo URL (Optional)"
                className="w-full p-2 border border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.photoUrl}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="name"
                placeholder="Full Name"
                className="w-full p-2 border border-blue-200 rounded-md focus:ring-blue-500 focus:border-blue-500"
                value={formData.name}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="title"
                placeholder="Professional Title"
                className="w-full p-2 border border-blue-200 rounded-md"
                value={formData.title}
                onChange={handleInputChange}
              />
              <input
                type="email"
                id="email"
                placeholder="Email Address"
                className="w-full p-2 border border-blue-200 rounded-md"
                value={formData.email}
                onChange={handleInputChange}
              />
              <input
                type="tel"
                id="phone"
                placeholder="Phone Number"
                className="w-full p-2 border border-blue-200 rounded-md"
                value={formData.phone}
                onChange={handleInputChange}
              />
              <input
                type="text"
                id="address"
                placeholder="Address"
                className="w-full p-2 border border-blue-200 rounded-md"
                value={formData.address}
                onChange={handleInputChange}
              />
              <input
                type="url"
                id="website"
                placeholder="Website/Portfolio URL (Optional)"
                className="w-full p-2 border border-blue-200 rounded-md"
                value={formData.website}
                onChange={handleInputChange}
              />
            </div>
          </div>

          {/* Profile */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">2. Profile / Summary</h2>
            <textarea
              id="summary"
              rows="4"
              placeholder="Write a concise professional profile."
              className="w-full p-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
              value={formData.summary}
              onChange={handleInputChange}
            />
          </div>

          {/* Work Experience */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">3. Work Experience (Latest)</h2>
            <input
              type="text"
              id="expTitle1"
              placeholder="Job Title"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.expTitle1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="expCompany1"
              placeholder="Company Name"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.expCompany1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="expDates1"
              placeholder="Start Date - End Date"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.expDates1}
              onChange={handleInputChange}
            />
            <textarea
              id="expDesc1"
              rows="3"
              placeholder="Key achievements/responsibilities (one per line)"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.expDesc1}
              onChange={handleInputChange}
            />
          </div>

          {/* Education */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">4. Education (Latest)</h2>
            <input
              type="text"
              id="eduDegree1"
              placeholder="Degree / Qualification"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.eduDegree1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="eduInst1"
              placeholder="Institution Name"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.eduInst1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="eduDates1"
              placeholder="Dates Attended / Graduation Year"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.eduDates1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="gpa1"
              placeholder="GPA / Result (Optional)"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.gpa1}
              onChange={handleInputChange}
            />
          </div>

          {/* Skills */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">5. Skills & Languages</h2>
            <textarea
              id="skills"
              rows="3"
              placeholder="Key Skills (one per line)"
              className="w-full p-2 mb-3 border border-gray-300 rounded-md"
              value={formData.skills}
              onChange={handleInputChange}
            />
            <textarea
              id="languages"
              rows="3"
              placeholder="Languages (one per line)"
              className="w-full p-2 border border-gray-300 rounded-md"
              value={formData.languages}
              onChange={handleInputChange}
            />
          </div>

          {/* References */}
          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">6. Reference 1</h2>
            <input
              type="text"
              id="refName1"
              placeholder="Reference Name"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.refName1}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="refTitle1"
              placeholder="Reference Title / Company"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.refTitle1}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              id="refPhone1"
              placeholder="Reference Phone"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.refPhone1}
              onChange={handleInputChange}
            />
            <input
              type="email"
              id="refEmail1"
              placeholder="Reference Email"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.refEmail1}
              onChange={handleInputChange}
            />
          </div>

          <div className="bg-white p-4 rounded-lg border border-gray-200">
            <h2 className="text-xl font-semibold mb-3 text-gray-800">7. Reference 2</h2>
            <input
              type="text"
              id="refName2"
              placeholder="Reference Name"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.refName2}
              onChange={handleInputChange}
            />
            <input
              type="text"
              id="refTitle2"
              placeholder="Reference Title / Company"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.refTitle2}
              onChange={handleInputChange}
            />
            <input
              type="tel"
              id="refPhone2"
              placeholder="Reference Phone"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.refPhone2}
              onChange={handleInputChange}
            />
            <input
              type="email"
              id="refEmail2"
              placeholder="Reference Email"
              className="w-full p-2 border border-gray-300 rounded-md mb-2"
              value={formData.refEmail2}
              onChange={handleInputChange}
            />
          </div>
        </form>
      </div>

      {/* CV Preview */}
      <div className="w-full lg:w-2/3 flex flex-col overflow-y-auto">
        <div className="print-controls w-full max-w-3xl mx-auto p-4 flex justify-end space-x-4 bg-white border-b border-gray-200 shadow-sm rounded-t-lg mt-4 lg:mt-0">
          <button
            onClick={() => window.print()}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg transition duration-150 ease-in-out text-sm"
          >
            Download / Print CV
          </button>
        </div>

        <div className="cv-preview-container flex-grow p-8 lg:p-12 xl:p-16 bg-gray-200">
          <div className="grid grid-cols-1 lg:grid-cols-12 bg-white shadow-lg max-w-7xl mx-auto">
            {/* Left Sidebar */}
            <div className="cv-sidebar col-span-4 bg-blue-900 text-white p-6 space-y-6">
              <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-white">
                <img
                  src={formData.photoUrl}
                  alt="Profile"
                  className="w-full h-full object-cover"
                  onError={(e) =>
                    (e.target.src = "https://placehold.co/128x128/34495e/ffffff?text=Photo")
                  }
                />
              </div>
              <div>
                <h2 className="text-white border-b border-white pb-1 mb-2">CONTACT</h2>
                <p>Phone: {formData.phone}</p>
                <p>Email: {formData.email}</p>
                <p>Address: {formData.address}</p>
                <p>Website: {formData.website}</p>
              </div>

              <div>
                <h2 className="text-white border-b border-white pb-1 mb-2">EDUCATION</h2>
                <p className="font-bold">{formData.eduDates1}</p>
                <p className="text-lg font-semibold">{formData.eduInst1}</p>
                <ul className="list-disc ml-4">
                  <li>{formData.eduDegree1}</li>
                  {formData.gpa1 && <li>GPA: {formData.gpa1}</li>}
                </ul>
              </div>

              <div>
                <h2 className="text-white border-b border-white pb-1 mb-2">SKILLS</h2>
                <ul className="list-disc ml-4">{renderList(formData.skills)}</ul>
              </div>

              <div>
                <h2 className="text-white border-b border-white pb-1 mb-2">LANGUAGES</h2>
                <ul className="list-disc ml-4">{renderList(formData.languages)}</ul>
              </div>
            </div>

            {/* Right Main */}
            <div className="cv-main col-span-8 p-6 space-y-6">
              <header>
                <h1 className="text-5xl font-extrabold">{formData.name}</h1>
                <p className="text-lg font-semibold uppercase text-gray-600 mt-1">{formData.title}</p>
              </header>

              <div>
                <h2 className="text-xl font-bold uppercase text-gray-700 mb-2 border-b border-gray-300 pb-1">
                  PROFILE
                </h2>
                <p className="text-gray-700 whitespace-pre-line">{formData.summary}</p>
              </div>

              <div>
                <h2 className="text-xl font-bold uppercase text-gray-700 mb-2 border-b border-gray-300 pb-1">
                  WORK EXPERIENCE
                </h2>
                <div>
                  <div className="flex justify-between items-start">
                    <h3 className="text-lg font-semibold">{formData.expCompany1}</h3>
                    <span className="text-sm font-medium text-gray-600">{formData.expDates1}</span>
                  </div>
                  <p className="text-blue-600 italic mb-2">{formData.expTitle1}</p>
                  <ul className="list-disc ml-5 text-sm text-gray-700">{renderList(formData.expDesc1)}</ul>
                </div>
              </div>

              <div>
                <h2 className="text-xl font-bold uppercase text-gray-700 mb-2 border-b border-gray-300 pb-1">
                  REFERENCES
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
                  <div>
                    <p className="font-bold">{formData.refName1}</p>
                    <p className="text-blue-600">{formData.refTitle1}</p>
                    <p>Phone: {formData.refPhone1}</p>
                    <p>Email: {formData.refEmail1}</p>
                  </div>
                  <div>
                    <p className="font-bold">{formData.refName2}</p>
                    <p className="text-blue-600">{formData.refTitle2}</p>
                    <p>Phone: {formData.refPhone2}</p>
                    <p>Email: {formData.refEmail2}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CVDesign1;
