import nodemailer from 'nodemailer';

// Email configuration - using placeholder for now
const transporter = nodemailer.createTransport({
  service: 'gmail', // You'll configure this later
  auth: {
    user: process.env.EMAIL_USER || 'your-email@gmail.com',
    pass: process.env.EMAIL_PASSWORD || 'your-app-password',
  },
});

// Placeholder email address to send confirmations to
const PLACEHOLDER_EMAIL = 'bookings@deltaairtravel.com';

interface BookingFormData {
  serviceType: 'flight' | 'hotel' | 'cruise' | 'cancellation';
  tripType: string;
  from: string;
  to: string;
  departureDate: string;
  returnDate: string;
  passengers: string;
  name: string;
  whatsapp: string;
  email: string;
}

export async function POST({ request }: { request: Request }) {
  try {
    const data: BookingFormData = await request.json();

    // Validate required fields
    const errors: string[] = [];

    if (!data.name?.trim()) errors.push('Name is required');
    if (!data.email?.trim()) errors.push('Email is required');
    if (!data.whatsapp?.trim()) errors.push('WhatsApp number is required');
    if (!data.from?.trim()) errors.push('Departure city is required');
    if (!data.to?.trim()) errors.push('Destination city is required');
    if (!data.departureDate) errors.push('Departure date is required');
    if (!data.passengers) errors.push('Passenger count is required');

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (data.email && !emailRegex.test(data.email)) {
      errors.push('Please enter a valid email address');
    }

    // Phone validation (basic)
    const phoneRegex = /^\+?[\d\s\-\(\)]{10,}$/;
    if (data.whatsapp && !phoneRegex.test(data.whatsapp)) {
      errors.push('Please enter a valid phone number');
    }

    if (errors.length > 0) {
      return new Response(
        JSON.stringify({ success: false, errors }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      );
    }

    // Format the email content
    const emailContent = `
    <h2>New Booking Inquiry - ${data.serviceType.charAt(0).toUpperCase() + data.serviceType.slice(1)} Booking</h2>

    <h3>Customer Information:</h3>
    <ul>
      <li><strong>Name:</strong> ${escapeHtml(data.name)}</li>
      <li><strong>Email:</strong> ${escapeHtml(data.email)}</li>
      <li><strong>WhatsApp:</strong> ${escapeHtml(data.whatsapp)}</li>
    </ul>

    <h3>Booking Details:</h3>
    <ul>
      <li><strong>Service Type:</strong> ${data.serviceType}</li>
      <li><strong>Trip Type:</strong> ${escapeHtml(data.tripType)}</li>
      <li><strong>From:</strong> ${escapeHtml(data.from)}</li>
      <li><strong>To:</strong> ${escapeHtml(data.to)}</li>
      <li><strong>Departure Date:</strong> ${escapeHtml(data.departureDate)}</li>
      <li><strong>Return Date:</strong> ${data.returnDate ? escapeHtml(data.returnDate) : 'N/A'}</li>
      <li><strong>Passengers:</strong> ${escapeHtml(data.passengers)}</li>
    </ul>

    <p><em>This is an automated message from Delta Air Travel booking system.</em></p>
    `;

    // Send email to placeholder address
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER || 'noreply@deltaairtravel.com',
        to: PLACEHOLDER_EMAIL,
        subject: `New ${data.serviceType} Booking - ${data.name}`,
        html: emailContent,
      });
    } catch (emailError) {
      console.warn('Email sending failed:', emailError);
      // Don't fail the request if email fails - just log it
      // In production, you'd want more sophisticated error handling
    }

    // Send confirmation email to user
    try {
      await transporter.sendMail({
        from: process.env.EMAIL_USER || 'noreply@deltaairtravel.com',
        to: data.email,
        subject: 'Booking Confirmation - Delta Air Travel',
        html: `
          <h2>Thank you for your booking inquiry!</h2>
          <p>Hi ${escapeHtml(data.name)},</p>
          <p>We have received your booking inquiry for ${data.serviceType} booking.</p>
          <p>Our team will contact you shortly at ${escapeHtml(data.whatsapp)} or ${escapeHtml(data.email)} with the best available deals.</p>
          <p><strong>Your Booking Details:</strong></p>
          <ul>
            <li>From: ${escapeHtml(data.from)}</li>
            <li>To: ${escapeHtml(data.to)}</li>
            <li>Departure: ${escapeHtml(data.departureDate)}</li>
            <li>Passengers: ${escapeHtml(data.passengers)}</li>
          </ul>
          <p>Thank you for choosing Delta Air Travel!</p>
          <p>Best regards,<br>Delta Air Travel Team</p>
        `,
      });
    } catch (emailError) {
      console.warn('Confirmation email sending failed:', emailError);
    }

    return new Response(
      JSON.stringify({
        success: true,
        message: 'Booking submitted successfully! Check your email for confirmation.',
      }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error('Booking submission error:', error);
    return new Response(
      JSON.stringify({
        success: false,
        errors: ['An error occurred while processing your booking. Please try again.'],
      }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// Utility function to escape HTML
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (m) => map[m]);
}
