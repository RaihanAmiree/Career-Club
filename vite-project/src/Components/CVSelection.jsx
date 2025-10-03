import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // ✅ Import navigation hook
import Underline from "./Underline";

const CVSelection = () => {
  const [selectedTemplate, setSelectedTemplate] = useState(null);
  const navigate = useNavigate(); // ✅ Initialize navigation

  // Templates with paths
  const templates = [
    {
      id: 1,
      name: "Minimalist Portfolio",
      description:
        "A super clean and simple layout perfect for showcasing creative work with a subtle dark mode option.",
      path: "/cv1",
    },
    {
      id: 2,
      name: "Corporate Business Site V2.0",
      description:
        "Professional, structured, and feature-rich layout designed for enterprise and corporate services.",
      path: "/cv2",
    },
    {
      id: 3,
      name: "E-commerce Magazine Style",
      description:
        "A visually rich and modern design optimized for product discovery and stylish online retail shops.",
      path: "/cv3",
    },
    {
      id: 4,
      name: "Ultra Long Template Name Example",
      description:
        "This template is built to test the text wrapping and overflow handling within the card design.",
      path: "/cv4",
    },
    {
      id: 5,
      name: "Classic Blog & Publishing Layout",
      description:
        "Traditional vertical blog post feed with an accessible sidebar for categories and popular posts.",
      path: "/cv5",
    },
    {
      id: 6,
      name: "Creative Agency One-Pager with Motion",
      description:
        "A bold, interactive single-page website for creative teams that focuses on large imagery and smooth animations.",
      path: "/cv6",
    },
  ];

  const handleSelect = (template) => {
    setSelectedTemplate(template.id);
  };

  const handleConfirmSelection = () => {
    if (selectedTemplate) {
      const selected = templates.find((t) => t.id === selectedTemplate);
      navigate(selected.path); // ✅ Navigate to selected CV page
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-4 sm:p-8">
      <Underline title="CV Builder" className="my-[clamp(2rem,5vw,5rem)]"></Underline>
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <header className="mb-10 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
            Choose Your CV Template
          </h1>
          <p className="text-lg text-gray-600">
            Select a template to preview and start building your CV.
          </p>
        </header>

        {/* Template Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates.map((template) => (
            <div
              key={template.id}
              onClick={() => handleSelect(template)}
              className={`bg-white rounded-xl shadow-xl p-6 border-2 border-gray-200 cursor-pointer transition duration-300 hover:shadow-2xl hover:border-indigo-400 ${
                selectedTemplate === template.id
                  ? "!border-indigo-600 ring-4 ring-indigo-200 transform scale-[1.01]"
                  : ""
              }`}
            >
              {/* Template Name */}
              <div className="h-14 mb-2">
                <h2 className="text-xl font-bold text-gray-800 line-clamp-2">
                  {template.name}
                </h2>
              </div>

              {/* Placeholder Preview */}
              <div className="w-full bg-gray-100 rounded-lg h-32 flex items-center justify-center mb-4 border border-dashed border-gray-300 text-gray-400 text-xs font-medium">
                [Template Preview Placeholder]
              </div>

              {/* Template Description */}
              <p className="text-sm text-gray-600 mb-4">{template.description}</p>

              <div className="text-sm font-semibold text-indigo-500">
                Click to Select
              </div>
            </div>
          ))}
        </div>

        {/* Action Button */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={handleConfirmSelection}
            disabled={!selectedTemplate}
            className="px-8 py-3 text-lg font-semibold rounded-full bg-indigo-600 text-white shadow-lg hover:bg-indigo-700 transition duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Select Template
          </button>
        </div>
      </div>
    </div>
  );
};

export default CVSelection;
