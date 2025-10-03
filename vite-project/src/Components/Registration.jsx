import React from "react";
import './Registration.css';
import Underline from "./Underline";

const RegistrationForm = () => {
  return (
    <>
        <Underline title='Register To Become A Member of ASCLC' className="mt-20"></Underline>
    <div className="bg-white min-h-screen flex items-center justify-center p-4">
      <div className="glass w-full max-w-3xl rounded-xl p-8 md:p-10 text-white shadow-2xl z-10">
        <h1 className="text-3xl font-bold text-center mb-8">Student Registration</h1>

        <form action="#" method="POST">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-semibold mb-2">Full Name</label>
            <input type="text" id="name" name="name" required
                   className="w-full p-3 rounded-lg glass-input placeholder-gray-500 transition duration-200" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <div>
              <label htmlFor="class" className="block text-sm font-semibold mb-2">Class</label>
              <input type="text" id="class" name="class" required
                     className="w-full p-3 rounded-lg glass-input" />
            </div>
            <div>
              <label htmlFor="roll" className="block text-sm font-semibold mb-2">Roll Number</label>
              <input type="text" id="roll" name="roll" required
                     className="w-full p-3 rounded-lg glass-input" />
            </div>
            <div>
              <label htmlFor="section" className="block text-sm font-semibold mb-2">Section</label>
              <input type="text" id="section" name="section"
                     className="w-full p-3 rounded-lg glass-input" />
            </div>
            <div>
              <label htmlFor="shift" className="block text-sm font-semibold mb-2">Shift</label>
              <select id="shift" name="shift"
                      className="w-full p-3 rounded-lg glass-input appearance-none">
                <option value="morning">Morning</option>
                <option value="day">Day</option>
              </select>
            </div>
          </div>

          <div className="mb-6">
            <label htmlFor="reference" className="block text-sm font-semibold mb-2">Reference (Name/Code)</label>
            <input type="text" id="reference" name="reference"
                   className="w-full p-3 rounded-lg glass-input" />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
            <div>
              <label htmlFor="email" className="block text-sm font-semibold mb-2">Email Address</label>
              <input type="email" id="email" name="email" required
                     className="w-full p-3 rounded-lg glass-input" />
            </div>
            <div>
              <label htmlFor="contact" className="block text-sm font-semibold mb-2">Contact Number</label>
              <input type="tel" id="contact" name="contact" required
                     className="w-full p-3 rounded-lg glass-input" />
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="whatsapp" className="block text-sm font-semibold mb-2">WhatsApp Number (Optional)</label>
              <input type="tel" id="whatsapp" name="whatsapp"
                     className="w-full p-3 rounded-lg glass-input" />
            </div>
          </div>

          <button type="submit"
                  className="w-full py-3 text-black font-bold rounded-lg shadow-xl hover:shadow-2xl transition duration-300 transform hover:scale-[1.005]"
                  style={{ backgroundImage: "linear-gradient(to right, var(--button-start-light), var(--accent-cyan))" }}>
            Register Now
          </button>
        </form>
      </div>
    </div>
    
    </>
  );
};

export default RegistrationForm;
