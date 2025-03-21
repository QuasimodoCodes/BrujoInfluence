import React, { useState } from "react";
import { motion } from "framer-motion";

const Portfolio: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  // Portfolio items - would typically come from a CMS or database
  const portfolioItems = [
    {
      id: 1,
      title: "Fashion Influencer Platform",
      category: "fashion",
      imageUrl: "/images/portfolio-fashion.jpg",
      fallbackUrl:
        "https://images.unsplash.com/photo-1483985988355-763728e1935b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Custom website for a top fashion influencer with integrated social feeds and e-commerce functionality.",
    },
    {
      id: 2,
      title: "Travel Blog Experience",
      category: "travel",
      imageUrl: "/images/portfolio-travel.jpg",
      fallbackUrl:
        "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Immersive travel blog with location mapping, dynamic content organization, and monetization features.",
    },
    {
      id: 3,
      title: "Food & Lifestyle Hub",
      category: "food",
      imageUrl: "/images/portfolio-food.jpg",
      fallbackUrl:
        "https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Recipe-focused platform with video integration, subscription area, and sponsor showcases.",
    },
    {
      id: 4,
      title: "Fitness Trainer Portal",
      category: "fitness",
      imageUrl: "/images/portfolio-fitness.jpg",
      fallbackUrl:
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Membership site with workout programs, progress tracking, and community features.",
    },
    {
      id: 5,
      title: "Beauty & Skincare Showcase",
      category: "beauty",
      imageUrl: "/images/portfolio-beauty.jpg",
      fallbackUrl:
        "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1487&q=80",
      description:
        "Product-focused website with review system, affiliate integration, and custom animations.",
    },
    {
      id: 6,
      title: "Gaming Content Creator Site",
      category: "gaming",
      imageUrl: "/images/portfolio-gaming.jpg",
      fallbackUrl:
        "https://images.unsplash.com/photo-1542751371-adc38448a05e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
      description:
        "Streaming-integrated platform with schedule management, donation systems, and merchandise store.",
    },
  ];

  // Filter items based on selected category
  const filteredItems =
    activeCategory === "all"
      ? portfolioItems
      : portfolioItems.filter((item) => item.category === activeCategory);

  // Categories for filter
  const categories = [
    { id: "all", name: "All Projects" },
    { id: "fashion", name: "Fashion" },
    { id: "travel", name: "Travel" },
    { id: "food", name: "Food" },
    { id: "fitness", name: "Fitness" },
    { id: "beauty", name: "Beauty" },
    { id: "gaming", name: "Gaming" },
  ];

  return (
    <section
      id="portfolio"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Mexican-inspired decorative zigzag border */}
      <div className="absolute top-0 left-0 w-full h-4 bg-[#EC2A4B]"></div>
      <div className="absolute top-4 left-0 w-full h-4 bg-[#FFC300]"></div>
      <div className="absolute top-8 left-0 w-full h-4 bg-[#1A5F7A]"></div>

      {/* Norwegian-inspired geometric background elements */}
      <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-[#66D1FF]/10 -mr-20 -mb-20"></div>
      <div className="absolute top-1/3 left-0 w-60 h-60 rounded-full bg-[#FFC300]/10 -ml-20"></div>

      <div className="container mx-auto px-6 relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#FFC300] font-bold text-lg uppercase tracking-wider">
            Our Work
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Featured Influencer Projects
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#FFC300] to-[#EC2A4B] mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Explore our collection of custom websites and digital experiences
            created for influencers across various niches.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="flex flex-wrap justify-center gap-2 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                activeCategory === category.id
                  ? "bg-[#1A5F7A] text-white shadow-md"
                  : "bg-white text-gray-600 hover:bg-gray-100"
              }`}
            >
              {category.name}
            </button>
          ))}
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              className="group"
            >
              <div className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                <div className="relative overflow-hidden aspect-video">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.src = item.fallbackUrl;
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                    <div className="p-4">
                      <span className="text-white text-xs uppercase tracking-wider bg-[#EC2A4B] px-2 py-1 rounded-full">
                        {item.category}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-[#1A5F7A] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <button
                    className="text-[#1A5F7A] font-medium hover:text-[#EC2A4B] transition-colors duration-300 flex items-center bg-transparent border-none p-0 cursor-pointer"
                    aria-label={`View ${item.title} project`}
                  >
                    View Project
                    <svg
                      className="w-4 h-4 ml-1"
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
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <p className="text-gray-600 mb-8">
            Want to see how we can transform your digital presence? Get in touch
            for a custom solution.
          </p>
          <a
            href="#contact"
            className="inline-block bg-[#FFC300] hover:bg-[#FFC300]/90 text-white font-semibold py-3.5 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Start Your Project
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Portfolio;
