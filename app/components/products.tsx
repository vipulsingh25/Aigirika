// 'use client';

// import { motion } from 'framer-motion';
// import { Leaf, ShoppingBag, Trash2, CupSoda } from 'lucide-react';

// const products = [
//   {
//     title: 'PLA Bottles',
//     description: 'Eco-friendly bottles made from renewable plant-based resources.',
//     icon: <CupSoda size={40} className="text-green-600" />,
//   },
//   {
//     title: 'Garbage Bags',
//     description: 'Compostable bags that decompose naturally and safely.',
//     icon: <Trash2 size={40} className="text-green-600" />,
//   },
//   {
//     title: 'Shopping Bags',
//     description: 'Strong and reusable bags designed for everyday use.',
//     icon: <ShoppingBag size={40} className="text-green-600" />,
//   },
//   {
//     title: 'Wooden Straws & Cutlery',
//     description: 'Sustainable alternatives to plastic utensils for daily use.',
//     icon: <Leaf size={40} className="text-green-600" />,
//   },
// ];

// export default function ProductsSection() {
//   return (
//     <section className="w-[95%] mx-auto mt-10 bg-white/80 backdrop-blur-md rounded-3xl shadow-2xl p-10 transition-all duration-500 ease-in-out">
//       <div className="max-w-4xl mx-auto text-center mb-12">
//         <h2 className="text-4xl font-bold text-green-700">Our Products</h2>
//         <p className="mt-2 text-gray-600">Sustainable choices for a greener planet</p>
//       </div>

//       <div className="space-y-10 relative">
//         {products.map((product, index) => (
//           <motion.div
//             key={index}
//             className={`bg-green-50 p-6 rounded-2xl shadow-lg hover:shadow-green-300 transition duration-300 ease-in-out max-w-xl mx-auto relative z-10 ${
//               index % 2 === 0 ? 'ml-0 sm:ml-10' : 'mr-0 sm:mr-10'
//             }`}
//             initial={{ opacity: 0, y: 50 }}
//             whileInView={{ opacity: 1, y: 0 }}
//             transition={{ duration: 0.5, delay: index * 0.2 }}
//             viewport={{ once: true, amount: 0.4 }}
//           >
//             <div className="flex items-center space-x-4">
//               <div className="flex-shrink-0">{product.icon}</div>
//               <div className="text-left">
//                 <h3 className="text-xl font-semibold text-green-800">{product.title}</h3>
//                 <p className="text-sm text-gray-600 mt-1">{product.description}</p>
//               </div>
//             </div>
//           </motion.div>
//         ))}
//         {/* Decorative vertical line */}
//         <div className="hidden sm:block absolute left-1/2 top-0 bottom-0 w-1 bg-green-200 rounded-full -translate-x-1/2 z-0" />
//       </div>
//     </section>
//   );
// }


'use client';

import { motion } from 'framer-motion';
import { Leaf, ShoppingBag, Trash2, CupSoda } from 'lucide-react';

const products = [
  {
    title: 'PLA Bottles',
    description: 'Eco-friendly bottles crafted from renewable, plant-based materials, perfect for everyday use.',
    icon: <CupSoda size={44} className="text-green-600" />,
  },
  {
    title: 'Garbage Bags',
    description: '100% compostable garbage bags that break down naturally, reducing landfill waste.',
    icon: <Trash2 size={44} className="text-green-600" />,
  },
  {
    title: 'Shopping Bags',
    description: 'Durable, reusable, and biodegradable bags made for conscious consumers.',
    icon: <ShoppingBag size={44} className="text-green-600" />,
  },
  {
    title: 'Wooden Straws & Cutlery',
    description: 'Premium wooden alternatives to plastic utensils, biodegradable and elegant.',
    icon: <Leaf size={44} className="text-green-600" />,
  },
];

export default function ProductsSection() {
  return (
    <section className="w-[95%] mx-auto my-12 px-4 md:px-10 py-14 bg-white/70 backdrop-blur-xl rounded-3xl shadow-[0_15px_50px_rgba(0,0,0,0.1)] border border-green-100">
      <div className="max-w-6xl mx-auto text-center mb-14">
        <h2 className="text-4xl font-extrabold text-green-800 tracking-tight">
          Our Eco-Friendly Products
        </h2>
        <p className="text-gray-600 mt-3 text-base">
          Designed for sustainability. Made for the future.
        </p>
      </div>

      <div className="grid gap-y-14 gap-x-10 md:grid-cols-2">
        {products.map((product, index) => (
          <motion.div
            key={index}
            className="bg-white/90 backdrop-blur-md border border-green-100 rounded-2xl p-8 shadow-lg hover:shadow-green-100 transition-all hover:-translate-y-1 hover:scale-[1.02] duration-300 ease-in-out"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            viewport={{ once: true, amount: 0.5 }}
          >
            <div className="flex items-center gap-4 mb-4">
              <div className="bg-green-100 p-3 rounded-full shadow-inner">
                {product.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-800">{product.title}</h3>
            </div>
            <p className="text-gray-700 text-sm leading-relaxed">{product.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
