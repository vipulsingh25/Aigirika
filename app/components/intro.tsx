// "use client";
// import { useEffect, useState } from "react";
// import { motion, AnimatePresence } from "framer-motion";
// import Image from "next/image";
// import bottleImage from "@/public/bottle.png";

// import { FaInstagram, FaLinkedinIn } from "react-icons/fa";


// const ecoPhrases = ["PURE WATER", "PLASTIC FREE", "SAVE EARTH", "GO GREEN"];


// export default function IntroSection() {
//     const [index, setIndex] = useState(0);

//     type DropletConfig = [string, number[], number, number];

//     const droplets: DropletConfig[] = [
//         ["left-8 bottom-20 w-3 h-3 bg-green-400 opacity-70", [0, -20, 0], 2, 0.2],
//         ["right-10 bottom-24 w-2 h-2 bg-green-500 opacity-60", [0, -15, 0], 2.5, 0.6],
//         ["top-10 left-1/3 w-2 h-2 bg-green-300 opacity-60", [0, -10, 0], 3, 0.4],
//         ["bottom-10 right-1/4 w-4 h-4 bg-green-400 opacity-70", [0, -25, 0], 2, 0.3],
//         ["top-20 right-1/5 w-3 h-3 bg-green-600 opacity-60", [0, -18, 0], 2.8, 0.5],
//         ["top-16 left-10 w-2 h-2 bg-green-400 opacity-50", [0, -12, 0], 3, 0.3],
//         ["top-40 right-14 w-2 h-2 bg-green-300 opacity-60", [0, -15, 0], 2.7, 0.4],
//         ["left-1/6 top-28 w-3 h-3 bg-green-500 opacity-60", [0, -20, 0], 2.9, 0.5],
//         ["right-1/6 bottom-28 w-2 h-2 bg-green-400 opacity-70", [0, -22, 0], 3.1, 0.2],
//         ["left-1/4 top-6 w-2 h-2 bg-green-600 opacity-50", [0, -10, 0], 2.3, 0.3],
//         ["right-1/3 top-12 w-3 h-3 bg-green-300 opacity-60", [0, -15, 0], 2.6, 0.4],
//         ["left-12 bottom-16 w-2 h-2 bg-green-500 opacity-70", [0, -17, 0], 2.4, 0.6],
//         ["right-12 top-24 w-3 h-3 bg-green-400 opacity-60", [0, -20, 0], 3.2, 0.5],
//         ["bottom-6 left-1/5 w-2 h-2 bg-green-600 opacity-60", [0, -13, 0], 2.5, 0.3],
//     ];

//     useEffect(() => {
//         const interval = setInterval(() => {
//             setIndex((prev) => (prev + 1) % ecoPhrases.length);
//         }, 2500);
//         return () => clearInterval(interval);
//     }, []);

//     return (
//         <>
//             <div className="w-[95%] m-auto h-[80vh] bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl flex p-10 overflow-hidden transition-all duration-500 ease-in-out hover:shadow-green-200">

//                 {/* Left Side */}
//                 <div className="w-1/2 flex flex-col justify-center text-left pr-10 space-y-6 animate-fade-in">
//                     <h1 className="text-4xl font-extrabold leading-snug tracking-tight">
//                         <span className="bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text">
//                             Pack It Green,
//                         </span>{" "}
//                         <br />
//                         <span className="text-green-600">Keep It Clean</span>
//                     </h1>

//                     <h2 className="text-2xl font-medium text-green-900 animate-pulse">
//                         Not Plastic. Fantastic
//                     </h2>

//                     <p className="text-lg text-gray-800 leading-relaxed tracking-wide animate-fade-in-delay">
//                         Our plant-based technology replaces plastic the planet hates with bottles the Earth loves.
//                         We create 100% biodegradable packaging that’s as smart as it is sustainable.
//                     </p>

//                     {/* Social Media */}
//                     <div className="flex space-x-4 mt-6 justify-center">
//                         <a
//                             href="https://linkedin.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
//                             aria-label="LinkedIn"
//                         >
//                             <FaLinkedinIn className="w-5 h-5" />
//                         </a>

//                         <a
//                             href="https://instagram.com"
//                             target="_blank"
//                             rel="noopener noreferrer"
//                             className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
//                             aria-label="Instagram"
//                         >
//                             <FaInstagram className="w-5 h-5" />
//                         </a>
//                     </div>
//                 </div>

