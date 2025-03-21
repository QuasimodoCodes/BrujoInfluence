import React, { useState } from "react";
import { motion } from "framer-motion";
import { sendFormDataToEmail } from "../../services/emailService";

const CardQuestionnaire: React.FC = () => {
  // Track current question and all answers
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedService, setSelectedService] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    service: "",
    projectDetails: "",
    name: "",
    email: "",
    phone: "",
    timeline: "",
    budget: "",
  });

  // Handle service selection
  const handleSelect = (option: string) => {
    setSelectedService(option);
    setFormData((prev) => ({ ...prev, service: option }));
  };

  // Move to next question
  const nextStep = () => {
    setCurrentStep((prev) => prev + 1);
  };

  // Go back to previous step
  const prevStep = () => {
    setCurrentStep((prev) => prev - 1);
  };

  // Handle form input changes
  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      console.log("Sending form data:", formData);
      const success = await sendFormDataToEmail(formData);

      if (success) {
        console.log("Email sent successfully");
        setIsSuccess(true);

        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setCurrentStep(0);
          setSelectedService("");
          setFormData({
            service: "",
            projectDetails: "",
            name: "",
            email: "",
            phone: "",
            timeline: "",
            budget: "",
          });
        }, 3000);
      } else {
        setSubmitError("Could not send the message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("An unexpected error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const serviceOptions = [
    { id: "custom-website", label: "Custom Influencer Website", icon: "🌐" },
    { id: "ecommerce", label: "E-commerce Integration", icon: "🛒" },
    { id: "content-platform", label: "Content Platform", icon: "📱" },
    { id: "brand-identity", label: "Brand Identity & Design", icon: "✨" },
  ];

  // If we're showing success message
  if (isSuccess) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-xl bg-gradient-to-br from-[#1A5F7A]/20 to-[#1A5F7A]/10 backdrop-blur-md p-8 border border-[#1A5F7A]/30 shadow-lg"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-[#1A5F7A]/20 rounded-full mx-auto flex items-center justify-center mb-6">
            <svg
              className="w-10 h-10 text-[#1A5F7A]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M5 13l4 4L19 7"
              />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">
            Thanks for your inquiry!
          </h3>
          <p className="text-gray-600">
            We look forward to helping you bring your vision to life. You'll
            hear from us within 1-2 business days to discuss how we can create
            digital experiences that amplify your influence.
          </p>
        </div>
      </motion.div>
    );
  }

  // Step 1: Service selection
  if (currentStep === 0) {
    return (
      <div className="w-full">
        <h3 className="text-xl font-bold text-gray-800 mb-5">
          What service are you interested in?
        </h3>
        <div className="space-y-3">
          {/* Service selection buttons */}
          {serviceOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => handleSelect(option.label)}
              className={`w-full p-5 text-left rounded-xl transition-all duration-300 flex items-center ${
                selectedService === option.label
                  ? "bg-gradient-to-r from-[#1A5F7A]/20 to-[#1A5F7A]/10 border border-[#1A5F7A]/30 text-gray-800 shadow-md transform translate-y-[-2px]"
                  : "bg-gray-50 border border-gray-100 text-gray-700 hover:bg-gray-100 hover:shadow-sm"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="text-2xl mr-4">{option.icon}</span>
              <span className="font-medium">{option.label}</span>
              {selectedService === option.label && (
                <motion.span
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto w-6 h-6 rounded-full bg-[#1A5F7A] text-white flex items-center justify-center"
                >
                  ✓
                </motion.span>
              )}
            </motion.button>
          ))}

          {/* Next button */}
          <div className="mt-8">
            <motion.button
              onClick={nextStep}
              disabled={!selectedService}
              className={`w-full p-4 rounded-xl text-white font-medium transition-all duration-300 ${
                selectedService
                  ? "bg-[#EC2A4B] hover:bg-[#EC2A4B]/90 shadow-md hover:shadow-lg"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              whileHover={selectedService ? { y: -2 } : {}}
              whileTap={selectedService ? { y: 0 } : {}}
            >
              Next Step
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // Step 2: Project details
  if (currentStep === 1) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex items-center mb-5">
          <button
            onClick={prevStep}
            className="mr-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
          >
            ←
          </button>
          <h3 className="text-xl font-bold text-gray-800">
            Tell us about your project
          </h3>
        </div>

        <div className="mt-3">
          <textarea
            name="projectDetails"
            value={formData.projectDetails}
            onChange={handleChange}
            placeholder="Describe your vision, goals, and any specific features you're looking for..."
            className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A5F7A]/50 focus:border-[#1A5F7A]/50 h-32 resize-none transition duration-200"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Timeline
              </label>
              <select
                name="timeline"
                value={formData.timeline}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A5F7A]/50 focus:border-[#1A5F7A]/50 transition duration-200"
              >
                <option value="">Select timeline...</option>
                <option value="ASAP">As soon as possible</option>
                <option value="1-2 months">Within 1-2 months</option>
                <option value="3-6 months">In 3-6 months</option>
                <option value="Exploring options">
                  Just exploring options
                </option>
              </select>
            </div>
            <div>
              <label className="block text-gray-700 font-medium mb-2">
                Budget
              </label>
              <select
                name="budget"
                value={formData.budget}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A5F7A]/50 focus:border-[#1A5F7A]/50 transition duration-200"
              >
                <option value="">Select budget range...</option>
                <option value="Under $5k">Under $5,000</option>
                <option value="$5k-$10k">$5,000 - $10,000</option>
                <option value="$10k-$20k">$10,000 - $20,000</option>
                <option value="$20k+">$20,000+</option>
                <option value="Not sure">Not sure yet</option>
              </select>
            </div>
          </div>

          {/* Next button */}
          <div className="mt-8">
            <motion.button
              onClick={nextStep}
              disabled={!formData.projectDetails}
              className={`w-full p-4 rounded-xl text-white font-medium transition-all duration-300 ${
                formData.projectDetails
                  ? "bg-[#EC2A4B] hover:bg-[#EC2A4B]/90 shadow-md hover:shadow-lg"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              whileHover={formData.projectDetails ? { y: -2 } : {}}
              whileTap={formData.projectDetails ? { y: 0 } : {}}
            >
              Next Step
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  // Step 3: Contact information
  if (currentStep === 2) {
    return (
      <motion.div
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: -20 }}
        transition={{ duration: 0.3 }}
        className="w-full"
      >
        <div className="flex items-center mb-5">
          <button
            onClick={prevStep}
            className="mr-3 w-8 h-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-600"
          >
            ←
          </button>
          <h3 className="text-xl font-bold text-gray-800">
            Your contact information
          </h3>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="space-y-4">
            <div>
              <label
                htmlFor="name"
                className="block text-gray-700 font-medium mb-2"
              >
                Name
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Your name"
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A5F7A]/50 focus:border-[#1A5F7A]/50 transition duration-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="email"
                className="block text-gray-700 font-medium mb-2"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Your email address"
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A5F7A]/50 focus:border-[#1A5F7A]/50 transition duration-200"
                required
              />
            </div>
            <div>
              <label
                htmlFor="phone"
                className="block text-gray-700 font-medium mb-2"
              >
                Phone (optional)
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Your phone number"
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-[#1A5F7A]/50 focus:border-[#1A5F7A]/50 transition duration-200"
              />
            </div>
          </div>

          {submitError && (
            <div className="mt-4 p-3 bg-red-50 text-red-700 rounded-lg">
              {submitError}
            </div>
          )}

          <div className="mt-8">
            <button
              type="submit"
              disabled={isSubmitting || !formData.name || !formData.email}
              className={`w-full p-4 rounded-xl text-white font-medium transition-all duration-300 ${
                !isSubmitting && formData.name && formData.email
                  ? "bg-[#1A5F7A] hover:bg-[#1A5F7A]/90 shadow-md hover:shadow-lg"
                  : "bg-gray-300 cursor-not-allowed"
              }`}
            >
              {isSubmitting ? "Sending..." : "Submit"}
            </button>
          </div>
        </form>
      </motion.div>
    );
  }

  return null;
};

export default CardQuestionnaire;
