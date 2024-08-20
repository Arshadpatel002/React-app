import React from 'react';

// Function to trim text to a specified number of words
const trimText = (text, wordLimit) => {
  const words = text.split(' ');
  if (words.length <= wordLimit) return text;
  return words.slice(0, wordLimit).join(' ') + '...';
};

// Function to get the current date and time in a readable format
const getCurrentDateTime = () => {
  const date = new Date();
  const formattedDate = date.toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
  const formattedTime = date.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: true });
  return `${formattedDate} at ${formattedTime}`;
};

const PostCard = ({ title, body, onRemove }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg relative">
      {/* Remove Button */}
      <button
        className="absolute top-2 right-2 text-red-500"
        onClick={onRemove}
        aria-label="Remove Post"
      >
        &times;
      </button>

      {/* Title */}
      <h2 className="font-bold text-xl mb-2">{title}</h2>

      {/* Body */}
      <p className="mb-4">{trimText(body, 20)}</p>

      {/* Current Date and Time */}
      <p className="text-gray-400 text-lg ml-12 mb-2 ">{getCurrentDateTime()}</p>

      {/* Image */}
      <img
        src={"https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"}
        alt={title}
        className="w-[300px] h-[200px] m-auto rounded-lg"
      />
    </div>
  );
};

export default PostCard;
