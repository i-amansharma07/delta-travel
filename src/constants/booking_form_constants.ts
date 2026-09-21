export const bookingFormConstants = {
  formConfig: {
    flight: {
      title: 'Flight Booking',
      description: 'Find and book flights at the best prices',
      icon: '✈️',
    },
    hotel: {
      title: 'Hotel Booking',
      description: 'Discover premium accommodations worldwide',
      icon: '🏨',
    },
    cruise: {
      title: 'Cruise Packages',
      description: 'Book luxury cruise vacations',
      icon: '🚢',
    },
    cancellation: {
      title: 'Cancellation Support',
      description: 'Get help with flight and hotel cancellations',
      icon: '💬',
    },
  },
  errorMessages: {
    heading: 'Please fix the following errors:',
  },
  successMessage: {
    heading: '✓ Booking submitted successfully!',
    description: 'Check your email for confirmation. Our team will contact you within 2 hours.',
  },
  tripDetails: {
    legend: 'Trip Details',
    tripType: {
      label: 'Trip Type',
      options: [
        { value: '', label: '-- Select Trip Type --' },
        { value: 'One Way', label: 'One Way' },
        { value: 'Round Trip', label: 'Round Trip' },
        { value: 'Multi-City', label: 'Multi-City' },
      ],
    },
    passengers: {
      label: 'Passengers',
      options: [
        { value: '', label: '-- Select Passengers --' },
        { value: '1', label: '1 Passenger' },
        { value: '2', label: '2 Passengers' },
        { value: '3', label: '3 Passengers' },
        { value: '4', label: '4 Passengers' },
        { value: '5', label: '5+ Passengers' },
      ],
    },
  },
  routeInformation: {
    legend: 'Route Information',
    from: {
      label: 'From',
      placeholder: 'e.g. New York, USA',
    },
    to: {
      label: 'To',
      placeholder: 'e.g. Los Angeles, USA',
    },
    departureDate: {
      label: 'Departure Date',
    },
    returnDate: {
      label: 'Return Date (if applicable)',
    },
  },
  contactInformation: {
    legend: 'Your Contact Information',
    name: {
      label: 'Full Name',
      placeholder: 'Your full name',
    },
    email: {
      label: 'Email',
      placeholder: 'your-email@example.com',
    },
    whatsapp: {
      label: 'WhatsApp',
      placeholder: '+1 (555) 000-0000',
    },
  },
  submitButton: {
    text: 'Get Your Quote',
    processingText: 'Processing...',
  },
  trustBadge: '✓ Secure booking • ✓ No payment required • ✓ Instant confirmation',
  benefits: {
    title: 'Why Book With Us?',
    items: [
      {
        icon: '✓',
        title: 'Best Prices Guaranteed',
        description: 'Price match on all bookings',
      },
      {
        icon: '✓',
        title: '24/7 Support Available',
        description: 'Expert assistance anytime',
      },
      {
        icon: '✓',
        title: 'Flexible Cancellation',
        description: 'Free changes up to 24hrs',
      },
      {
        icon: '✓',
        title: 'Secure Booking',
        description: 'SSL encrypted transactions',
      },
    ],
  },
  questionSection: {
    text: 'Questions? Call us anytime',
    phone: '+1 800 258 1388',
    href: 'tel:+18555465052',
  },
  validationErrors: {
    nameRequired: 'Name is required',
    emailRequired: 'Email is required',
    whatsappRequired: 'WhatsApp number is required',
    fromRequired: 'Departure location is required',
    toRequired: 'Destination is required',
    departureDateRequired: 'Departure date is required',
    passengersRequired: 'Number of passengers is required',
    invalidEmail: 'Please enter a valid email address',
    invalidPhone: 'Please enter a valid phone number',
  },
  errorOnSubmit:
    'An error occurred. Please try again or call us at +1 800 258 1388',
};
