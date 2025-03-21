import React from "react";
import { motion } from "framer-motion";

const Services: React.FC = () => {
  // Service items with icons, descriptions, and features
  const services = [
    {
      id: 1,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm-5 14H4v-4h11v4zm0-5H4V9h11v4zm5 5h-4V9h4v9z" />
        </svg>
      ),
      title: "Custom Influencer Websites",
      description:
        "Personalized websites that perfectly capture your brand's unique personality and vision.",
      features: [
        "Mobile-optimized responsive design",
        "SEO-friendly architecture",
        "Distinctive visual identity",
        "Fast-loading performance",
      ],
      color: "#EC2A4B",
    },
    {
      id: 2,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5c-1.66 0-3 1.34-3 3s1.34 3 3 3zm-8 0c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5C6.34 5 5 6.34 5 8s1.34 3 3 3zm0 2c-2.33 0-7 1.17-7 3.5V19h14v-2.5c0-2.33-4.67-3.5-7-3.5z" />
        </svg>
      ),
      title: "Social Media Integration",
      description:
        "Seamlessly connect all your social platforms to grow your audience and boost engagement.",
      features: [
        "Content aggregation from all platforms",
        "Automated cross-platform posting",
        "Engagement analytics dashboard",
        "Customizable social feed displays",
      ],
      color: "#FFC300",
    },
    {
      id: 3,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
        </svg>
      ),
      title: "Monetization Solutions",
      description:
        "Maximize your revenue potential with integrated sponsorship, product, and subscription features.",
      features: [
        "Sponsor showcase sections",
        "Integrated e-commerce functionality",
        "Membership/subscription management",
        "Affiliate tracking systems",
      ],
      color: "#1A5F7A",
    },
    {
      id: 4,
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
          <path d="M9 11.75c-.69 0-1.25.56-1.25 1.25s.56 1.25 1.25 1.25 1.25-.56 1.25-1.25-.56-1.25-1.25-1.25zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8 0-.29.02-.58.05-.86 2.36-1.05 4.23-2.98 5.21-5.37C11.07 8.33 14.05 10 17.42 10c.78 0 1.53-.09 2.25-.26.21.71.33 1.47.33 2.26 0 4.41-3.59 8-8 8z" />
        </svg>
      ),
      title: "Brand Identity Development",
      description:
        "Create a cohesive visual language that makes your personal brand instantly recognizable.",
      features: [
        "Logo and identity design",
        "Color palette development",
        "Typography selection",
        "Brand guidelines creation",
      ],
      color: "#66D1FF",
    },
  ];

  return (
    <section
      id="services"
      className="py-24 bg-gray-50 relative overflow-hidden"
    >
      {/* Mexican-inspired decorative elements */}
      <div className="absolute top-0 left-0 w-full h-8 bg-gradient-to-r from-[#EC2A4B] via-[#FFC300] to-[#1A5F7A]"></div>

      {/* Norwegian-inspired geometric patterns */}
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-[#1A5F7A] opacity-5 -mb-32 -mr-32 rounded-full"></div>
      <div className="absolute top-1/3 left-0 w-96 h-96 bg-[#FFC300] opacity-5 -ml-48 rounded-full"></div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="text-[#EC2A4B] font-bold text-lg uppercase tracking-wider">
            What We Offer
          </span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">
            Influencer Services
          </h2>
          <div className="h-1 w-24 bg-gradient-to-r from-[#EC2A4B] to-[#FFC300] mx-auto mb-6 rounded-full"></div>
          <p className="max-w-2xl mx-auto text-gray-600">
            Tailored digital solutions that blend Mexican creativity with
            Norwegian functionality to help influencers stand out in a crowded
            social landscape.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl shadow-xl overflow-hidden group"
            >
              <div
                className="p-8"
                style={{ borderTop: `4px solid ${service.color}` }}
              >
                <div
                  className="w-16 h-16 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300"
                  style={{
                    backgroundColor: `${service.color}20`,
                    color: service.color,
                  }}
                >
                  {service.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-600 mb-6">{service.description}</p>

                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <svg
                        className="w-5 h-5 mr-2 mt-0.5"
                        style={{ color: service.color }}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.6 }}
          className="mt-16 text-center"
        >
          <a
            href="#contact"
            className="inline-block bg-[#1A5F7A] hover:bg-[#1A5F7A]/90 text-white font-semibold py-4 px-8 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
          >
            Get a Custom Quote
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
