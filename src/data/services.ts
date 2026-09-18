export interface Service {
  id: string;
  title: string;
  discount: string;
  description: string;
  icon?: string;
  phoneNumber: string;
}

export const services: Service[] = [
  {
    id: 'flight',
    title: 'Flight Booking',
    discount: '20%',
    description: 'Get Up to 20% Off on Flight Booking',
    phoneNumber: '+18555465052',
  },
  {
    id: 'hotel',
    title: 'Hotel Booking',
    discount: '15%',
    description: 'Get Up to 15% Off on Hotel Booking',
    phoneNumber: '+18555465052',
  },
  {
    id: 'cruise',
    title: 'Cruise Packages',
    discount: '25%',
    description: 'Get Up to 25% Off on Cruise Packages',
    phoneNumber: '+18555465052',
  },
  {
    id: 'cancellation',
    title: 'Cancellation Support',
    discount: 'Support',
    description: 'Flight & Hotel Cancellation Support',
    phoneNumber: '+18555465052',
  },
];