//                 {/* Right Side - Animated Visuals */}
//                 <div className="w-1/2 flex items-center justify-center relative">


//                     {[
//                         { size: 350, rotate: 2, duration: 3, zIndex: 10, offset: "top-10 left-40" },
//                         { size: 300, rotate: 4, duration: 4, zIndex: 30, offset: "top-20 right-30" },
//                         { size: 250, rotate: 6, duration: 5, zIndex: 10, offset: "bottom-20 left-30" },
//                     ].map((bottle, i) => (
//                         <motion.div
//                             key={i}
//                             initial={{ rotate: -bottle.rotate, opacity: 0.75 }}
//                             animate={{ rotate: bottle.rotate, opacity: 1 }}
//                             transition={{
//                                 duration: bottle.duration,
//                                 ease: "easeInOut",
//                                 repeat: Infinity,
//                                 repeatType: "reverse",
//                             }}
//                             className={`absolute ${bottle.offset} z-${bottle.zIndex}`}
//                         >
//                             <Image
//                                 src={bottleImage}
//                                 alt={`Eco Bottle ${i + 1}`}
//                                 width={bottle.size}
//                                 height={bottle.size + 50}
//                                 className="drop-shadow-xl"
//                             />
//                         </motion.div>
//                     ))}

//                     {/* Animated Phrases */}
//                     <div className="absolute bottom-6 mt-4 text-xl font-bold text-green-700 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md min-w-[180px] h-[48px] flex items-center justify-center overflow-hidden">
//                         <AnimatePresence mode="wait">
//                             <motion.span
//                                 key={ecoPhrases[index]}
//                                 initial={{ opacity: 0, y: 10 }}
//                                 animate={{ opacity: 1, y: 0 }}
//                                 exit={{ opacity: 0, y: -10 }}
//                                 transition={{ duration: 0.6 }}
//                                 className="absolute"
//                             >
//                                 {ecoPhrases[index]}
//                             </motion.span>
//                         </AnimatePresence>
//                     </div>



//                     {droplets.map(([cls, yAnim, dur, dly], i) => (
//                         <motion.div
//                             key={i}
//                             className={`absolute rounded-full ${cls}`}
//                             animate={{ y: yAnim, opacity: [0.6, 1, 0.6] }}
//                             transition={{ duration: dur, delay: dly, repeat: Infinity, ease: "easeInOut" }}
//                         />
//                     ))}



//                 </div>
//             </div>



//             {/* Embedded Tailwind Animations */}
//             <style jsx>{`
//         @keyframes fade-left {
//           0% {
//             opacity: 0;
//             transform: translateX(-30px);
//           }
//           100% {
//             opacity: 1;
//             transform: translateX(0);
//           }
//         }

//         .animate-fade-left {
//           animation: fade-left 1s ease-out forwards;
//         }
//       `}</style>
//         </>
//     );
// }



"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import bottleImage from "@/public/bottle.png";

import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

const ecoPhrases = ["PURE WATER", "PLASTIC FREE", "SAVE EARTH", "GO GREEN"];

