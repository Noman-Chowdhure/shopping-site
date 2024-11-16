import { motion } from 'framer-motion';

const WinderCollection = () => {
  return (
    <div
      id="windter"
      className="w-full h-full p-10 md:py-20 overflow-hidden" // Added overflow-hidden to hide out-of-view content
    >
      <motion.h1
        className="text-9xl font-PT uppercase"
        initial={{ x: '100%' }}  // Start off-screen to the right
        animate={{ x: '-100%' }} // Move to the left off-screen
        transition={{
          duration: 10, // Increased duration for a slower animation
          ease: 'easeInOut', // Smoother easing function
          repeat: Infinity, // Continuous repeat
        }}
      >
        our top <span className="font-semibold text-zinc-300 capitalize text-[12vw]">popular</span> product for <span className="font-semibold text-zinc-300 capitalize text-[12vw]">you</span>
      </motion.h1>
    </div>
  );
};

export default WinderCollection;
