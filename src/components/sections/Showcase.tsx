import React, { useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  title: string;
  category: string;
  image: string;
  link: string;
  description: string;
}

const projectData: Project[] = [
  {
    id: 1,
    title: "FashionFluence",
    category: "Fashion",
    image:
      "https://images.unsplash.com/photo-1508427953056-b00b8d78ebf5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    description:
      "Custom e-commerce site with lookbook and affiliate integration for a fashion influencer with 1M+ followers.",
  },
  {
    id: 2,
    title: "TravelWithMe",
    category: "Travel",
    image:
      "https://images.unsplash.com/photo-1503220317375-aaad61436b1b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    description:
      "Interactive travel blog with custom map integrations and monetized destination guides.",
  },
  {
    id: 3,
    title: "CulinaryCreator",
    category: "Food",
    image:
      "https://images.unsplash.com/photo-1604382354936-07c5d9983bd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    link: "#",
    description:
      "Recipe platform with membership area, cooking tutorials, and integrated affiliate product recommendations.",
  },
  {
    id: 4,
    title: "FitnessFusion",
    category: "Fitness",
    image:
      "https://images.unsplash.com/photo-1518310952931-b1de897abd5e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    link: "#",
    description:
      "Fitness platform with subscription model, workout tracking app, and community features.",
  },
  {
    id: 5,
    title: "BeautyBrand",
    category: "Beauty",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1480&q=80",
    link: "#",
    description:
      "Custom beauty brand website with product launches, tutorials, and e-commerce functionality.",
  },
  {
    id: 6,
    title: "CreativeCorner",
    category: "Art",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1471&q=80",
    link: "#",
    description:
      "Digital portfolio with NFT integration and online course platform for a digital artist.",
  },
];

const Showcase: React.FC = () => {
  const [filter, setFilter] = useState<string>("all");

  // Create unique categories array without using spread on Set
  const uniqueCategories = Array.from(
    new Set(projectData.map((project) => project.category))
  );
  const categories = ["all", ...uniqueCategories];

  const filteredProjects =
    filter === "all"
      ? projectData
      : projectData.filter((project) => project.category === filter);

  return (
    <section id="showcase" className="py-24 bg-dark relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden opacity-10">
        <div className="absolute top-10 left-10 w-40 h-40 bg-primary rounded-full filter blur-3xl"></div>
        <div className="absolute bottom-10 right-10 w-60 h-60 bg-secondary rounded-full filter blur-3xl"></div>
      </div>

      <div className="container relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-5 tracking-tight text-white">
              Our <span className="text-primary">Showcase</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
            <p className="text-gray-300 max-w-3xl mx-auto text-lg">
              Explore our portfolio of custom digital solutions we've created
              for influencers across various niches. Each project is tailored to
              the unique needs and brand of the creator.
            </p>
          </motion.div>
        </div>

        {/* Category filter tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category, index) => (
            <motion.button
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setFilter(category)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 capitalize
                ${
                  filter === category
                    ? "bg-primary text-white shadow-glow"
                    : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: project.id * 0.1 }}
              whileHover={{ y: -10 }}
              className="bg-gray-900 rounded-xl overflow-hidden shadow-xl group"
            >
              <div className="relative overflow-hidden h-64">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-dark to-transparent opacity-70"></div>
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl font-bold text-white mb-1">
                    {project.title}
                  </h3>
                  <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/20 text-primary rounded-full">
                    {project.category}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <p className="text-gray-300 mb-4">{project.description}</p>
                <a
                  href={project.link}
                  className="inline-flex items-center text-primary hover:text-primary-dark font-medium transition-colors"
                >
                  View Project
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M14 5l7 7m0 0l-7 7m7-7H3"
                    />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <a
              href="#contact"
              className="inline-block px-8 py-4 bg-primary hover:bg-primary-dark text-white font-semibold rounded-xl transition-all duration-300 shadow-glow hover:shadow-lg"
            >
              Ready to build your digital presence?
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Showcase;
