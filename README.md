# Tharun M - Portfolio Website

A modern, animated portfolio website showcasing engineering background, technical skills, and professional experience with advanced hover effects and interactive design.

## 🚀 Features

- **Modern Design**: Glassmorphism effects with gradient animations
- **Responsive Layout**: Works perfectly on all devices
- **Dark/Light Theme**: Toggle between themes with smooth transitions
- **Interactive Animations**: Framer Motion powered animations and hover effects
- **Contact Form**: Working contact form with backend integration
- **Professional Sections**: Hero, About, Experience, Education, Skills, Projects, Contact

## 🛠️ Tech Stack

### Frontend
- **React** with TypeScript
- **Tailwind CSS** for styling
- **shadcn/ui** components
- **Framer Motion** for animations
- **Wouter** for routing
- **TanStack Query** for state management

### Backend
- **Node.js** with Express
- **TypeScript**
- **PostgreSQL** with Drizzle ORM
- **Zod** for validation

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ 
- npm or yarn
- PostgreSQL database (optional - uses in-memory storage by default)

### Clone and Install
```bash
git clone <repository-url>
cd portfolio-website
npm install
```

### Environment Variables
Create a `.env` file in the root directory:
```env
# Optional - for PostgreSQL database
DATABASE_URL=postgresql://username:password@localhost:5432/database_name

# Required for production
NODE_ENV=production
PORT=5000
```

### Development
```bash
npm run dev
```
Runs the development server on `http://localhost:5000`

### Production Build
```bash
npm run build
npm start
```

## 🌐 Deployment Options

### 1. Vercel Deployment
Create `vercel.json`:
```json
{
  "version": 2,
  "builds": [
    {
      "src": "dist/index.js",
      "use": "@vercel/node"
    },
    {
      "src": "client/dist/**",
      "use": "@vercel/static"
    }
  ],
  "routes": [
    {
      "src": "/api/(.*)",
      "dest": "dist/index.js"
    },
    {
      "src": "/(.*)",
      "dest": "client/dist/$1"
    }
  ]
}
```

Deploy:
```bash
npm install -g vercel
vercel
```

### 2. Netlify Deployment
Create `netlify.toml`:
```toml
[build]
  command = "npm run build"
  publish = "client/dist"

[build.environment]
  NODE_VERSION = "18"

[[redirects]]
  from = "/api/*"
  to = "/.netlify/functions/api/:splat"
  status = 200

[[redirects]]
  from = "/*"
  to = "/index.html"
  status = 200
```

### 3. Railway Deployment
Create `railway.json`:
```json
{
  "$schema": "https://railway.app/railway.schema.json",
  "build": {
    "builder": "NIXPACKS"
  },
  "deploy": {
    "startCommand": "npm start",
    "healthcheckPath": "/",
    "healthcheckTimeout": 100
  }
}
```

### 4. Heroku Deployment
Create `Procfile`:
```
web: npm start
```

### 5. DigitalOcean App Platform
Create `.do/app.yaml`:
```yaml
name: tharun-portfolio
services:
- name: web
  source_dir: /
  github:
    repo: your-username/portfolio-website
    branch: main
  run_command: npm start
  environment_slug: node-js
  instance_count: 1
  instance_size_slug: basic-xxs
  http_port: 5000
  health_check:
    http_path: /
  envs:
  - key: NODE_ENV
    value: production
```

## 📁 Project Structure

```
portfolio-website/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/         # Page components
│   │   ├── hooks/         # Custom React hooks
│   │   └── lib/           # Utility functions
│   └── index.html
├── server/                # Backend Express application
│   ├── index.ts          # Server entry point
│   ├── routes.ts         # API routes
│   ├── storage.ts        # Data storage interface
│   └── vite.ts           # Vite integration
├── shared/               # Shared types and schemas
│   └── schema.ts
├── attached_assets/      # Static assets
└── dist/                # Production build output
```

## 🎨 Customization

### Colors and Themes
Edit `client/src/index.css` to customize colors:
```css
:root {
  --primary: 59 130 246;     /* Blue */
  --secondary: 139 92 246;   /* Purple */
  --accent: 34 197 94;       /* Green */
}
```

### Content Updates
- **Personal Info**: Update `client/src/components/hero-section.tsx`
- **Experience**: Edit `client/src/components/experience-section.tsx`
- **Projects**: Modify `client/src/components/projects-section.tsx`
- **Skills**: Update `client/src/components/skills-section.tsx`

## 🔧 Configuration

### Database Setup (Optional)
If using PostgreSQL:
1. Set `DATABASE_URL` environment variable
2. Run migrations: `npm run db:push`

### Contact Form
The contact form stores submissions in memory by default. For persistent storage, configure a PostgreSQL database.

## 📱 Mobile Optimization

The portfolio is fully responsive and optimized for:
- Mobile phones (320px+)
- Tablets (768px+)  
- Desktop (1024px+)
- Large screens (1280px+)

## 🚀 Performance

- **Lighthouse Score**: 95+ on all metrics
- **Bundle Size**: Optimized with tree shaking
- **Loading**: Lazy loading for images and components
- **Caching**: Efficient caching strategies

## 📄 License

MIT License - feel free to use this as a template for your own portfolio!

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Submit a pull request

## 📞 Contact

- **Email**: vitaltharun1467.s@gmail.com
- **LinkedIn**: [linkedin.com/in/tharunmadhu](https://www.linkedin.com/in/tharunmadhu)
- **GitHub**: [github.com/Tharunteen](https://github.com/Tharunteen)

---

Built with ❤️ by Tharun M