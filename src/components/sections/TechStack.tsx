import React from "react";
import { motion } from "framer-motion";

const TechStack: React.FC = () => {
  const technologies = [
    {
      name: "React",
      description: "Frontend UI library for dynamic interfaces",
    },
    {
      name: "Next.js",
      description: "React framework for production-grade applications",
    },
    {
      name: "TypeScript",
      description: "Type-safe JavaScript for reliable code",
    },
    {
      name: "Tailwind CSS",
      description: "Utility-first CSS for rapid styling",
    },
    {
      name: "Node.js",
      description: "JavaScript runtime for backend development",
    },
    {
      name: "GraphQL",
      description: "API query language for efficient data fetching",
    },
    {
      name: "AWS",
      description: "Cloud infrastructure for scalable applications",
    },
    {
      name: "MongoDB",
      description: "NoSQL database for flexible data storage",
    },
  ];

  return (
    <section
      id="tech-stack"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#1A5F7A] opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#EC2A4B] opacity-5 rounded-full translate-x-1/3 translate-y-1/3"></div>

      {/* Mexican-inspired pattern */}
      <div
        className="absolute inset-0 opacity-3"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="container mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Tech Stack Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              <span className="text-[#1A5F7A]">Modern Tech Stack</span> for
              Influencers
            </h2>
            <p className="text-base text-[#EC2A4B] font-medium mb-4">
              Cutting-edge technologies that power your digital presence
            </p>
            <p className="text-lg text-gray-700 mb-6">
              We leverage the latest technologies to build fast, responsive, and
              scalable digital platforms that help you connect with your
              audience and monetize your influence.
            </p>

            <ul className="space-y-4 mb-8">
              {technologies.map((tech, index) => (
                <li key={index} className="flex items-start">
                  <div className="bg-[#1A5F7A] rounded-full p-1 mr-3 mt-1">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 13l4 4L19 7"
                      ></path>
                    </svg>
                  </div>
                  <div>
                    <span className="text-gray-800 font-medium">
                      {tech.name}
                    </span>
                    <span className="text-gray-600 ml-2">
                      - {tech.description}
                    </span>
                  </div>
                </li>
              ))}
            </ul>

            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="inline-flex items-center justify-center bg-[#1A5F7A] hover:bg-[#1A5F7A]/90 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                  ></path>
                </svg>
                Discuss Your Project
              </a>
              <a
                href="#features"
                className="inline-flex items-center justify-center bg-white border border-[#1A5F7A] text-[#1A5F7A] hover:bg-gray-50 font-semibold py-3 px-6 rounded-lg shadow-sm transition-all duration-300"
              >
                <svg
                  className="w-5 h-5 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                Explore Features
              </a>
            </div>
          </motion.div>

          {/* Tech Stack Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
            className="lg:w-1/2"
          >
            <div className="relative">
              {/* Subtle glow effect behind the image */}
              <div className="absolute -inset-4 bg-[#EC2A4B]/10 rounded-3xl blur-xl"></div>

              <img
                src="/images/tech-stack.png"
                alt="Modern Technology Stack"
                className="relative rounded-2xl shadow-2xl w-full max-w-lg mx-auto"
                onError={(e) => {
                  const target = e.target as HTMLImageElement;
                  target.src =
                    "https://images.unsplash.com/photo-1555066931-4365d14bab8c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80";
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
