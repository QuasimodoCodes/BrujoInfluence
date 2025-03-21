import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  return (
    <section
      id="about"
      className="section bg-white py-24 relative overflow-hidden"
    >
      {/* Norwegian-inspired geometric decoration */}
      <div className="absolute top-0 right-0 w-72 h-72 bg-[#1A5F7A]/5 rounded-full -translate-x-20 -translate-y-20"></div>
      {/* Mexican-inspired colorful pattern */}
      <div className="absolute bottom-0 left-0 w-64 h-64">
        <div className="absolute bottom-0 left-0 w-32 h-32 bg-[#FFC300]/30 rotate-45 transform -translate-x-16 translate-y-8"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-[#EC2A4B]/20 rotate-45 transform -translate-x-8 translate-y-16"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight">
              Our <span className="text-[#1A5F7A]">Story</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#1A5F7A] to-[#EC2A4B] mx-auto mb-8"></div>
            <p className="text-gray-600 max-w-3xl mx-auto text-lg">
              Where Norwegian precision meets Mexican creativity
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="absolute -bottom-8 -right-8 w-full h-full bg-[#FFC300]/60 rounded-2xl"></div>
            <img
              src="/images/team-photo.jpg"
              alt="Brujo Influence Team"
              className="relative z-10 w-full h-auto rounded-2xl shadow-2xl object-cover hover:scale-[1.01] transition-transform duration-500"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.src =
                  "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
              }}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="pr-8"
          >
            <h3 className="text-3xl font-bold mb-5 tracking-tight">
              The Brujo Influence
            </h3>
            <h4 className="text-xl text-[#EC2A4B] font-medium mb-6">
              Norwegian-Mexican Web Development Collective
            </h4>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Founded by a Norwegian-Mexican duo who shared a vision of creating
              digital spaces where functionality meets vibrant expression.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              Our unique cross-cultural approach draws from the Norwegian
              tradition of minimalist, user-focused design and the rich,
              expressive visual language of Mexican art. The result? Digital
              experiences that are both highly functional and visually
              captivating.
            </p>

            <p className="text-gray-700 mb-6 leading-relaxed">
              We specialize in creating digital platforms for influencers who
              understand that their online presence is an extension of their
              personal brand. Our team combines technical expertise with
              creative vision to build websites that not only look stunning but
              also drive engagement and conversion.
            </p>

            <p className="text-gray-700 mb-8 leading-relaxed">
              With a deep understanding of the influencer ecosystem, we build
              platforms that seamlessly integrate with your content strategy,
              merchandising needs, and audience engagement goals. Every pixel
              and line of code is crafted to enhance your digital influence.
            </p>

            <div className="grid grid-cols-1 gap-4 mb-10">
              <div className="flex items-center group">
                <span className="w-10 h-10 rounded-full bg-[#1A5F7A]/10 flex items-center justify-center text-[#1A5F7A] mr-3 group-hover:bg-[#1A5F7A] group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M13 6a3 3 0 11-6 0 3 3 0 016 0zM18 8a2 2 0 11-4 0 2 2 0 014 0zM14 15a4 4 0 00-8 0v3h8v-3zM6 8a2 2 0 11-4 0 2 2 0 014 0zM16 18v-3a5.972 5.972 0 00-.75-2.906A3.005 3.005 0 0119 15v3h-3zM4.75 12.094A5.973 5.973 0 004 15v3H1v-3a3 3 0 013.75-2.906z" />
                  </svg>
                </span>
                <span className="font-medium">
                  Team of Experienced Developers & Designers
                </span>
              </div>
              <div className="flex items-center group">
                <span className="w-10 h-10 rounded-full bg-[#1A5F7A]/10 flex items-center justify-center text-[#1A5F7A] mr-3 group-hover:bg-[#1A5F7A] group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path d="M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z" />
                  </svg>
                </span>
                <span className="font-medium">
                  Deep Understanding of Influencer Marketing
                </span>
              </div>
              <div className="flex items-center group">
                <span className="w-10 h-10 rounded-full bg-[#1A5F7A]/10 flex items-center justify-center text-[#1A5F7A] mr-3 group-hover:bg-[#1A5F7A] group-hover:text-white transition-all duration-300">
                  <svg
                    className="w-5 h-5"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
                <span className="font-medium">
                  Unique Cultural Approach to Digital Design
                </span>
              </div>
            </div>

            <a
              href="#contact"
              className="btn btn-primary bg-[#EC2A4B] hover:bg-[#EC2A4B]/90 text-white font-semibold py-3 px-8 rounded-xl hover:shadow-lg hover:translate-y-[-2px] transition-all duration-300"
            >
              Connect With Us
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
