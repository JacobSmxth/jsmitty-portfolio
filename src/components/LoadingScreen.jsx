import { motion } from 'framer-motion';

const LoadingScreen = () => {
  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="h-screen w-screen flex items-center justify-center bg-gradient-to-br from-gray-900 to-gray-800"
    >
      <div className="text-center">
        <motion.div 
          animate={{ 
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            repeatType: "loop"
          }}
          className="inline-block mb-4"
        >
          <span className="text-5xl font-mono text-blue-500">&lt;/&gt;</span>
        </motion.div>
        <motion.h1 
          animate={{ opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="text-xl text-gray-200 mt-4"
        >
          Jacob Smith
        </motion.h1>
      </div>
    </motion.div>
  );
};

export default LoadingScreen;