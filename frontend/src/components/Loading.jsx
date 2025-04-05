import { motion } from "framer-motion";

const Loading = () => {
  return (
    <div className="flex justify-center items-center min-h-screen bg-blue-50">
      <motion.div
        className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"
        initial={{ rotate: 0 }}
        animate={{ rotate: 360 }}
        transition={{ repeat: Infinity, duration: 1 }}
      />
      <span className="ml-4 text-blue-600 font-semibold text-lg">Loading...</span>
    </div>
  );
};

export default Loading;
