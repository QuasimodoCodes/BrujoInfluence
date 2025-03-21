import React from "react";
import { motion } from "framer-motion";

// Custom styles for text shadows with vibrant colors inspired by Mexican art
const textShadowStyle = {
  textShadow:
    "0 0 10px rgba(0, 0, 0, 0.8), 0 0 15px rgba(236, 42, 75, 0.5), 0 0 3px rgba(0, 0, 0, 1)",
};

const Hero: React.FC = () => {
  return (
    <section id="home" className="relative min-h-screen overflow-hidden">
      {/* Full-width background image with overlay pattern */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-background.jpg"
          alt="Creative Digital Background"
          className="w-full h-full object-cover md:object-cover object-[60%_center]"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src =
              "https://images.unsplash.com/photo-1557672172-298e090bd0f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
          }}
        />
        {/* Colorful gradient overlay inspired by Mexican art */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A5F7A]/85 via-[#1A5F7A]/70 to-[#FFC300]/40"></div>

        {/* Norwegian-inspired geometric shapes overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-[#EC2A4B] rounded-full blur-xl"></div>
          <div className="absolute bottom-1/3 right-1/3 w-96 h-96 bg-[#FFC300] rounded-full blur-xl"></div>
          <div className="absolute top-1/2 right-1/4 w-48 h-48 bg-[#66D1FF] rounded-full blur-xl"></div>
        </div>
      </div>

      {/* Content overlaid with vibrant styling */}
      <div className="container relative z-10 flex h-screen">
        <div className="w-full md:w-1/2 px-6 py-12 md:py-16 md:px-12 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-4 text-[#FFC300] font-medium text-xl"
            >
              ¡HOLA! VELKOMMEN!
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight drop-shadow-[0_0_12px_rgba(0,0,0,0.7)]">
              <span className="text-white relative inline-block">
                BRUJO
                <motion.span
                  initial={{ width: 0 }}
                  animate={{ width: "100%" }}
                  transition={{ delay: 0.8, duration: 0.8 }}
                  className="absolute -bottom-1 left-0 h-1.5 bg-[#EC2A4B] rounded-full"
                ></motion.span>
              </span>
              <br className="hidden md:block" />
              <span className="text-[#66D1FF]">INFLUENCE</span>
            </h1>

            <div className="mt-6 mb-12">
              <h2 className="text-xl md:text-2xl lg:text-3xl text-white font-bold tracking-wide leading-relaxed">
                <div className="mb-1">
                  <span className="font-semibold" style={textShadowStyle}>
                    Digital Magic for Modern Influencers
                  </span>
                </div>
              </h2>

              <p className="text-white/80 mt-6 max-w-md text-lg">
                Creating vibrant, engaging digital experiences that blend Nordic
                functionality with Mexican creativity for influencers who want
                to stand out.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="mt-10 flex space-x-4"
            >
              <a
                href="#services"
                className="inline-block bg-[#EC2A4B] hover:bg-[#EC2A4B]/90 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Our Services
              </a>

              <a
                href="#contact"
                className="inline-block bg-transparent border-2 border-white text-white hover:bg-white/10 font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                Get in Touch
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
