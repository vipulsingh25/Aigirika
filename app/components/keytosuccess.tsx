import { motion } from "framer-motion";
import { Leaf, ShieldCheck, Wallet } from "lucide-react";

const successPoints = [
  {
    title: "100% Plant-Based Materials",
    description: "Made entirely from renewable and biodegradable sources.",
    icon: <Leaf className="w-8 h-8 text-green-600" />,
  },
  {
    title: "Safe for Food and Health",
    description: "Tested and certified to be safe for all food contact.",
    icon: <ShieldCheck className="w-8 h-8 text-green-700" />,
  },
  {
    title: "Affordable and Responsible",
    description: "Eco-conscious products at a price everyone can afford.",
    icon: <Wallet className="w-8 h-8 text-green-800" />,
  },
];

export default function KeyToSuccess() {
  return (
    <section className="w-full px-6 py-16">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-4xl md:text-5xl font-bold text-green-800"
        >
          Our Key to Success
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-gray-600 mt-4 text-lg max-w-2xl mx-auto"
        >
          Discover what sets our eco-products apart from the rest.
        </motion.p>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {successPoints.map((point, i) => (
            <motion.div
              key={point.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.2 }}
              className="relative bg-white/70 backdrop-blur-lg border border-green-200 rounded-3xl p-6 shadow-xl hover:shadow-green-200 dark:hover:shadow-green-500 transition-all group"
            >
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-green-100  mb-4 mx-auto border border-green-300 group-hover:scale-110 transition-transform">
                {point.icon}
              </div>
              <h3 className="text-xl font-semibold text-green-900  mb-2">
                {point.title}
              </h3>
              <p className="text-gray-600  text-sm">
                {point.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
