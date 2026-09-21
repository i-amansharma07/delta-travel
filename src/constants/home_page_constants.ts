export const homePageConstants = {
  hero: {
    badge: '✈️ Trusted by thousands of travelers',
    title: 'Book Your Perfect Journey',
    description:
      'Find the best flights, hotels, and cruise packages at unbeatable prices. Our 24/7 support team is here to help you every step of the way.',
    trustSignals: [
      {
        value: '15+',
        label: 'Years Trusted',
      },
      {
        value: '50K+',
        label: 'Happy Travelers',
      },
      {
        value: '24/7',
        label: 'Support Team',
      },
    ],
    buttons: {
      getQuote: 'Get Your Quote',
      learnMore: 'Learn More',
    },
  },
  whyChooseUs: {
    title: 'Why Travelers Choose Us',
    subtitle: 'Delta Air Travel has been the trusted partner for thousands of travelers since 2009.',
    cards: [
      {
        emoji: '🏆',
        title: '15+ Years Trusted',
        description: 'Serving travelers worldwide with integrity and excellence since 2009.',
      },
      {
        emoji: '🔒',
        title: '100% Secure',
        description: 'SSL encrypted transactions and IATA-protected bookings for your peace of mind.',
      },
      {
        emoji: '⭐',
        title: '50K+ Happy Travelers',
        description: 'Join thousands of satisfied customers who have booked with us.',
      },
    ],
  },
  services: {
    title: 'Our Complete Travel Solutions',
    subtitle: 'Everything you need for your perfect journey',
    cards: [
      {
        emoji: '✈️',
        title: 'Flight Booking',
        description:
          'Access millions of flights worldwide with guaranteed lowest prices and flexible booking options.',
        features: [
          '✓ International & domestic flights',
          '✓ Best price guarantee',
          '✓ Free cancellations up to 24hrs',
        ],
        buttonText: 'Book Flights',
        buttonHref: '/flight-booking',
      },
      {
        emoji: '🏨',
        title: 'Hotel Booking',
        description: 'Find premium accommodations worldwide, from luxury resorts to budget-friendly stays.',
        features: [
          '✓ 50K+ verified properties',
          '✓ Exclusive deals & discounts',
          '✓ Free cancellations on most bookings',
        ],
        buttonText: 'Book Hotels',
        buttonHref: '/hotel-booking',
      },
      {
        emoji: '🚢',
        title: 'Cruise Packages',
        description: 'Luxury cruise vacations to the world\'s most exotic destinations at unbeatable prices.',
        features: [
          '✓ Caribbean, Mediterranean & more',
          '✓ All-inclusive packages available',
          '✓ Up to 25% savings on group bookings',
        ],
        buttonText: 'Book Cruises',
        buttonHref: '/cruise-booking',
      },
      {
        emoji: '💬',
        title: 'Support Services',
        description:
          'Professional assistance with cancellations, changes, and travel emergencies 24/7.',
        features: [
          '✓ 24/7 customer support',
          '✓ Expert cancellation assistance',
          '✓ Instant rebooking options',
        ],
        buttonText: 'Get Support',
        buttonHref: '/customer-support',
      },
    ],
  },
  bookingProcess: {
    title: 'Booking Made Simple',
    subtitle: 'Get your best travel deal in just 4 easy steps',
    steps: [
      {
        number: '1',
        title: 'Fill Your Details',
        description: 'Enter your travel dates, locations, and passenger count',
      },
      {
        number: '2',
        title: 'Get Best Quote',
        description: 'We search and compare prices from top providers',
      },
      {
        number: '3',
        title: 'Confirm Booking',
        description: 'Review details and complete your secure booking',
      },
      {
        number: '4',
        title: 'Travel & Enjoy',
        description: 'Receive confirmation and travel with peace of mind',
      },
    ],
  },
  cta: {
    title: 'Ready to Book Your Perfect Journey?',
    subtitle: 'Join thousands of travelers who trust Delta Air Travel for their booking needs.',
    buttons: {
      getQuote: 'Get Your Quote Now',
      getQuoteHref: '#flight-form',
      callUs: 'Call Us: +1 (855) 546-5052',
      callUsHref: 'tel:+18555465052',
    },
  },
};
