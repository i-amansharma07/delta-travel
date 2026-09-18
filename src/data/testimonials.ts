export interface Testimonial {
  name: string;
  text: string;
  image?: string;
  title: string;
  rating: number;
}

export const testimonials: Testimonial[] = [
  {
    name: 'Sarah Mitchell',
    title: 'Business Traveler',
    text: 'Delta Air Travel made my quarterly business trips incredibly seamless. From flight bookings to hotel reservations, everything was coordinated perfectly. Their 24/7 support team helped me reschedule on short notice without any hassle. Truly exceptional service!',
    image: '/images/testimonial-1.jpg',
    rating: 5,
  },
  {
    name: 'Rajesh Kumar',
    title: 'Family Vacation Planner',
    text: 'We booked a family cruise through Delta Air Travel and the entire experience was phenomenal. The prices were unbeatable and the integration with flights and hotels made planning so easy. Our kids still talk about the amazing vacation we had!',
    image: '/images/testimonial-2.jpg',
    rating: 5,
  },
  {
    name: 'Emily Chen',
    title: 'Adventure Seeker',
    text: 'Best booking platform I\'ve used! I managed to find an incredible hotel deal in Bali through their system. The customer support team was knowledgeable and helped me with visa information too. Definitely booking my next trip through them.',
    image: '/images/testimonial-3.jpg',
    rating: 5,
  },
  {
    name: 'James Anderson',
    title: 'Luxury Travel Enthusiast',
    text: 'The premium cruise packages offered by Delta Air Travel are exceptional. I\'ve traveled extensively, and I appreciate their attention to detail and personalized recommendations. Worth every penny for a hassle-free luxury travel experience.',
    image: '/images/testimonial-4.jpg',
    rating: 5,
  },
  {
    name: 'Priya Desai',
    title: 'Budget-Conscious Traveler',
    text: 'As someone who travels on a budget, Delta Air Travel has been a game-changer. Their deals are genuinely amazing, and I love how they show price comparisons. I\'ve saved thousands on flights and hotels. Highly recommend!',
    image: '/images/testimonial-5.jpg',
    rating: 5,
  },
  {
    name: 'Michael Thompson',
    title: 'Corporate Travel Manager',
    text: 'We partnered with Delta Air Travel for our company\'s corporate travel needs. Their bulk booking discounts and seamless invoicing system have streamlined our entire travel management process. Professional and reliable.',
    image: '/images/testimonial-6.jpg',
    rating: 5,
  },
];
