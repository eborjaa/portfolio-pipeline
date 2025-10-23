# SDET Portfolio

A modern, responsive portfolio website built with Next.js, TypeScript, and Tailwind CSS. This portfolio showcases professional skills and projects with a clean, modern design.

## 🚀 Features

- **Modern Next.js Application** with TypeScript and Tailwind CSS
- **Responsive Design** with mobile-first approach
- **Component-Based Architecture** for maintainable code
- **Contact Form** with API endpoint
- **Smooth Animations** with AOS (Animate On Scroll)
- **Professional Sections**: Hero, About, Services, Works, Contact

## 🛠️ Tech Stack

- **Next.js 16** - React framework with App Router
- **TypeScript** - Type-safe JavaScript
- **Tailwind CSS** - Utility-first CSS framework
- **AOS** - Animation library for scroll effects

## 📋 Prerequisites

- Node.js 18+ 
- npm or yarn

## 🚀 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

### 3. Build for Production

```bash
npm run build
npm start
```

## 📁 Project Structure

```
/src/
├── app/                 # Next.js app router
│   ├── api/            # API routes
│   ├── globals.css     # Global styles
│   └── layout.tsx      # Root layout
├── components/         # React components
│   ├── Header.tsx      # Navigation component
│   ├── Hero.tsx        # Landing section
│   ├── About.tsx       # About section
│   ├── Services.tsx    # Services section
│   ├── Works.tsx       # Portfolio projects
│   └── ContactForm.tsx # Contact form
└── public/             # Static assets
    └── img/            # Images and icons
```

## 🎨 Customization

### Update Personal Information

1. **Header Component**: Update name and navigation links
2. **Hero Section**: Change name, title, and social links
3. **About Section**: Update bio, skills, and experience
4. **Services Section**: Modify services offered
5. **Works Section**: Add your projects and technologies
6. **Contact Form**: Update contact information

### Styling

- Modify CSS variables in `globals.css` for color scheme
- Update Tailwind classes for layout changes
- Customize animations in component files

### Content Updates

- Replace placeholder images in `/public/img/`
- Update project data in `Works.tsx`
- Modify service descriptions in `Services.tsx`

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Full-stack deployment
- **Railway**: Simple deployment with database options

## 📝 License

This project is licensed under the MIT License.

---

**Contact**: [Your Email] | [LinkedIn] | [GitHub]