# Yoga for wellness - Website

A modern, clean, and responsive single-page website for a yoga instructor offering personalized yoga classes in Navi Mumbai.

## Features

- **Fully Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Single Page Layout**: Smooth scrolling navigation between sections
- **Modern UI/UX**: Clean and calming design suitable for yoga and wellness
- **Interactive Elements**: Smooth animations and hover effects
- **Contact Form**: Integrated with WhatsApp for quick inquiries
- **Multiple Sections**:
  - Hero section with call-to-action
  - About section with certifications
  - Class offerings with detailed descriptions
  - Student testimonials
  - Schedule information
  - Image gallery
  - Contact form
  - Footer with quick links

## Technologies Used

- **HTML5**: Semantic markup
- **CSS3**: Modern styling with CSS Grid and Flexbox
- **JavaScript**: Interactive features and smooth scrolling
- **Google Fonts**: Playfair Display and Poppins

## File Structure

```
Payal yoga website/
├── index.html          # Main HTML file
├── styles.css          # All styling
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Customization Guide

### 1. Update Personal Information

**In `index.html`:**

- Replace "Payal" with the actual instructor name throughout the file
- Update phone number: Search for `+91 93243 49069` and replace
- Update WhatsApp number in the contact links
- Modify certifications in the About section
- Update testimonials with real student reviews
- Change location details in the Schedule section

### 2. Update Colors

**In `styles.css` (root variables):**

```css
:root {
    --primary-color: #6b8e6b;      /* Main green color */
    --secondary-color: #8fbc8f;    /* Light green */
    --accent-color: #d4a574;       /* Gold accent */
    --dark-color: #2c3e2c;         /* Dark green */
    --light-color: #f5f9f5;        /* Light background */
}
```

### 3. Add Images

Replace the placeholder SVGs with actual images:

1. **Instructor Photo**: Replace the SVG in the About section
2. **Gallery Images**: Replace the gallery placeholders with actual yoga session photos
3. **Hero Background**: Modify the hero section background

### 4. Update Social Media Links

- Instagram: Update the link in the Gallery section
- Facebook/Other platforms: Add links in the footer

### 5. Modify Class Offerings

Edit the class cards in the Classes section to match your specific offerings, pricing, and descriptions.

## Setup Instructions

1. **Download all files** to a folder on your computer
2. **Open `index.html`** in a web browser to view the website
3. **Customize the content** as described above
4. **Add your images** to the project folder and update the image paths

## Deployment

### Option 1: Vercel (Recommended)

1. Create a [Vercel account](https://vercel.com)
2. Install Vercel CLI: `npm i -g vercel`
3. Navigate to your project folder
4. Run: `vercel`
5. Follow the prompts

### Option 2: Netlify

1. Create a [Netlify account](https://netlify.com)
2. Drag and drop your project folder to Netlify's dashboard
3. Your site will be live in seconds!

### Option 3: GitHub Pages

1. Create a GitHub repository
2. Push your files to the repository
3. Enable GitHub Pages in repository settings
4. Your site will be available at `username.github.io/repository-name`

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Performance Tips

1. **Optimize Images**: Compress images before uploading (use tools like TinyPNG)
2. **Use WebP Format**: Convert images to WebP for better performance
3. **Lazy Loading**: Images load as user scrolls
4. **Minify Files**: Minify CSS and JS for production

## Contact Form Setup

The contact form currently redirects to WhatsApp. To add email functionality:

1. Use a service like [Formspree](https://formspree.io) or [EmailJS](https://emailjs.com)
2. Follow their documentation to integrate
3. Update the form submission handler in `script.js`

## SEO Optimization

To improve search engine ranking:

1. Add meta tags for social media sharing (Open Graph, Twitter Cards)
2. Create a `sitemap.xml` file
3. Add a `robots.txt` file
4. Optimize image alt texts
5. Add structured data (JSON-LD) for local business

## Support

For any issues or questions:
- Check the code comments for guidance
- Refer to MDN Web Docs for HTML/CSS/JS questions
- Use browser developer tools to debug

## License

This template is free to use for personal and commercial projects.

## Credits

- Fonts: Google Fonts (Playfair Display, Poppins)
- Icons: Unicode symbols and custom SVG
- Design inspired by modern wellness websites

---

**Made with ❤️ for Yoga Instructors**
