import Star from './Star';

interface RatingProps {
  rating: number;
}

function Rating({ rating }: RatingProps) {
  // Calculate the whole number part of the rating
  const integerPart = Math.floor(rating);
  // Calculate the decimal part of the rating
  const decimalPart = rating - integerPart;

  // Determine the number of full stars
  const fullStars = Array(integerPart).fill('full');
  // Determine if there is a half star
  const halfStar = decimalPart >= 0.5 ? 'half' : null;

  return (
    <div className="flex items-center">
      {/* Render full stars */}
      {fullStars.map((_, index) => (
        <svg
          key={index}
          className="h-6 w-6 fill-current text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 1l2.3 6.8H18l-5 3.6 1.7 6.1-5.6-4.2L5 17.5l1.7-6.1-5-3.6h5.7L10 1z"
            clipRule="evenodd"
          />
        </svg>
      ))}
      {/* Render half star if exists */}
      {halfStar && (
        <svg
          className="h-6 w-6 fill-current text-yellow-400"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 1l2.3 6.8H18l-5 3.6 1.7 6.1-5.6-4.2L5 17.5l1.7-6.1-5-3.6h5.7L10 1z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {/* Render empty stars */}
      {Array(5 - fullStars.length - (halfStar ? 1 : 0))
        .fill('empty')
        .map((_, index) => (
          <svg
            key={index}
            className="h-6 w-6 fill-current text-gray-400"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10 1l2.3 6.8H18l-5 3.6 1.7 6.1-5.6-4.2L5 17.5l1.7-6.1-5-3.6h5.7L10 1z"
              clipRule="evenodd"
            />
          </svg>
        ))}
    </div>
  );
}

export default Rating;
