import React from "react";
import { motion } from "framer-motion";

interface LogoProps {
  className?: string;
  size?: "sm" | "md" | "lg";
  dark?: boolean;
}

export const Logo: React.FC<LogoProps> = ({ className = "", size = "md", dark = false }) => {
  const sizes = {
    sm: "text-2xl",
    md: "text-3xl",
    lg: "text-4xl",
  };

  return (
      <motion.div
          className={`inline-flex items-center font-extrabold tracking-tight drop-shadow-sm ${sizes[size]} ${className}`}
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.2 }}
      >
      <span
          className={`bg-gradient-to-r ${
              dark
                  ? "from-sky-400 via-sky-500 to-blue-600"
                  : "from-blue-700 via-sky-500 to-sky-400"
          } bg-clip-text text-transparent`}
      >
        J
      </span>
        <span
            className={`relative bg-gradient-to-r ${
                dark
                    ? "from-sky-400 via-sky-500 to-blue-600"
                    : "from-blue-700 via-sky-500 to-sky-400"
            } bg-clip-text text-transparent`}
        >
        o
          {/* Galstuk (tie) */}
          <span className="absolute left-1/2 top-1/2 -translate-x-1/2 translate-y-1/4 w-[3px] h-[10px] bg-sky-500 rounded-sm"></span>
      </span>
        <span
            className={`bg-gradient-to-r ${
                dark
                    ? "from-sky-400 via-sky-500 to-blue-600"
                    : "from-blue-700 via-sky-500 to-sky-400"
            } bg-clip-text text-transparent`}
        >
        bex
      </span>
        <span
            className={`ml-1 text-xs ${
                dark ? "text-sky-400" : "text-blue-700"
            } opacity-80`}
        >
        ®
      </span>
      </motion.div>
  );
};
