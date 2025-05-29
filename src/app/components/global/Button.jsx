import { FaArrowRight } from "react-icons/fa6";
import { motion } from "framer-motion";

const Button = ({ text, onClick }) => {
  return (
    <motion.button
      onClick={onClick}
      initial="initial"
      whileHover="hover"
      whileTap="tap"
      variants={{
        initial: { borderWidth: "0px" },
        hover: { borderWidth: "4px" },
        tap: { scale: 0.98 },
      }}
      transition={{ duration: 0.2, ease: "easeInOut" }}
      className="z-10 bg-white rounded-full border-pink-500/50 relative cursor-pointer"
    >
      <motion.p
        variants={{
          initial: { color: "black" },
          hover: { color: "white" },
        }}
        transition={{ duration: 0.1, delay: 0.1 }}
        className="w-full h-12 flex items-center pl-6 pr-20 z-50 relative"
      >
        {text}
      </motion.p>

      <motion.div
        variants={{
          initial: { width: "48px", height: "98%" },
          hover: { width: "99%", height: "98%" },
        }}
        transition={{ duration: 0.3, ease: "easeIn", delay: 0.1 }}
        className="absolute right-[1px] top-1/2 -translate-y-1/2 bg-blue-700 text-white rounded-full flex items-center z-20"
      >
        <FaArrowRight
          size={12}
          className="absolute top-1/2 right-[18px] -translate-y-1/2"
        />
      </motion.div>
    </motion.button>
  );
};

export default Button;
