import React from "react";
import { motion } from "framer-motion";

const Showcase: React.FC = () => {
  const techStack = [
    {
      category: "Frontend",
      tools: [
        { name: "React", icon: "/images/tech/react.svg", fallback: "⚛️" },
        { name: "Next.js", icon: "/images/tech/nextjs.svg", fallback: "▲" },
        { name: "Vue", icon: "/images/tech/vue.svg", fallback: "🟢" },
        {
          name: "Tailwind CSS",
          icon: "/images/tech/tailwind.svg",
          fallback: "🌊",
        },
      ],
    },
    {
      category: "Backend",
      tools: [
        { name: "Node.js", icon: "/images/tech/nodejs.svg", fallback: "🟩" },
        { name: "Express", icon: "/images/tech/express.svg", fallback: "🚂" },
        { name: "GraphQL", icon: "/images/tech/graphql.svg", fallback: "◼️" },
        { name: "MongoDB", icon: "/images/tech/mongodb.svg", fallback: "🍃" },
      ],
    },
    {
      category: "CMS",
      tools: [
        { name: "Sanity", icon: "/images/tech/sanity.svg", fallback: "🅢" },
        {
          name: "WordPress",
          icon: "/images/tech/wordpress.svg",
          fallback: "🔠",
        },
        { name: "Strapi", icon: "/images/tech/strapi.svg", fallback: "🟨" },
        {
          name: "Contentful",
          icon: "/images/tech/contentful.svg",
          fallback: "©️",
        },
      ],
    },
    {
      category: "E-commerce",
      tools: [
        { name: "Shopify", icon: "/images/tech/shopify.svg", fallback: "🛒" },
        {
          name: "WooCommerce",
          icon: "/images/tech/woocommerce.svg",
          fallback: "🔄",
        },
        { name: "Stripe", icon: "/images/tech/stripe.svg", fallback: "💳" },
        { name: "PayPal", icon: "/images/tech/paypal.svg", fallback: "💰" },
      ],
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <section
      id="tech-stack"
      className="py-20 bg-gray-50 relative overflow-hidden"
    >
      {/* Norwegian-inspired geometric shapes */}
      <div className="absolute top-0 left-0 w-40 h-40 bg-yellow-400 rounded-full opacity-10 -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-60 h-60 bg-red-500 rounded-full opacity-10 translate-x-1/2 translate-y-1/2"></div>

      {/* Mexican-inspired pattern */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: "60px 60px",
        }}
      ></div>

      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4 text-gray-800">
            Our Tech Stack
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We leverage powerful technologies to build high-performance,
            scalable digital platforms for influencers around the world.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {techStack.map((stack, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300"
            >
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-4 text-[#1A5F7A]">
                  {stack.category}
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {stack.tools.map((tool, toolIndex) => (
                    <div
                      key={toolIndex}
                      className="flex flex-col items-center space-y-2"
                    >
                      <div className="w-12 h-12 flex items-center justify-center bg-gray-100 rounded-full">
                        <img
                          src={tool.icon}
                          alt={tool.name}
                          className="w-6 h-6"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.style.display = "none";
                            target.parentElement!.innerHTML = `<span class="text-xl">${tool.fallback}</span>`;
                          }}
                        />
                      </div>
                      <span className="text-sm text-gray-600">{tool.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Showcase;
