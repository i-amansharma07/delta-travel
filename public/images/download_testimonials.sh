#!/bin/bash

# Download profile images for testimonials
# Using placeholder service that generates realistic profile images

echo "Downloading testimonial profile images..."

# Using https://i.pravatar.cc/ - generates consistent avatar images
curl -s "https://i.pravatar.cc/150?img=1" -o "testimonial-1.jpg" 2>/dev/null || echo "Image 1 failed"
curl -s "https://i.pravatar.cc/150?img=2" -o "testimonial-2.jpg" 2>/dev/null || echo "Image 2 failed"
curl -s "https://i.pravatar.cc/150?img=3" -o "testimonial-3.jpg" 2>/dev/null || echo "Image 3 failed"
curl -s "https://i.pravatar.cc/150?img=4" -o "testimonial-4.jpg" 2>/dev/null || echo "Image 4 failed"
curl -s "https://i.pravatar.cc/150?img=5" -o "testimonial-5.jpg" 2>/dev/null || echo "Image 5 failed"
curl -s "https://i.pravatar.cc/150?img=6" -o "testimonial-6.jpg" 2>/dev/null || echo "Image 6 failed"

echo "Download complete!"
ls -lh testimonial-*.jpg

