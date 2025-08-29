import React from 'react'
import Underline from './Underline'

const CommentForm = () => {
  return (
    <div>
      <section className="bg-white py-16 sm:py-20 md:py-24 px-6">
        <div className="max-w-4xl mx-auto text-center">
          {/* Section Label */}
          <p className="text-sm sm:text-base uppercase tracking-widest text-[#0a1a2f] mb-4">
            Our Motto
          </p>

          {/* Title with Hover Effect */}
          <Underline title="Nova Aurora"></Underline>

          {/* Motto Description */}
          <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed max-w-3xl mx-auto mt-8 px-2 sm:px-0">
            <span className="font-semibold text-[#0a1a2f]">Nova Aurora</span>,
            meaning <em>“New Dawn”</em>, reflects our vision of creating fresh
            opportunities and guiding students towards growth, resilience, and
            excellence in their career and livelihood journeys.
          </p>
        </div>
      </section>
    </div>
  )
}

export default CommentForm
