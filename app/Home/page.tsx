
// "use client"
// import { motion } from "framer-motion";
// import Image from 'next/image';
// import bottleImage from '@/public/bottle.jpg'; // Place your bottle image here
// import { FaInstagram, FaLinkedinIn } from "react-icons/fa";

// export default function HomePage() {
//   return (
//     <main className="mt-10 flex items-center justify-center min-h-screen">
//       <div className="w-[95%] h-[80vh] bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl flex p-10 overflow-hidden transition-all duration-500 ease-in-out hover:shadow-green-200">

//         {/* Left Side - Quote Section */}
//         <div className="w-1/2 flex flex-col justify-center text-left pr-10 space-y-6 animate-fade-in">
//           <h1 className="text-4xl font-extrabold leading-snug tracking-tight">
//             <span className="bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text">
//               Pack It Green,
//             </span>{" "}
//             <br />
//             <span className="text-green-600">Keep It Clean</span>
//           </h1>

//           <h2 className="text-2xl font-medium text-green-900 animate-pulse">
//             Not Plastic. Fantastic
//           </h2>

//           <p className="text-lg text-gray-800 leading-relaxed tracking-wide animate-fade-in-delay">
//             Our plant-based technology replaces plastic the planet hates with bottles the Earth loves.
//             We create 100% biodegradable packaging that’s as smart as it is sustainable.
//           </p>

//           {/* <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300">
//             Learn More
//           </button> */}

// {/* Social Media Icons */}
// <div className="flex space-x-4 mt-6 justify-center">

//       <a
//         href="https://linkedin.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-green-600 hover:bg-green-700 text-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
//         aria-label="LinkedIn"
//       >
//         <FaLinkedinIn className="w-5 h-5" />
//       </a>

//       <a
//         href="https://instagram.com"
//         target="_blank"
//         rel="noopener noreferrer"
//         className="bg-green-700 hover:bg-green-800 text-white p-2 rounded-full shadow-md transition-all duration-300 hover:scale-105 hover:shadow-lg"
//         aria-label="Instagram"
//       >
//         <FaInstagram className="w-5 h-5" />
//       </a>
//     </div>


//         </div>

//         {/* Right Side - Image Placeholder */}
//         {/* <div className="w-1/2 flex items-center justify-center animate-slide-in-right">
//           <div className="w-[90%] h-[300px] bg-gray-200 rounded-xl flex items-center justify-center shadow-inner hover:scale-105 transition-transform duration-500 ease-in-out">
//             <p className="text-gray-500 text-lg">[ Image Placeholder ]</p>
//           </div>
//         </div> */}


//                 {/* Right Side - Animated Visuals */}
// {/* <div className="w-1/2 flex items-center justify-center relative">
//           <motion.div
//             initial={{ rotate: -1, opacity: 0.5 }}
//             animate={{ rotate: 2, opacity: 1 }}
//             transition={{
//               duration: 2,
//               ease: "easeInOut",
//               repeat: Infinity,
//               repeatType: "reverse",
//             }}
//             className="w-[250px] h-auto"
//           >
//             <Image
//               src={bottleImage} // Replace with your actual image path
//               alt="Eco Bottle"
//               width={250}
//               height={400}
//               className="rounded-xl shadow-xl"
//             />
//           </motion.div>
//         </div> */}

//         {/* Right Side - Animated Visuals */}
// <div className="w-1/2 flex items-center justify-center relative">

//   {/* Bottle Rotation */}
//   <motion.div
//     initial={{ rotate: -2, opacity: 0 }}
//     animate={{ rotate: 2, opacity: 1 }}
//     transition={{
//       duration: 3,
//       ease: "easeInOut",
//       repeat: Infinity,
//       repeatType: "reverse",
//     }}
//     className="z-10"
//   >
//     <Image
//       src={bottleImage}
//       alt="Eco Bottle"
//       width={250}
//       height={400}
//       className="rounded-xl shadow-xl"
//     />
//   </motion.div>

//   {/* PURE WATER Text */}
//   <motion.div
//     initial={{ opacity: 0, y: 20 }}
//     animate={{ opacity: 1, y: 0 }}
//     transition={{ delay: 1, duration: 1 }}
//     className="absolute bottom-6 text-xl font-bold text-green-700 bg-white/80 backdrop-blur-md px-4 py-2 rounded-full shadow-md"
//   >
//     PURE WATER
//   </motion.div>

