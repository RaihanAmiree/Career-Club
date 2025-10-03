import React from 'react';
import Underline from './Underline';

// Sample PDF data (replace URLs with your actual PDFs)
const pdfBooks = [
  { id: 1, title: 'Career Growth Strategies', url: '/pdfs/career-growth.pdf' },
  { id: 2, title: 'Effective Networking', url: '/pdfs/effective-networking.pdf' },
  { id: 3, title: 'Job Interview Guide', url: '/pdfs/job-interview.pdf' },
  { id: 4, title: 'Resume Writing Tips', url: '/pdfs/resume-writing.pdf' },
  { id: 5, title: 'Time Management Skills', url: '/pdfs/time-management.pdf' },
  { id: 6, title: 'Leadership Essentials', url: '/pdfs/leadership.pdf' },
  { id: 7, title: 'Team Collaboration', url: '/pdfs/team-collaboration.pdf' },
  { id: 8, title: 'Personal Branding', url: '/pdfs/personal-branding.pdf' },
  { id: 9, title: 'Negotiation Skills', url: '/pdfs/negotiation.pdf' },
  { id: 10, title: 'Communication Mastery', url: '/pdfs/communication.pdf' },
  { id: 11, title: 'Problem Solving Techniques', url: '/pdfs/problem-solving.pdf' },
  { id: 12, title: 'Emotional Intelligence', url: '/pdfs/emotional-intelligence.pdf' },
  { id: 13, title: 'Career Planning', url: '/pdfs/career-planning.pdf' },
  { id: 14, title: 'Productivity Hacks', url: '/pdfs/productivity.pdf' },
  { id: 15, title: 'Interview Preparation', url: '/pdfs/interview-preparation.pdf' },
  { id: 16, title: 'Project Management', url: '/pdfs/project-management.pdf' },
  { id: 17, title: 'Critical Thinking', url: '/pdfs/critical-thinking.pdf' },
  { id: 18, title: 'Remote Work Strategies', url: '/pdfs/remote-work.pdf' },
  { id: 19, title: 'Career Transitions', url: '/pdfs/career-transitions.pdf' },
  { id: 20, title: 'Entrepreneurship Basics', url: '/pdfs/entrepreneurship.pdf' },
];

const CareerLibrary = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
        <Underline title="Career Books Library" className="my-[clamp(2rem,5vw,5rem)]"></Underline>

      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {pdfBooks.map(book => (
          <div
            key={book.id}
            className="bg-white rounded-lg shadow p-4 flex flex-col hover:shadow-lg transition"
          >
            <h2 className="font-semibold text-gray-800 mb-2 truncate">{book.title}</h2>
            
            <div className="flex-1 border rounded overflow-hidden mb-2">
              <iframe
                src={book.url}
                title={book.title}
                className="w-full h-80"
              ></iframe>
            </div>

            <a
              href={book.url}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-auto text-sm bg-blue-600 text-white px-3 py-1 rounded hover:bg-blue-700 text-center"
            >
              Open in New Tab
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CareerLibrary;
