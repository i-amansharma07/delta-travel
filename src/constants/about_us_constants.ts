import { CANCELLATION_PHONE_NUMBER } from "./cancellation_constants";

export const aboutUsConstants = {
  hero: {
    title: 'About Delta Air Travel',
    subtitle: 'Your Trusted Travel Partner for Over 15 Years',
  },
  whoWeAre: {
    heading: 'Who We Are',
    paragraphs: [
      'Delta Air Travel is a leading travel booking service with over 15 years of experience in the industry. We specialize in providing affordable and reliable travel solutions for flights, hotels, cruises, and comprehensive cancellation support.',
      'Our mission is to make travel booking simple, transparent, and accessible to everyone. We believe that travel should be stress-free, which is why we\'ve built our entire platform around customer satisfaction and support.',
    ],
  },
  mission: {
    heading: 'Our Mission',
    description:
      'To provide world-class travel booking services with competitive prices, transparent policies, and exceptional customer support available 24/7.',
  },
  whyChooseUs: {
    heading: 'Why Choose Us?',
    cards: [
      {
        emoji: '✓',
        title: '15+ Years Experience',
        description: 'Trusted by thousands of customers worldwide with proven expertise in travel bookings.',
      },
      {
        emoji: '✓',
        title: 'Best Prices Guaranteed',
        description: 'We offer competitive rates and exclusive discounts up to 25% off on all travel services.',
      },
      {
        emoji: '✓',
        title: '24/7 Customer Support',
        description: 'Our dedicated support team is available round the clock to assist with your travel needs.',
      },
      {
        emoji: '✓',
        title: 'Quick Refunds',
        description: 'Fast and hassle-free refund processing for cancelled bookings.',
      },
      {
        emoji: '✓',
        title: 'Easy Booking',
        description: 'Simple and intuitive booking process that takes just minutes to complete.',
      },
      {
        emoji: '✓',
        title: 'Cancellation Support',
        description: 'Comprehensive support for any cancellations or changes to your bookings.',
      },
    ],
  },
  ourServices: {
    heading: 'Our Services',
    services: [
      {
        title: 'Flight Booking',
        description: 'Book domestic and international flights with up to 20% discount.',
      },
      {
        title: 'Hotel Reservations',
        description: 'Reserve hotels worldwide with up to 15% savings on accommodation.',
      },
      {
        title: 'Cruise Packages',
        description: 'Explore luxury cruise holidays with up to 25% off package deals.',
      },
      {
        title: 'Cancellation Support',
        description: 'Get expert assistance with flight and hotel cancellations 24/7.',
      },
    ],
  },
  faq: {
    heading: 'Frequently Asked Questions',
    questions: [
      {
        question: 'What are your business hours?',
        answer:
          'We operate 24/7 to assist you with all your travel needs. Our support team is always available!',
      },
      {
        question: 'How quickly can I get a response?',
        answer:
          'Phone and WhatsApp: Immediate response. Email: Within 24 hours. For urgent matters, please call us directly.',
      },
      {
        question: 'Do you handle cancellations?',
        answer:
          `Yes! We specialize in helping customers with flight and hotel cancellations. Call us for assistance at ${CANCELLATION_PHONE_NUMBER}`,
      },
      {
        question: 'What payment methods do you accept?',
        answer:
          'We accept all major credit cards, debit cards, and various online payment methods. Details available during booking.',
      },
    ],
  },
};
