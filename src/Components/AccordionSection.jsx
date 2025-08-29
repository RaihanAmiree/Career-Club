import React from 'react'
import Underline from './Underline'
import Accordion from './Accordion'

const AccordionSection = () => {
  return (
    <div>
      <section className="bg-white py-16 sm:py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <p className="text-sm sm:text-base uppercase tracking-widest text-[#0a1a2f] mb-4">
            Our Motto
          </p>

          {/* Title with Hover Effect */}
          <Underline title="Why Are We Different"></Underline>

          {/* Motto Description */}
          <Accordion></Accordion>
        </div>
      </section>
    </div>
  )
}

export default AccordionSection
