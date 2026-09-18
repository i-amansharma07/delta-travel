# Quick Start - Form Validation & Email Testing

## Setup (One-time)

### 1. Configure Gmail (or skip for testing)
For testing without email, just leave `.env` as is. For actual email sending:

```bash
# Copy template
cp .env.example .env

# Edit .env with your Gmail credentials
# EMAIL_USER=your-email@gmail.com
# EMAIL_PASSWORD=your-app-password
```

### 2. Start Dev Server
```bash
npm run dev
```
Opens at `http://localhost:4321`

## Test the Forms

### Test 1: Valid Submission
1. Go to any section (Flight, Hotel, Cruise, Cancellation)
2. Fill all fields:
   - Trip Type: "Round Trip"
   - From: "New York"
   - To: "Los Angeles"
   - Departure Date: Pick any future date
   - Return Date: Pick a later date
   - Passengers: "3"
   - Name: "John Doe"
   - WhatsApp: "+1 (855) 546-5052"
   - Email: "your-email@gmail.com"
3. Click "Get Best Deal"
4. ✅ Should see green success message
5. Check your email inbox (or spam folder)

### Test 2: Missing Name
1. Fill form but leave Name empty
2. Click "Get Best Deal"
3. ✅ Should see error: "Name is required"

### Test 3: Invalid Email
1. Fill form with Email: "notanemail"
2. Click "Get Best Deal"
3. ✅ Should see error: "Please enter a valid email address"

### Test 4: Invalid Phone
1. Fill form with WhatsApp: "123"
2. Click "Get Best Deal"
3. ✅ Should see error: "Please enter a valid phone number (at least 10 digits)"

### Test 5: Missing Dates
1. Fill form but leave Departure Date empty
2. Click "Get Best Deal"
3. ✅ Should see error: "Departure date is required"

## What Gets Sent

When you submit a valid form, **two emails** are sent:

### Email 1: To Admin (bookings@deltaairtravel.com)
Contains:
- Customer name, email, WhatsApp
- Booking type (Flight/Hotel/Cruise)
- Trip details (from, to, dates, passengers)

### Email 2: To Customer (their email)
Contains:
- Confirmation message
- Summary of booking
- Promise of follow-up contact

## File Structure

```
src/
├── components/
│   └── BookingForm.astro          ← Updated with validation & submission
└── pages/
    └── api/
        └── submit-booking.ts       ← NEW: API endpoint for processing
```

## Key Features

✅ **Client-Side Validation**
- All fields validated before sending to server
- Real-time error display
- User-friendly error messages

✅ **Server-Side Validation**
- All data re-validated on backend
- HTML injection prevention
- Secure email sending

✅ **Email Sending**
- Two emails per submission
- HTML formatted
- Confirmation to customer

✅ **Error Handling**
- Graceful error messages
- Submit button disabled during processing
- Success/error feedback

## Troubleshooting

**"Form submits but no email received"**
- Check spam/junk folder
- Verify `.env` has correct Gmail credentials
- Check browser console (F12) for errors

**"Invalid email address error"**
- Email must have format: `name@domain.com`

**"Invalid phone number error"**
- Phone must have 10+ digits (with or without country code)

**"Submit button stays disabled"**
- Check browser console (F12 → Console tab) for errors
- Refresh page and try again

## What's Next?

The forms are now:
- ✅ Validating user input
- ✅ Sending confirmation emails
- ✅ Handling errors gracefully

Next phases can add:
- Database storage for bookings
- WhatsApp integration
- Admin dashboard to view submissions
- SMS notifications
- Advanced email templates

---

**Ready to test? Start the dev server and submit a form!**
