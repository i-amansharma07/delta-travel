import { CANCELLATION_PHONE_NUMBER } from "./cancellation_constants";

export const contactUsConstants = {
  hero: {
    title: "Contact Us",
    subtitle: "We're Here to Help 24/7",
  },
  contactInfo: {
    phone: {
      heading: "Call Us",
      icon: "📞",
      numbers: [CANCELLATION_PHONE_NUMBER],
      availability: "Available 24/7",
    },
    email: {
      heading: "Email Us",
      icon: "✉️",
      address: "info@deltaairtravel.com",
      href: "mailto:info@deltaairtravel.com",
      response: "Response within 24 hours",
    },
    whatsapp: {
      heading: "WhatsApp",
      icon: "💬",
      action: "Message Us",
      href: "https://wa.me/18555465052",
      response: "Instant messaging support",
    },
  },
  contactForm: {
    heading: "Send us a Message",
    fields: {
      name: {
        label: "Name",
        placeholder: "Your Name",
      },
      email: {
        label: "Email",
        placeholder: "Your Email",
      },
      subject: {
        label: "Subject",
        placeholder: "What is this about?",
      },
      message: {
        label: "Message",
        placeholder: "Your message...",
        rows: 5,
      },
    },
    submitButton: "Send Message",
  },
  faq: {
    heading: "Frequently Asked Questions",
    questions: [
      {
        question: "What are your business hours?",
        answer:
          "We operate 24/7 to assist you with all your travel needs. Our support team is always available!",
      },
      {
        question: "How quickly can I get a response?",
        answer:
          "Phone and WhatsApp: Immediate response. Email: Within 24 hours. For urgent matters, please call us directly.",
      },
      {
        question: "Do you handle cancellations?",
        answer: `Yes! We specialize in helping customers with flight and hotel cancellations. Call us for assistance at ${CANCELLATION_PHONE_NUMBER}`,
      },
      {
        question: "What payment methods do you accept?",
        answer:
          "We accept all major credit cards, debit cards, and various online payment methods. Details available during booking.",
      },
    ],
  },
};