export default function IntroSection() {
  const [index, setIndex] = useState(0);

  type DropletConfig = [string, number[], number, number];

  const droplets: DropletConfig[] = 
  [
    ["left-15 bottom-20 w-3 h-3 bg-green-400 opacity-70", [0, -20, 0], 2, 0.2],
    ["right-10 bottom-24 w-2 h-2 bg-green-500 opacity-60", [0, -15, 0], 2.5, 0.6],
    ["top-100 left-1/3 w-2 h-2 bg-green-300 opacity-60", [0, -10, 0], 3, 0.4],
    ["bottom-10 right-1/4 w-4 h-4 bg-green-400 opacity-70", [0, -25, 0], 2, 0.3],
    ["top-20 right-1/5 w-3 h-3 bg-green-600 opacity-60", [0, -18, 0], 2.8, 0.5],
    ["top-16 left-10 w-2 h-2 bg-green-400 opacity-50", [0, -12, 0], 3, 0.3],
    ["top-40 right-14 w-2 h-2 bg-green-300 opacity-60", [0, -15, 0], 2.7, 0.4],
    ["left-1/6 top-28 w-3 h-3 bg-green-500 opacity-60", [0, -20, 0], 2.9, 0.5],
        ["left-1/6 top-68 w-3 h-3 bg-green-500 opacity-60", [0, -20, 0], 2.9, 0.5],
    ["top-56 left-10 w-2 h-2 bg-green-400 opacity-50", [0, -12, 0], 3, 0.3],
    ["right-1/6 top-62 w-3 h-3 bg-green-300 opacity-60", [0, -15, 0], 2.6, 0.4],

    ["right-1/6 bottom-28 w-2 h-2 bg-green-400 opacity-70", [0, -22, 0], 3.1, 0.2],
    ["left-1/4 top-6 w-2 h-2 bg-green-600 opacity-50", [0, -10, 0], 2.3, 0.3],
    ["right-1/3 top-12 w-3 h-3 bg-green-300 opacity-60", [0, -15, 0], 2.6, 0.4],
    ["left-12 bottom-16 w-2 h-2 bg-green-500 opacity-70", [0, -17, 0], 2.4, 0.6],
    ["right-12 top-24 w-3 h-3 bg-green-400 opacity-60", [0, -20, 0], 3.2, 0.5],
    ["bottom-6 left-1/5 w-2 h-2 bg-green-600 opacity-60", [0, -13, 0], 2.5, 0.3],
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ecoPhrases.length);
    }, 2500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-[95%] m-auto min-h-[80vh] bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl flex p-10 overflow-hidden transition-all duration-500 ease-in-out hover:shadow-green-200 ">
      {/* Left Side */}
<div className="w-full md:w-1/2 flex flex-col justify-center text-left pr-0 md:pr-10 space-y-6">
        <motion.h1
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl font-extrabold leading-snug tracking-tight"
        >
          <span className="bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text">
            Pack It Green,
          </span>{" "}
          <br />
          <span className="text-green-600">Keep It Clean</span>
        </motion.h1>

        <motion.h2
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-2xl font-medium text-green-900"
        >
          Not Plastic. Fantastic
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg text-gray-800 leading-relaxed tracking-wide"
        >
          Our plant-based technology replaces plastic the planet hates with
          bottles the Earth loves. We create 100% biodegradable packaging
          that’s as smart as it is sustainable.
        </motion.p>

        {/* Social Media */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="flex space-x-4 mt-6 justify-center"
        >
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn className="w-5 h-5" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
            aria-label="Instagram"
          >
            <FaInstagram className="w-5 h-5" />
          </a>
        </motion.div>
      </div>

      {/* Right Side - Animated Visuals */}
<div className="w-[50%] hidden md:flex items-center justify-center relative">
        {/* Bottles */}
        {[
          { size: 350, rotate: 2, duration: 3, zIndex: 10, offset: "top-10 left-40" },
          { size: 300, rotate: 4, duration: 4, zIndex: 30, offset: "top-20 right-30" },
          { size: 250, rotate: 6, duration: 5, zIndex: 10, offset: "bottom-20 left-30" },
        ].map((bottle, i) => (
          <motion.div
            key={i}
            initial={{ rotate: -bottle.rotate, opacity: 0.75 }}
            animate={{ rotate: bottle.rotate, opacity: 1 }}
            transition={{
              duration: bottle.duration,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
            className={`absolute ${bottle.offset} z-${bottle.zIndex}`}
          >
            <Image
              src={bottleImage}
              alt={`Eco Bottle ${i + 1}`}
              width={bottle.size}
              height={bottle.size + 50}
              className="drop-shadow-xl"
            />
          </motion.div>
        ))}

        {/* Animated Phrases */}
        <div className="absolute bottom-6 mt-4 text-xl font-bold text-green-700 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md min-w-[180px] h-[48px] flex items-center justify-center overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.span
              key={ecoPhrases[index]}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.6 }}
              className="absolute"
            >
              {ecoPhrases[index]}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Droplets */}
        {droplets.map(([cls, yAnim, dur, dly], i) => (
          <motion.div
            key={i}
            className={`absolute rounded-full ${cls}`}
            animate={{ y: yAnim, opacity: [0.6, 1, 0.6] }}
            transition={{ duration: dur, delay: dly, repeat: Infinity, ease: "easeInOut" }}
          />
        ))}
      </div>
    </div>
  );
}
