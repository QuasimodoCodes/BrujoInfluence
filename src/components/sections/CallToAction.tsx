import React from "react";
import { motion } from "framer-motion";

const CallToAction: React.FC = () => {
  return (
    <section className="relative py-24 bg-gray-100 overflow-hidden">
      {/* Full-width background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/cta-background.jpg"
          alt="Person working on digital content"
          className="w-full h-full object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
          }}
        />
        {/* Overlay for better text visibility */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A5F7A]/90 via-[#1A5F7A]/60 to-[#1A5F7A]/30"></div>
      </div>

      {/* Overlaid content */}
      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 text-white drop-shadow-lg">
            Ready to elevate your digital presence?
          </h2>

          <a
            href="#contact"
            className="inline-flex items-center justify-center bg-[#EC2A4B] hover:bg-[#EC2A4B]/90 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get Started Now
            <svg
              className="w-5 h-5 ml-2"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              ></path>
            </svg>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default CallToAction;
