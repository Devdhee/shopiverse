interface StarProps {
  filled: boolean;
  fraction?: number;
}

function Star({ filled, fraction = 1 }: StarProps) {
  const fillColor = filled ? 'gold' : 'gray';
  const fillFraction = filled ? fraction : 0;

  return (
    <svg
      height="25"
      width="23"
      className="size-7"
      viewBox="0 0 25 25"
      fill={fillColor}
    >
      <defs>
        <linearGradient id="grad1">
          <stop offset={`${fillFraction * 100}%`} stopColor="gold" />
          <stop offset={`${fillFraction * 100}%`} stopColor="gray" />
        </linearGradient>
      </defs>
      <polygon
        points="9.9, 1.1 12.3, 7.7 19.3, 7.7 13.7, 11.7 16.1, 18.3 9.9, 14.3 3.9, 18.3 6.3, 11.7 0.3, 7.7 7.3, 7.7"
        fill={`url(#grad1)`}
      />
    </svg>
  );
}

export default Star;
