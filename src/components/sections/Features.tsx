import React from "react";
import { motion } from "framer-motion";

const Features: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Mexican-inspired pattern background */}
      <div className="absolute inset-0 opacity-[0.03] z-0">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              "url('data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23EC2A4B' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')",
            backgroundSize: "60px 60px",
          }}
        ></div>
      </div>

      {/* Norwegian-inspired color accents */}
      <div className="absolute top-0 right-0 w-32 h-32 bg-[#66D1FF] opacity-20 rounded-full -mt-16 -mr-16"></div>
      <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FFC300] opacity-10 rounded-full -mb-24 -ml-24"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <span className="text-[#1A5F7A] font-bold text-lg uppercase tracking-wider">
              Why Choose Us
            </span>
            <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
              Technical Excellence
            </h2>
            <div className="h-1 w-24 bg-gradient-to-r from-[#1A5F7A] to-[#66D1FF] mx-auto mb-6 rounded-full"></div>
            <p className="max-w-2xl mx-auto text-gray-600">
              Our influencer websites and digital experiences combine stunning
              visuals with powerful technical capabilities for optimal
              performance and engagement.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          {/* Technical diagram/illustration */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-to-br from-[#1A5F7A] to-[#66D1FF] p-1 rounded-2xl shadow-xl">
              <div className="bg-white rounded-xl p-8">
                <div className="aspect-video relative bg-gray-100 rounded-lg overflow-hidden mb-6">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="/images/tech-diagram.png"
                      alt="Technical architecture"
                      className="object-cover w-full h-full"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src =
                          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80";
                      }}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-[#EC2A4B] font-bold text-2xl">99%</div>
                    <div className="text-sm text-gray-600">Performance</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-[#FFC300] font-bold text-2xl">
                      100%
                    </div>
                    <div className="text-sm text-gray-600">Mobile-Ready</div>
                  </div>
                  <div className="bg-gray-50 p-3 rounded-lg">
                    <div className="text-[#1A5F7A] font-bold text-2xl">A+</div>
                    <div className="text-sm text-gray-600">SEO Score</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Features list */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="space-y-8">
              {[
                {
                  title: "Lightning Fast Performance",
                  description:
                    "Optimized code and advanced caching strategies ensure your site loads in milliseconds, not seconds.",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M7 2v11h3v9l7-12h-4l3-8z" />
                    </svg>
                  ),
                  color: "#EC2A4B",
                },
                {
                  title: "Responsive Across All Devices",
                  description:
                    "Your content will look perfect on any screen size, from smartphones to desktop monitors.",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M4 6h18V4H4c-1.1 0-2 .9-2 2v11H0v3h14v-3H4V6zm19 2h-6c-.55 0-1 .45-1 1v10c0 .55.45 1 1 1h6c.55 0 1-.45 1-1V9c0-.55-.45-1-1-1zm-1 9h-4v-7h4v7z" />
                    </svg>
                  ),
                  color: "#FFC300",
                },
                {
                  title: "SEO Optimized Structure",
                  description:
                    "Built from the ground up with search engines in mind to help more fans discover your content.",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M15.5 14h-.79l-.28-.27C15.41 12.59 16 11.11 16 9.5 16 5.91 13.09 3 9.5 3S3 5.91 3 9.5 5.91 16 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14z" />
                    </svg>
                  ),
                  color: "#1A5F7A",
                },
                {
                  title: "Analytics & Performance Tracking",
                  description:
                    "Understand your audience with detailed insights and data visualization tools.",
                  icon: (
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zM9 17H7v-7h2v7zm4 0h-2v-7h2v7zm4 0h-2v-7h2v7z" />
                    </svg>
                  ),
                  color: "#66D1FF",
                },
              ].map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                  className="flex items-start"
                >
                  <div
                    className="w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0"
                    style={{
                      backgroundColor: `${feature.color}15`,
                      color: feature.color,
                    }}
                  >
                    {feature.icon}
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold mb-2"
                      style={{ color: feature.color }}
                    >
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Features;
