// "use client"
// import { useState } from "react";
// import Link from "next/link";


// export default function Navbar() {
//     const [isOpen, setIsOpen] = useState(false);

//   return (
//     <>
//      <nav className="bg-white shadow-md fixed top-0 left-0 w-full z-50 animate-slide-down">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex justify-between items-center transition-all duration-300">
//         {/* Logo / Brand */}
//         {/* <div className="text-xl md:text-2xl font-bold text-green-700 tracking-tight transform hover:scale-105 transition-transform duration-300">
//           Aigirika SustainEdge Pvt Ltd
//         </div> */}

//         <div className="leading-tight text-green-700 font-bold transform hover:scale-105 transition-transform duration-300">
//   <div className="text-xl md:text-2xl">Aigirika</div>
//   <div className="text-sm md:text-base tracking-wide">SustainEdge</div>
// </div>


//         {/* Desktop Links */}
//         <div className="hidden md:flex space-x-8 text-gray-700 font-medium">
//           {["home", "about", "products", "contact"].map((section) => (
//             <Link
//               key={section}
//               href={`#${section}`}
//               className="relative group"
//             >
//               <span className="hover:text-green-600 transition-colors duration-200">
//                 {section.charAt(0).toUpperCase() + section.slice(1)}
//               </span>
//               <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-600 transition-all duration-300 group-hover:w-full" />
//             </Link>
//           ))}
//         </div>

//         {/* Mobile Menu Button */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-700 focus:outline-none transition-transform duration-300 hover:scale-110"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden px-4 pb-4 space-y-2 bg-white transition-all duration-300 ease-in-out ${
//           isOpen ? "opacity-100 max-h-[300px]" : "opacity-0 max-h-0 overflow-hidden"
//         }`}
//       >
//         {["home", "about", "products", "contact"].map((section) => (
//           <Link
//             key={section}
//             href={`#${section}`}
//             className="block text-gray-700 hover:text-green-600 transition-colors duration-200"
//           >
//             {section.charAt(0).toUpperCase() + section.slice(1)}
//           </Link>
//         ))}
//       </div>
//     </nav>
//     </>
//   );
// }


// "use client";
// import { useState } from "react";
// import Link from "next/link";

// export default function Navbar() {
//   const [isOpen, setIsOpen] = useState(false);

// const navLinks = [
//   { name: "Home", href: "/" },
//   { name: "About", href: "/about" },
//   { name: "Products", href: "/products" },
//   { name: "Contact", href: "/contact" },
// ];

//   return (
//     <nav className="bg-white shadow-lg fixed top-0 left-0 w-full z-50">
//       <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
//         {/* Brand Logo */}
//         <div className="leading-tight text-green-800 font-semibold text-xl md:text-2xl tracking-wide hover:scale-[1.02] transition-transform duration-300">
//           <span className="block">Aigirika</span>
//           <span className="block text-sm ml-0.5 tracking-normal">
//             SustainEdge Pvt Ltd
//           </span>
//         </div>

//         {/* Desktop Menu */}
//         <div className="hidden md:flex space-x-8 text-gray-700 font-medium text-base">
//           {navLinks.map((link) => (
//             <Link
//               key={link.name}
//               href={link.href}
//               className="group relative transition-colors duration-300 hover:text-green-700"
//             >
//               {link.name}
//               <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full" />
//             </Link>
//           ))}
//         </div>

//         {/* Hamburger Icon */}
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-gray-700 hover:scale-110 transition-transform duration-200"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//             >
//               {isOpen ? (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M6 18L18 6M6 6l12 12"
//                 />
//               ) : (
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth={2}
//                   d="M4 6h16M4 12h16M4 18h16"
//                 />
//               )}
//             </svg>
//           </button>
//         </div>
//       </div>

//       {/* Mobile Menu */}
//       <div
//         className={`md:hidden px-6 pb-4 space-y-2 bg-white transition-all duration-300 ease-in-out ${
//           isOpen ? "opacity-100 max-h-96" : "opacity-0 max-h-0 overflow-hidden"
//         }`}
//       >
//         {navLinks.map((link) => (
//           <Link
//             key={link.name}
//             href={link.href}
//             className="block text-gray-700 font-medium py-1 hover:text-green-700 transition-colors"
//           >
//             {link.name}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// }


"use client";
import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // const navLinks = [
  //   { name: "Home", href: "/" },
  //   { name: "About", href: "/about" },
  //   { name: "Products", href: "/products" },
  //   { name: "Contact", href: "/contact" },
  // ];

  const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "#about" },
  { name: "Products", href: "#products" },
  { name: "Contact", href: "#contact" },
];

  const menuVariants = {
    hidden: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.3, ease: "easeInOut" },
    },
    exit: {
      opacity: 0,
      y: -10,
      transition: { duration: 0.2, ease: "easeInOut" },
    },
  };

  return (
    <nav className="bg-white shadow-lg top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 sm:px-10 py-4 flex justify-between items-center">
        {/* Brand Logo */}
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="leading-tight text-green-800 font-semibold text-xl md:text-2xl tracking-wide hover:scale-[1.02] transition-transform duration-300"
        >
          <span className="block">Aigirika</span>
          <span className="block text-sm ml-0.5 tracking-normal">
            SustainEdge Pvt Ltd
          </span>
        </motion.div>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-8 text-gray-700 font-medium text-base">
          {navLinks.map((link, index) => (
            <motion.div
              key={link.name}
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * index }}
            >
              {/* <Link
                href={link.href}
                className="group relative transition-colors duration-300 hover:text-green-700"
              >
                {link.name}
                <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full" />
              </Link> */}

              <Link
  key={link.name}
  href={link.href}
  scroll={true}
  className="group relative transition-colors duration-300 hover:text-green-700"
>
  {link.name}
  <span className="absolute left-0 -bottom-1 h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full" />
</Link>
            </motion.div>
          ))}
        </div>

        {/* Hamburger Icon */}
        <div className="md:hidden">
          <motion.button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-700 hover:scale-110 transition-transform duration-200"
            whileTap={{ scale: 0.9 }}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </motion.button>
        </div>
      </div>

      {/* Mobile Menu with Animation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="mobile-menu"
            initial="hidden"
            animate="visible"
            exit="exit"
           
            className="md:hidden px-6 pb-4 space-y-2 bg-white"
          >
            {navLinks.map((link) => (
              // <Link
              //   key={link.name}
              //   href={link.href}
              //   className="block text-gray-700 font-medium py-1 hover:text-green-700 transition-colors"
              // >
              //   {link.name}
              // </Link>

              <Link
  key={link.name}
  href={link.href}
  scroll={true}
  onClick={() => setIsOpen(false)}
  className="block text-gray-700 font-medium py-1 hover:text-green-700 transition-colors"
>
  {link.name}
</Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
