import { useInView } from 'framer-motion';
import CountUp from 'react-countup';
import { useRef } from 'react';

function AnimatedCounter({ value, prefix = '', suffix = '' }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.6 });

  return (
    <span ref={ref} className="text-4xl font-extrabold text-primary-300 sm:text-5xl">
      {prefix}
      {isInView ? <CountUp end={value} duration={1.5} /> : 0}
      {suffix}
    </span>
  );
}

export default AnimatedCounter;
