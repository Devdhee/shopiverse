import React from 'react';

const FullStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-yellow-500"
  >
    <path d="M12 .587l3.668 7.431L24 9.76l-6 5.84 1.42 8.39L12 18.896l-7.42 4.094L6 15.6l-6-5.84 8.332-1.742z" />
  </svg>
);

const HalfStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-yellow-500"
  >
    <defs>
      <linearGradient id="half-grad">
        <stop offset="50%" stopColor="currentColor" />
        <stop offset="50%" stopColor="transparent" stopOpacity="1" />
      </linearGradient>
    </defs>
    <path
      fill="url(#half-grad)"
      d="M12 .587l3.668 7.431L24 9.76l-6 5.84 1.42 8.39L12 18.896l-7.42 4.094L6 15.6l-6-5.84 8.332-1.742z"
    />
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l2.2 6.769a1 1 0 00.95.691h7.119c.969 0 1.372 1.24.588 1.81l-5.75 4.12a1 1 0 00-.364 1.118l2.2 6.768c.3.921-.755 1.688-1.54 1.118l-5.75-4.119a1 1 0 00-1.176 0l-5.75 4.12c-.784.57-1.84-.197-1.54-1.118l2.2-6.768a1 1 0 00-.364-1.118l-5.75-4.12c-.784-.57-.38-1.81.588-1.81h7.118a1 1 0 00.951-.691l2.2-6.768z"
    />
  </svg>
);

const EmptyStar = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="currentColor"
    className="w-6 h-6 text-gray-300"
  >
    <path d="M12 .587l3.668 7.431L24 9.76l-6 5.84 1.42 8.39L12 18.896l-7.42 4.094L6 15.6l-6-5.84 8.332-1.742z" />
  </svg>
);

const StarRating = ({ rating }: { rating: number }) => {
  const fullStars = Math.floor(rating);
  const hasHalfStar = rating % 1 >= 0.5;
  const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);

  return (
    <div className="flex items-center">
      {[...Array(fullStars)].map((_, i) => (
        <FullStar key={i} />
      ))}
      {hasHalfStar && <HalfStar />}
      {[...Array(emptyStars)].map((_, i) => (
        <EmptyStar key={i + fullStars + (hasHalfStar ? 1 : 0)} />
      ))}
    </div>
  );
};

export default StarRating;
