'use client';

import Button from './Button';

function HeroCTA() {
  function handleScrollToNewArrivals() {
    document
      .getElementById('new-arrivals')
      ?.scrollIntoView({ behavior: 'smooth' });
  }

  return (
    <Button variant="primary" onClick={handleScrollToNewArrivals}>
      Start Exploring
    </Button>
  );
}

export default HeroCTA;
