import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { sendFormDataToEmail } from "../../services/emailService";

const CardQuestionnaire: React.FC = () => {
  // Track current question and all answers
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedGoal, setSelectedGoal] = useState("");
  const [birthdate, setBirthdate] = useState("");
  const [answers, setAnswers] = useState({
    helpWith: "",
    birthdate: "",
    moreDetails: "",
    annetDetails: "",
    name: "",
    email: "",
    phone: "",
  });

  // Add loading and error states
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);

  // Initialize EmailJS when component mounts
  useEffect(() => {
    // No need to initialize here, it's already done in emailService.ts
  }, []);

  // Handle goal selection
  const handleSelect = (option: string) => {
    setSelectedGoal(option);
    setAnswers((prev) => ({ ...prev, helpWith: option }));
  };

  // Handle birthdate input
  const handleBirthdateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setBirthdate(value);
    setAnswers((prev) => ({ ...prev, birthdate: value }));
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
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setAnswers((prev) => ({ ...prev, [name]: value }));
  };

  // Handle form submission
  const handleSubmit = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();

    setIsSubmitting(true);
    setSubmitError(null);

    try {
      console.log("Sending form data:", answers);
      const success = await sendFormDataToEmail(answers);

      if (success) {
        console.log("Email sent successfully");
        setIsSuccess(true);
        
        // Reset form after 3 seconds
        setTimeout(() => {
          setIsSuccess(false);
          setCurrentStep(0);
          setSelectedGoal("");
          setBirthdate("");
          setAnswers({
            helpWith: "",
            birthdate: "",
            moreDetails: "",
            annetDetails: "",
            name: "",
            email: "",
            phone: "",
          });
        }, 3000);
      } else {
        setSubmitError("Kunne ikke sende meldingen. Vennligst prøv igjen senere.");
      }
    } catch (error) {
      console.error("Error sending email:", error);
      setSubmitError("En uventet feil oppstod. Vennligst prøv igjen.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const goalOptions = [
    { id: "bli-sterkere", label: "Bli sterkere og bygge muskler", icon: "💪" },
    { id: "vektendring", label: "Vektendring", icon: "⚖️" },
    { id: "livsstilsendring", label: "Livsstilsendring", icon: "🌱" },
    { id: "annet", label: "Annet", icon: "✨" },
  ];

  // If we're showing success message
  if (isSuccess) {
    return (
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full rounded-xl bg-gradient-to-br from-primary/20 to-primary/10 backdrop-blur-md p-8 border border-primary/30 shadow-lg"
      >
        <div className="text-center">
          <div className="w-20 h-20 bg-primary/20 rounded-full mx-auto flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h3 className="text-2xl font-bold text-gray-800 mb-3">Takk for din henvendelse!</h3>
          <p className="text-gray-600">
            Jeg ser frem til å hjelpe deg med å nå dine mål. Du vil høre fra meg innen 1-2 virkedager for å diskutere hvordan vi kan skape resultater sammen.
          </p>
        </div>
      </motion.div>
    );
  }

  // If we're showing the first step with goal selection
  if (currentStep === 0) {
    return (
      <div className="w-full">
        <h3 className="text-xl font-bold text-gray-800 mb-5">Hva ønsker du å oppnå?</h3>
        <div className="space-y-3">
          {/* Goal selection buttons */}
          {goalOptions.map((option) => (
            <motion.button
              key={option.id}
              onClick={() => handleSelect(option.label)}
              className={`w-full p-5 text-left rounded-xl transition-all duration-300 flex items-center ${
                selectedGoal === option.label 
                  ? "bg-gradient-to-r from-primary/20 to-primary/10 border border-primary/30 text-gray-800 shadow-md transform translate-y-[-2px]" 
                  : "bg-gray-50 border border-gray-100 text-gray-700 hover:bg-gray-100 hover:shadow-sm"
              }`}
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              <span className="text-2xl mr-4">{option.icon}</span>
              <span className="font-medium">{option.label}</span>
              {selectedGoal === option.label && (
                <motion.span 
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  className="ml-auto w-6 h-6 rounded-full bg-primary text-white flex items-center justify-center"
                >
                  ✓
                </motion.span>
              )}
            </motion.button>
          ))}
          
          {/* Special field for "Annet" option */}
          {selectedGoal === "Annet" && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              transition={{ duration: 0.3 }}
              className="mt-4"
            >
              <textarea
                name="annetDetails"
                value={answers.annetDetails}
                onChange={handleChange}
                className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 h-24 resize-none transition duration-200"
                placeholder="Fortell oss om dine spesifikke mål..."
              />
            </motion.div>
          )}
          
          {/* Next button */}
          <div className="mt-8">
            <motion.button
              onClick={nextStep}
              disabled={!selectedGoal}
              className={`w-full p-4 rounded-xl text-white font-medium transition-all duration-300 ${
                selectedGoal 
                  ? "bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg" 
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              whileHover={selectedGoal ? { y: -2 } : {}}
              whileTap={selectedGoal ? { y: 0 } : {}}
            >
              Neste steg
            </motion.button>
          </div>
        </div>
      </div>
    );
  }

  // If we're showing the age selection step
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
          <h3 className="text-xl font-bold text-gray-800">Når er du født?</h3>
        </div>
        
        <div className="mt-3">
          <input
            type="date"
            name="birthdate"
            value={birthdate}
            onChange={handleBirthdateChange}
            className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
          />
          
          {/* Next button */}
          <div className="mt-8">
            <motion.button
              onClick={nextStep}
              disabled={!birthdate}
              className={`w-full p-4 rounded-xl text-white font-medium transition-all duration-300 ${
                birthdate 
                  ? "bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg" 
                  : "bg-gray-300 cursor-not-allowed"
              }`}
              whileHover={birthdate ? { y: -2 } : {}}
              whileTap={birthdate ? { y: 0 } : {}}
            >
              Neste steg
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  // If we're showing the additional details step
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
          <h3 className="text-xl font-bold text-gray-800">Fortell meg litt mer</h3>
        </div>
        
        <div className="mt-3">
          <p className="text-gray-600 mb-4">
            Utdyp med et par setninger hva du ønsker å oppnå gjennom coachingen.
          </p>
          <textarea
            name="moreDetails"
            value={answers.moreDetails}
            onChange={handleChange}
            className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 h-32 resize-none transition duration-200"
            placeholder="F.eks. øke styrke, forbedre kondisjon, bygge gode treningsvaner, forbedre livskvalitet, etc."
          />
          
          {/* Navigation buttons */}
          <div className="flex gap-4 mt-6">
            <motion.button
              onClick={nextStep}
              className="w-full p-4 bg-primary rounded-xl text-white font-medium transition-all duration-300 shadow-md hover:shadow-lg"
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
            >
              Neste steg
            </motion.button>
          </div>
        </div>
      </motion.div>
    );
  }

  // If we're showing the contact info step
  if (currentStep === 3) {
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
          <h3 className="text-xl font-bold text-gray-800">Dine kontaktopplysninger</h3>
        </div>
        
        <div className="space-y-4 mt-3">
          <div>
            <label htmlFor="name" className="block text-gray-600 mb-1 font-medium">
              Navn
            </label>
            <input
              type="text"
              name="name"
              id="name"
              value={answers.name}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
              placeholder="Ditt fulle navn"
              required
            />
          </div>
          
          <div>
            <label htmlFor="email" className="block text-gray-600 mb-1 font-medium">
              E-post
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={answers.email}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
              placeholder="din@email.no"
              required
            />
          </div>
          
          <div>
            <label htmlFor="phone" className="block text-gray-600 mb-1 font-medium">
              Telefon
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={answers.phone}
              onChange={handleChange}
              className="w-full p-4 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary/50 focus:border-primary/50 transition duration-200"
              placeholder="+47 XXX XX XXX"
              required
            />
          </div>
          
          {/* Submit button */}
          <div className="pt-4">
            <motion.button
              onClick={handleSubmit}
              disabled={isSubmitting || !answers.name || !answers.email || !answers.phone}
              className={`w-full p-4 rounded-xl text-white font-medium transition-all duration-300 ${
                isSubmitting || !answers.name || !answers.email || !answers.phone
                  ? "bg-gray-300 cursor-not-allowed"
                  : "bg-primary hover:bg-primary/90 shadow-md hover:shadow-lg"
              }`}
              whileHover={!isSubmitting && answers.name && answers.email && answers.phone ? { y: -2 } : {}}
              whileTap={!isSubmitting && answers.name && answers.email && answers.phone ? { y: 0 } : {}}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Sender...
                </span>
              ) : (
                "Send inn"
              )}
            </motion.button>
            
            {submitError && (
              <p className="mt-3 text-red-500 text-sm">
                {submitError}
              </p>
            )}
            
            <p className="mt-4 text-xs text-gray-500 text-center">
              Ved å sende inn dette skjemaet godtar du at jeg tar kontakt med deg angående treningstjenester. Jeg respekterer ditt privatliv og dine data vil aldri deles med tredjepart.
            </p>
          </div>
        </div>
      </motion.div>
    );
  }

  // Fallback (should never happen, but just in case)
  return null;
};

export default CardQuestionnaire;