//   {/* Plastic Free Icon */}
//   <motion.div
//     initial={{ y: 10, opacity: 0 }}
//     animate={{ y: [10, -5, 10], opacity: 1 }}
//     transition={{
//       duration: 3,
//       ease: "easeInOut",
//       repeat: Infinity,
//     }}
//     className="absolute top-4 right-4"
//   >

//   </motion.div>

//   {/* Droplets animation */}
//   <motion.div
//     className="absolute left-8 bottom-20 w-3 h-3 bg-green-400 rounded-full opacity-70"
//     animate={{ y: [0, -20, 0], opacity: [0.7, 1, 0.7] }}
//     transition={{
//       duration: 2,
//       repeat: Infinity,
//       ease: "easeInOut",
//       delay: 0.2,
//     }}
//   />
//   <motion.div
//     className="absolute right-10 bottom-24 w-2 h-2 bg-green-500 rounded-full opacity-60"
//     animate={{ y: [0, -15, 0], opacity: [0.6, 1, 0.6] }}
//     transition={{
//       duration: 2.5,
//       repeat: Infinity,
//       ease: "easeInOut",
//       delay: 0.6,
//     }}
//   />

// </div>

  
//       </div>

//       {/* Tailwind Animations */}
//       <style jsx>{`
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
      
//     </main>
//   );
// }




"use client";
import IntroSection from "../components/intro";
import KeyToSuccess from "../components/keytosuccess";
import ProductsSection from "../components/products";
import ScrollToTopButton from "../components/ScrollToTopButton";

export default function HomePage() {

  return (
    <main className="mt-10 min-h-screen">
      <IntroSection />

      {/* <KeyToSuccess />

      <ProductsSection /> */}

            {/* <section id="home" > <IntroSection /></section> */}
      <section id="about" >      <KeyToSuccess /></section>
      <section id="products" >      <ProductsSection /></section>
      {/* <section id="contact" >...</section> */}
      <ScrollToTopButton />

    </main>
  );
}





// may be imp



// app/home/page.tsx

// app/home/page.tsx

// 'use client';

// import { useEffect } from 'react';

// export default function HomePage() {
//   useEffect(() => {
//     const style = document.createElement('style');
//     style.innerHTML = `
//       @keyframes bgPulse {
//         0%, 100% {
//           background-position: 0% 50%;
//         }
//         50% {
//           background-position: 100% 50%;
//         }
//       }
//       .animated-bg {
//         background-size: 200% 200%;
//         animation: bgPulse 8s ease-in-out infinite;
//       }
//     `;
//     document.head.appendChild(style);
//     return () => {
//       document.head.removeChild(style);
//     };
//   }, []);

//   return (
//     <main className="mt-10 flex items-center justify-center min-h-screen animated-bg bg-gradient-to-r from-[#82d67a] via-white to-[#c6f0be]">
//       <div className="w-[95%] h-[80vh] bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl flex p-10 overflow-hidden transition-all duration-500 ease-in-out hover:shadow-green-200">

//         {/* Left Side - Quote Section */}
//         <div className="w-1/2 flex flex-col justify-center text-left pr-10 space-y-6">
//           <h1 className="text-5xl font-extrabold leading-snug tracking-tight">
//             <span className="bg-gradient-to-r from-green-700 to-green-500 text-transparent bg-clip-text">
//               Pack It Green,
//             </span><br />
//             <span className="text-green-600">Keep It Clean</span>
//           </h1>

//           <h2 className="text-2xl font-medium text-green-700">
//             Not Plastic. Fantastic
//           </h2>

//           <p className="text-lg text-gray-800 leading-relaxed tracking-wide">
//             Our plant-based technology replaces plastic the planet hates with bottles the Earth loves.
//             We create 100% biodegradable packaging that’s as smart as it is sustainable.
//           </p>

//           <button className="mt-4 px-6 py-3 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition duration-300">
//             Learn More
//           </button>
//         </div>

//         {/* Right Side - Image Placeholder */}
//         <div className="w-1/2 flex items-center justify-center">
//           <div className="w-[90%] h-[300px] bg-gray-200 rounded-xl flex items-center justify-center shadow-inner hover:scale-105 transition-transform duration-500 ease-in-out">
//             <p className="text-gray-500 text-lg">[ Image Placeholder ]</p>
//           </div>
//         </div>
//       </div>
//     </main>
//   );
// }
