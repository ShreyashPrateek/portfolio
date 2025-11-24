# Portfolio 2025

A modern, responsive portfolio website built with React.js, Tailwind CSS, and Vite.

🌐 **Live Demo:** [https://shreyashprateek-portfoliosite.netlify.app/](https://shreyashprateek-portfoliosite.netlify.app/)

📅 **Development Started:** November 24, 2024

## 🚀 Tech Stack

- **Frontend Framework:** React.js 18
- **Build Tool:** Vite
- **Styling:** Tailwind CSS
- **Language:** JavaScript (ES6+)
- **Package Manager:** npm

## 📁 Project Structure

```
portfolio-2025/
├── public/
│   ├── favicon.ico
│   ├── index.html
│   └── assets/
│       ├── profile.jpg
│       ├── logo.svg
│       └── project-images/
│
├── src/
│   ├── assets/
│   │   ├── images/
│   │   │   ├── profile.png
│   │   │   ├── skills/
│   │   │   ├── certifications/
│   │   │   └── projects/
│   │   └── icons/
│   │
│   ├── components/
│   │   ├── common/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Footer.jsx
│   │   │   ├── SectionTitle.jsx
│   │   │   └── Button.jsx
│   │   ├── home/
│   │   │   └── Hero.jsx
│   │   ├── about/
│   │   │   └── AboutCard.jsx
│   │   ├── skills/
│   │   │   └── SkillCard.jsx
│   │   ├── projects/
│   │   │   └── ProjectCard.jsx
│   │   ├── training/
│   │   │   └── TrainingCard.jsx
│   │   ├── certifications/
│   │   │   └── CertificateCard.jsx
│   │   └── contact/
│   │       └── ContactForm.jsx
│   │
│   ├── sections/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Training.jsx
│   │   ├── Certifications.jsx
│   │   └── Contact.jsx
│   │
│   ├── data/
│   │   ├── skills.js
│   │   ├── projects.js
│   │   ├── certifications.js
│   │   └── training.js
│   │
│   ├── hooks/
│   │   └── useScrollToTop.js
│   │
│   ├── pages/
│   │   └── MainLayout.jsx
│   │
│   ├── styles/
│   │   ├── globals.css
│   │   └── custom.css
│   │
│   ├── config/
│   │   └── site.config.js
│   │
│   ├── App.jsx
│   └── main.jsx
│
├── .gitignore
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

## 🛠️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone <https://github.com/ShreyashPrateek/portfolio.git>
   cd portfolio-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

5. **Preview production build**
   ```bash
   npm run preview
   ```

## 📱 Sections

- **Home:** Hero section with introduction
- **About:** Personal information and background
- **Skills:** Technical skills and expertise
- **Projects:** Portfolio of completed projects
- **Training:** Professional training and courses
- **Certifications:** Professional certifications
- **Contact:** Contact form and information

## 🎨 Features

- Fully responsive design
- Modern UI/UX with Tailwind CSS
- Component-based architecture
- Reusable components
- Optimized performance with Vite
- Clean and maintainable code structure

## 🔧 Configuration

- **Tailwind CSS:** Configured in `tailwind.config.js`
- **PostCSS:** Configured in `postcss.config.js`
- **Site Config:** Personal information in `src/config/site.config.js`

## 📝 Development Guidelines

1. Follow the established folder structure
2. Use Tailwind CSS for styling
3. Create reusable components in the `components/common/` directory
4. Store data configurations in the `data/` directory
5. Use meaningful component and file names

## 🚀 Deployment

The project is ready for deployment on platforms like:
- Vercel
- Netlify
- GitHub Pages
- AWS S3 + CloudFront

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

**Built with ❤️ by Shreyash Prateek**