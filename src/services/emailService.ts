// For now we'll use a placeholder instead of the actual emailjs package
// import emailjs from "emailjs-com";

// EmailJS credentials
// Commented out to avoid unused variable warning - will be used when implementing actual email functionality
// const EMAILJS_USER_ID = "YOUR_EMAILJS_PUBLIC_KEY"; // Your Public Key
const EMAILJS_SERVICE_ID = "YOUR_EMAILJS_SERVICE_ID"; // Your Service ID
const EMAILJS_TEMPLATE_ID = "YOUR_EMAILJS_TEMPLATE_ID"; // Replace with your actual template ID from dashboard

// Store recipient email in one place for easy updates later
export const RECIPIENT_EMAIL = "your-email@example.com";

// Placeholder initialization until emailjs is properly set up
// emailjs.init(EMAILJS_USER_ID);

// Interface for the form data that matches CardQuestionnaire component data structure
interface FormData {
  service: string;
  projectDetails: string;
  name: string;
  email: string;
  phone: string;
  timeline: string;
  budget: string;
}

/**
 * Test function to verify EmailJS is working correctly
 * Call this from the browser console: import('../../services/emailService').then(mod => mod.testEmailService())
 */
export const testEmailService = async (): Promise<boolean> => {
  try {
    // Simple test parameters
    const testParams = {
      to_email: RECIPIENT_EMAIL,
      from_name: "Test User",
      from_email: "test@example.com",
      phone: "123-456-7890",
      service_type: "Test Service",
      message: "This is a test message",
      reply_to: "test@example.com",
    };

    console.log("Testing EmailJS with params:", testParams);
    console.log("Using Service ID:", EMAILJS_SERVICE_ID);
    console.log("Using Template ID:", EMAILJS_TEMPLATE_ID);

    // For now, just log the test params and return success
    console.log("Test email would be sent with these parameters:", testParams);
    return true;

    // Actual implementation once emailjs is set up:
    // const response = await emailjs.send(
    //   EMAILJS_SERVICE_ID,
    //   EMAILJS_TEMPLATE_ID,
    //   testParams
    // );
    //
    // console.log(
    //   "Test email sent successfully!",
    //   response.status,
    //   response.text
    // );
    // return true;
  } catch (error) {
    console.error("Failed to send test email:", error);
    return false;
  }
};

/**
 * Sends form data to the specified email address using EmailJS
 * @param formData The data collected from the form
 * @returns Promise that resolves when the email is sent
 */
export const sendFormDataToEmail = async (
  formData: FormData
): Promise<boolean> => {
  try {
    // Create a formatted message string instead of relying on template variables
    const formattedMessage = `
Name: ${formData.name || "Not provided"}
Email: ${formData.email || "Not provided"}
Phone: ${formData.phone || "Not provided"}
Service: ${formData.service || "Not specified"}
Timeline: ${formData.timeline || "Not specified"}
Budget: ${formData.budget || "Not specified"}
Project Details: ${formData.projectDetails || "No details provided"}
    `.trim();

    // Simplified template parameters
    const templateParams = {
      to_email: RECIPIENT_EMAIL,
      from_name: formData.name || "Website Visitor",
      from_email: formData.email || "no-reply@example.com",
      phone: formData.phone || "Not provided",
      service_type: formData.service || "Not specified",
      message: formattedMessage,
      reply_to: formData.email || "",
    };

    console.log("Attempting to send email with params:", templateParams);

    // For now, just log the template params and return success
    console.log("Email would be sent with these parameters:", templateParams);
    return true;

    // Actual implementation once emailjs is set up:
    // const response = await emailjs.send(
    //   EMAILJS_SERVICE_ID,
    //   EMAILJS_TEMPLATE_ID,
    //   templateParams
    // );
    //
    // console.log("Email sent successfully!", response.status, response.text);
    // return true;
  } catch (error) {
    console.error("Failed to send email:", error);
    return false;
  }
};
