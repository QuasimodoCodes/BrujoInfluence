import React from "react";
import CardQuestionnaire from "./CardQuestionnaire";
import { motion } from "framer-motion";

function ContactSection() {
  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden"
    >
      {/* Norwegian geometric elements */}
      <div className="absolute top-0 left-0 w-full h-96 overflow-hidden">
        <div className="absolute -top-64 left-1/4 w-96 h-96 bg-[#1A5F7A]/5 rounded-full"></div>
      </div>

      {/* Mexican-inspired elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 overflow-hidden">
        <div className="absolute -bottom-32 -right-32 w-64 h-64 bg-[#FFC300]/10 rotate-45"></div>
        <div className="absolute -bottom-16 -right-16 w-48 h-48 bg-[#EC2A4B]/10 rotate-45"></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <span className="inline-block text-[#1A5F7A] font-bold uppercase tracking-wider text-sm">
            Let's collaborate
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-2 mb-6">
            Start Your Digital Journey
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#1A5F7A] to-[#EC2A4B] mx-auto mb-8 rounded-full"></div>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Ready to transform your online presence with a stunning,
            high-performing website that captures your unique influencer brand?
            Tell us about your project, and we'll help bring your vision to
            life.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          <div className="bg-white p-8 rounded-2xl shadow-xl relative before:absolute before:top-0 before:left-0 before:w-full before:h-1 before:bg-gradient-to-r before:from-[#1A5F7A] before:to-[#EC2A4B]">
            <CardQuestionnaire />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-bold mb-4">Or Contact Us Directly</h3>
          <div className="flex flex-col md:flex-row items-center justify-center gap-8">
            <a
              href="mailto:hello@brujoinfluence.com"
              className="flex items-center group"
            >
              <span className="w-10 h-10 rounded-full bg-[#1A5F7A]/10 flex items-center justify-center text-[#1A5F7A] mr-3 group-hover:bg-[#1A5F7A] group-hover:text-white transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </span>
              <span className="font-medium">hello@brujoinfluence.com</span>
            </a>
            <a href="tel:+4712345678" className="flex items-center group">
              <span className="w-10 h-10 rounded-full bg-[#EC2A4B]/10 flex items-center justify-center text-[#EC2A4B] mr-3 group-hover:bg-[#EC2A4B] group-hover:text-white transition-all duration-300">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </span>
              <span className="font-medium">+47 123 45 678</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export default ContactSection;
