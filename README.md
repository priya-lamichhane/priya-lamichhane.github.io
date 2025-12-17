# Priya Lamichhane - Professional CV Website

A modern, professional React-based CV website built with Vite and Tailwind CSS. This website features a clean academic design with easy content management through a JSON file.

## Features

- ✨ Modern, responsive design
- 📱 Mobile-friendly layout
- 🎨 Professional academic styling
- 📝 Easy content management via JSON
- 📧 Working contact form (Formspree integration)
- 🖨️ Print-friendly layout
- ⚡ Fast loading with Vite
- 🎯 SEO-friendly structure

## Getting Started

### Prerequisites

- Node.js (version 20.19.0 or higher recommended)
- npm (comes with Node.js)

### Installation

1. Navigate to the project directory:
```bash
cd priya_webpage
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

### Building for Production

To create a production-ready build:

```bash
npm run build
```

The built files will be in the `dist` folder, ready to deploy.

### Preview Production Build

To preview the production build locally:

```bash
npm run preview
```

## Editing Content

All website content is stored in a single JSON file for easy editing. **No coding knowledge required!**

### Location
`src/data/content.json`

### How to Edit

1. Open `src/data/content.json` in any text editor
2. Modify the values you want to change
3. Save the file
4. The website will automatically reload with your changes (in development mode)

### Content Structure

#### Personal Information
```json
"personalInfo": {
  "name": "Your Name",
  "title": "Your Professional Title",
  "email": "your.email@example.com",
  "phone": "Your Phone",
  "linkedin": "LinkedIn URL",
  "location": "Your Location",
  "nationality": "Your Nationality"
}
```

#### Work Experience
Add or remove job entries:
```json
"workExperience": [
  {
    "title": "Job Title",
    "organization": "Company Name",
    "period": "Start Date – End Date",
    "location": "City, Country",
    "responsibilities": [
      "Responsibility 1",
      "Responsibility 2"
    ]
  }
]
```

#### Education
```json
"education": [
  {
    "degree": "Degree Name",
    "institution": "University/School Name",
    "period": "Year Range",
    "gpa": "3.50" // Optional
  }
]
```

#### Publications
```json
"publications": [
  {
    "title": "Publication Title",
    "platform": "Where it was published"
  }
]
```

#### Skills
```json
"skills": {
  "technical": ["Skill 1", "Skill 2", "Skill 3"],
  "languages": [
    {
      "language": "Language Name",
      "proficiency": "Level (e.g., Native, C1-C2)"
    }
  ]
}
```

### Adding Your Profile Picture

1. Place your profile picture in: `src/assets/images/`
2. Name it: `profile.jpg` (or update the path in `content.json`)
3. Recommended size: 400x400 pixels (square)
4. Recommended format: JPG or PNG
5. Keep file size under 500KB for optimal loading

## Deployment

### Deploy to Netlify

1. Build your project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify Drop](https://app.netlify.com/drop)

Or use Netlify CLI:
```bash
npm install -g netlify-cli
netlify deploy --prod
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel --prod
```

### Deploy to GitHub Pages

1. Install gh-pages:
```bash
npm install --save-dev gh-pages
```

2. Add to `package.json`:
```json
"scripts": {
  "deploy": "npm run build && gh-pages -d dist"
}
```

3. Update `vite.config.js` with your repo name:
```javascript
export default defineConfig({
  base: '/your-repo-name/',
  plugins: [react()],
})
```

4. Deploy:
```bash
npm run deploy
```

## Project Structure

```
priya_webpage/
├── src/
│   ├── components/          # React components
│   │   ├── Header.jsx
│   │   ├── PersonalInfo.jsx
│   │   ├── WorkExperience.jsx
│   │   ├── Internships.jsx
│   │   ├── Education.jsx
│   │   ├── Awards.jsx
│   │   ├── Publications.jsx
│   │   ├── Teaching.jsx
│   │   ├── Skills.jsx
│   │   ├── ContactForm.jsx
│   │   └── Footer.jsx
│   ├── data/
│   │   └── content.json     # ← EDIT THIS FILE FOR CONTENT
│   ├── assets/
│   │   └── images/
│   │       └── profile.jpg  # Your profile picture
│   ├── App.jsx              # Main app component
│   ├── main.jsx             # App entry point
│   └── index.css            # Global styles
├── public/                  # Static assets
├── index.html               # HTML template
├── package.json             # Dependencies
├── vite.config.js           # Vite configuration
├── tailwind.config.js       # Tailwind CSS configuration
└── README.md                # This file
```

## Customization

### Changing Colors

Edit `tailwind.config.js` to customize the color scheme:

```javascript
colors: {
  'academic-navy': '#1e3a8a',    // Dark blue
  'academic-blue': '#3b82f6',    // Bright blue
  'academic-gray': '#64748b',    // Gray
}
```

### Changing Fonts

Edit `tailwind.config.js` to change fonts:

```javascript
fontFamily: {
  'serif': ['Georgia', 'Cambria', 'Times New Roman', 'Times', 'serif'],
  'sans': ['Inter', 'system-ui', 'Avenir', 'Helvetica', 'Arial', 'sans-serif'],
}
```

### Contact Form

The contact form uses Formspree. To set up your own:

1. Go to [Formspree.io](https://formspree.io/)
2. Create a free account
3. Create a new form
4. Copy your form endpoint
5. Update in `content.json`:
```json
"contact": {
  "formspreeEndpoint": "https://formspree.io/f/YOUR-FORM-ID"
}
```

## Troubleshooting

### Development server won't start
- Make sure Node.js is installed: `node --version`
- Delete `node_modules` and reinstall: `rm -rf node_modules && npm install`

### Changes not showing
- Make sure you saved the file
- Check the browser console for errors
- Try hard refresh: Ctrl+Shift+R (Windows/Linux) or Cmd+Shift+R (Mac)

### Profile image not showing
- Check the image path in `content.json`
- Make sure the image exists in `src/assets/images/`
- Check image file name matches exactly (case-sensitive)

## Technologies Used

- **React 18** - UI library
- **Vite** - Build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Formspree** - Contact form handling

## Support

For issues or questions:
1. Check this README
2. Review the `content.json` file structure
3. Check browser console for errors
4. Ensure all dependencies are installed

## License

© 2025 Priya Lamichhane | All Rights Reserved

---

**Made with ❤️ using React and Tailwind CSS**

# priya-lamichhane.github.io
