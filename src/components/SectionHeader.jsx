import { motion } from 'framer-motion';

function SectionHeader({ eyebrow, title, subtitle, center = false }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className={center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2 className="display-2 mt-4 text-balance">{title}</h2>
      {subtitle ? <p className="mt-4 text-base text-slate-600 md:text-lg">{subtitle}</p> : null}
    </motion.div>
  );
}

export default SectionHeader;
