import { motion } from 'framer-motion';

const blobs = [
  'left-[-12%] top-[8%] h-96 w-96 bg-primary-500/16',
  'right-[-10%] top-[24%] h-[28rem] w-[28rem] bg-sky-400/14',
  'left-[24%] bottom-[-14%] h-[24rem] w-[24rem] bg-indigo-500/12',
  'right-[16%] bottom-[8%] h-72 w-72 bg-cyan-300/12',
];

function FloatingBlobs() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-0 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_12%_18%,rgba(59,103,246,0.16),transparent_44%),radial-gradient(circle_at_90%_0%,rgba(14,165,233,0.14),transparent_36%),radial-gradient(circle_at_55%_100%,rgba(79,70,229,0.1),transparent_40%)]" />
      {blobs.map((classes, index) => (
        <motion.div
          key={classes}
          className={`absolute rounded-full blur-3xl ${classes}`}
          animate={{ y: [0, -20, 0], x: [0, 16, 0], scale: [1, 1.05, 1] }}
          transition={{ duration: 12 + index * 2, repeat: Infinity, ease: 'easeInOut' }}
        />
      ))}
    </div>
  );
}

export default FloatingBlobs;
