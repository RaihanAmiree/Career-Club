import React from "react";

const CommentCard = ({ comment }) => {
  return (
    // Adjusted width to 90vw for mobile, max-width for consistency
    // min-height added to ensure it doesn't collapse but remains flexible (h-auto)
    <div className="animated-border-card w-[90vw] max-w-[400px] h-auto min-h-[280px] md:min-h-[400px] flex-shrink-0 mx-auto group">
      {/* Optional user icon */}
      <div className="comment-icon-wrapper">
        <svg
          className="w-6 h-6 text-[#a78bfa]"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
          ></path>
        </svg>
      </div>

      {/* User's Name */}
      <h3 className="text-xl font-bold mb-2 text-white">{comment.name}</h3>

      {/* User's Comment Text */}
      <p className="text-gray-400 text-base leading-relaxed flex-grow">
        "{comment.comment}"
      </p>

      {/* Comment Timestamp */}
      <p className="text-gray-500 text-sm mt-4 text-right">— {comment.timestamp}</p>
    </div>
  );
};

export default CommentCard;
