// import { Instagram, Linkedin } from 'lucide-react';

// export default function Footer() {
//   return (
//     <footer className="bg-white text-gray-800 py-12 px-6 shadow-inner">
//       <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
//         {/* Logo & Tagline */}
//         <div>
//           <h1 className="text-2xl font-bold text-green-700 tracking-tight mb-2">EcoFuture</h1>
//           <p className="text-sm text-gray-600">
//             Empowering sustainability through smart innovation.
//           </p>
//         </div>

//         {/* Quick Links */}
//         <div>
//           <h2 className="text-lg font-semibold text-green-700 mb-4">Quick Links</h2>
//           <ul className="space-y-2 text-sm">
//             {['Home', 'About', 'Products', 'Contact'].map((item, index) => (
//               <li key={index}>
//                 <a 
//                   href={`/${item.toLowerCase()}`}
//                   className="relative w-fit inline-block text-gray-700 transition duration-200 hover:text-green-600
//                   after:absolute after:left-0 after:-bottom-1 after:w-0 after:h-[2px] after:bg-green-600
//                   hover:after:w-full after:transition-all after:duration-300"
//                 >
//                   {item}
//                 </a>
//               </li>
//             ))}
//           </ul>
//         </div>

//         {/* Contact Info */}
//         <div>
//           <h2 className="text-lg font-semibold text-green-700 mb-4">Contact Us</h2>
//           <ul className="text-sm space-y-3 text-gray-600">
//             <li className="hover:text-green-600 transition duration-200 hover:pl-1 hover:scale-[1.01]">
//               Email: <a href="mailto:info@ecofuture.com" className="hover:underline">info@ecofuture.com</a>
//             </li>
//             <li className="hover:text-green-600 transition duration-200 hover:pl-1 hover:scale-[1.01]">
//               Phone: <a href="tel:+911234567890" className="hover:underline">+91 12345 67890</a>
//             </li>
//             <li className="hover:text-green-600 transition duration-200 hover:pl-1 hover:scale-[1.01]">
//               Address: Jaipur, Rajasthan, India
//             </li>
//           </ul>
//         </div>

//         {/* Socials */}
//         <div>
//           <h2 className="text-lg font-semibold text-green-700 mb-4">Follow Us</h2>
//           <div className="flex space-x-4 mt-2">
//             <a
//               href="https://instagram.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 hover:text-green-600 transition-transform transform hover:scale-110 duration-300"
//             >
//               <Instagram size={24} />
//             </a>
//             <a
//               href="https://linkedin.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-gray-500 hover:text-green-600 transition-transform transform hover:scale-110 duration-300"
//             >
//               <Linkedin size={24} />
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom Bar */}
//       <div className="border-t border-gray-200 mt-10 pt-6 text-center text-sm text-gray-500">
//         &copy; {new Date().getFullYear()} EcoFuture. All rights reserved.
//       </div>
//     </footer>
//   );
// }


import { FaInstagram, FaLinkedinIn } from "react-icons/fa";


export default function Footer() {
  return (
    <footer className="bg-white text-slate-800 py-6 px-6 shadow-inner">
      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
        
        {/* Logo & Tagline */}
        <div>
          <h1 className="text-2xl font-bold text-green-700 tracking-tight mb-2">Aigirika SustainEdge</h1>
          <p className="text-sm text-slate-600">
            Empowering sustainability through smart innovation.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h2 className="text-lg font-semibold text-green-700 mb-4">Quick Links</h2>
          <ul className="space-y-2 text-sm">
            {['Home', 'About', 'Products', 'Contact'].map((item, index) => (
              <li key={index}>
                <a 
                  href={`#${item.toLowerCase()}`}
                  className="relative inline-block text-slate-700 hover:text-green-700 transition duration-300
                  after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:bg-gradient-to-r after:from-green-500 after:to-green-700 
                  after:w-0 hover:after:w-full after:transition-all after:duration-300 after:rounded"
                >
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h2 className="text-lg font-semibold text-green-700 mb-4">Contact Us</h2>
          <ul className="text-sm space-y-3 text-slate-600">
            <li className="group transition duration-300 hover:text-green-700 hover:pl-1">
              <span className="group-hover:underline group-hover:font-medium">
                Email: <a href="mailto:info@ecofuture.com" className="group-hover:underline">AigirikaSustainEdge@gmail.com</a>
              </span>
            </li>
            <li className="group transition duration-300 hover:text-green-700 hover:pl-1">
              <span className="group-hover:underline group-hover:font-medium">
                Phone: <a href="tel:+911234567890" className="group-hover:underline">+91 9810190374/ +91 7455824624</a>
              </span>
            </li>
            <li className="group transition duration-300 hover:text-green-700 hover:pl-1">
              <span className="group-hover:underline group-hover:font-medium">
                Address: Pilani, Rajasthan, India
              </span>
            </li>
          </ul>
        </div>

        {/* Socials */}
        <div>
          <h2 className="text-lg font-semibold text-green-700 mb-4">Follow Us</h2>
          <div className="flex space-x-5 mt-2">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600  transition-all duration-300 transform hover:scale-110"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-green-600  transition-all duration-300 transform hover:scale-110"
            >
              <FaLinkedinIn size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-200 mt-4 pt-4 text-center text-sm text-slate-500">
        &copy; {new Date().getFullYear()} Aigirika SustainEdge. All rights reserved.
      </div>
    </footer>
  );
}
