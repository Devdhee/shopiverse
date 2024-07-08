'use client';

import { motion, useAnimation, useInView } from 'framer-motion';
import { ReactNode, useEffect, useRef } from 'react';

function ProductsContainer({ children }: { children: ReactNode }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-30% 0px' });
  const controls = useAnimation();

  useEffect(() => {
    if (isInView) {
      controls.start('visible');
    }
  }, [isInView, controls]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={controls}
      variants={{
        hidden: { opacity: 0, y: 70 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.5, delay: 0.25 },
        },
      }}
      className="px-1 mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-2 sm:gap-x-3 gap-y-12 justify-items-center w-full"
    >
      {children}
    </motion.div>
  );
}

export default ProductsContainer;
