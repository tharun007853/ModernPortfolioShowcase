# 🚀 Deployment Guide - Tharun M Portfolio

This guide provides step-by-step instructions for deploying your portfolio to various platforms.

## 📋 Prerequisites

Before deploying, ensure you have:
- Node.js 18+ installed
- Git repository set up
- Built the project locally (`npm run build`)

## 🌐 Platform-Specific Deployment Instructions

### 1. 🔷 Vercel (Recommended)

**Why Vercel?** 
- Free tier available
- Automatic deployments from Git
- Excellent performance
- Built-in CDN

**Steps:**
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

4. Follow the prompts:
   - Link to existing project? **N**
   - Project name: `tharun-portfolio`
   - Directory: `./` (current directory)
   - Build settings: Use defaults

**Configuration:** `vercel.json` is already included in your project.

### 2. 🟦 Netlify

**Why Netlify?**
- Free tier with generous limits
- Easy drag-and-drop deployment
- Form handling built-in
- Branch previews

**Option A: Netlify CLI**
1. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

2. Login:
   ```bash
   netlify login
   ```

3. Deploy:
   ```bash
   netlify deploy --prod --dir=client/dist
   ```

**Option B: Git Integration**
1. Push code to GitHub/GitLab
2. Connect repository in Netlify dashboard
3. Set build settings:
   - Build command: `npm run build`
   - Publish directory: `client/dist`

**Configuration:** `netlify.toml` is included for automatic setup.

### 3. 🚂 Railway

**Why Railway?**
- Simple deployment
- Built-in database support
- Affordable pricing
- Great for full-stack apps

**Steps:**
1. Install Railway CLI:
   ```bash
   npm install -g @railway/cli
   ```

2. Login:
   ```bash
   railway login
   ```

3. Initialize and deploy:
   ```bash
   railway link
   railway deploy
   ```

**Configuration:** `railway.json` is included.

### 4. 🟣 Heroku

**Why Heroku?**
- Industry standard
- Add-ons ecosystem
- Easy scaling
- Good documentation

**Steps:**
1. Install Heroku CLI from [heroku.com/cli](https://devcenter.heroku.com/articles/heroku-cli)

2. Login:
   ```bash
   heroku login
   ```

3. Create app:
   ```bash
   heroku create tharun-portfolio
   ```

4. Deploy:
   ```bash
   git push heroku main
   ```

**Configuration:** `Procfile` is included.

### 5. 🌊 DigitalOcean App Platform

**Why DigitalOcean?**
- Predictable pricing
- Good performance
- Integrated monitoring
- Multiple deployment options

**Steps:**
1. Push code to GitHub
2. Go to DigitalOcean App Platform
3. Create new app from GitHub repository
4. Use the provided `.do/app.yaml` configuration
5. Deploy

### 6. 🐳 Docker Deployment

**Why Docker?**
- Consistent environments
- Easy scaling
- Works anywhere
- Version control for infrastructure

**Option A: Docker**
```bash
# Build image
docker build -t tharun-portfolio .

# Run container
docker run -p 5000:5000 tharun-portfolio
```

**Option B: Docker Compose**
```bash
# Start with database
docker-compose up -d

# View logs
docker-compose logs -f
```

### 7. ☁️ AWS/GCP/Azure

**For cloud providers:**
1. Use the Docker approach
2. Deploy to container services:
   - AWS: Elastic Container Service (ECS) or Fargate
   - GCP: Cloud Run or Google Kubernetes Engine
   - Azure: Container Instances or Azure Kubernetes Service

## 🔧 Environment Configuration

### Required Environment Variables

Create these environment variables on your chosen platform:

```env
NODE_ENV=production
PORT=5000
```

### Optional Environment Variables

```env
# Database (if using PostgreSQL)
DATABASE_URL=postgresql://user:password@host:port/database

# Email service (if implementing contact form emails)
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-app-password
```

## 🚨 Troubleshooting

### Common Issues

**Build Fails:**
- Ensure Node.js version is 18+
- Check for TypeScript errors: `npm run check`
- Clear cache: `rm -rf node_modules package-lock.json && npm install`

**Assets Not Loading:**
- Check build output in `client/dist`
- Verify asset paths in deployment
- Ensure static file serving is configured

**API Routes Not Working:**
- Check environment variables
- Verify build includes server files
- Check server logs for errors

**Database Connection Issues:**
- Verify DATABASE_URL format
- Check database server status
- Ensure firewall allows connections

### Platform-Specific Issues

**Vercel:**
- Function timeout issues: Check serverless function limits
- Large bundle size: Enable compression and optimize images

**Netlify:**
- Form submissions not working: Check Netlify Forms configuration
- Redirects not working: Verify `_redirects` file or `netlify.toml`

**Heroku:**
- App sleeping: Upgrade to paid plan or use uptime monitors
- Buildpack issues: Ensure Node.js buildpack is selected

## 📊 Performance Optimization

### Before Deployment

1. **Optimize Images:**
   ```bash
   # Use WebP format for images
   # Compress assets using tools like ImageOptim
   ```

2. **Bundle Analysis:**
   ```bash
   npm run build -- --analyze
   ```

3. **Lighthouse Audit:**
   - Test on development: Chrome DevTools > Lighthouse
   - Aim for 90+ scores in all categories

### After Deployment

1. **Monitor Performance:**
   - Set up monitoring (Vercel Analytics, Netlify Analytics)
   - Use Google PageSpeed Insights
   - Monitor Core Web Vitals

2. **CDN Configuration:**
   - Most platforms include CDN automatically
   - Configure proper cache headers

## 🔄 Continuous Deployment

### GitHub Actions (Example)

Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to Vercel
on:
  push:
    branches: [ main ]
jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '18'
      - name: Install dependencies
        run: npm ci
      - name: Build project
        run: npm run build
      - name: Deploy to Vercel
        uses: amondnet/vercel-action@v20
        with:
          vercel-token: ${{ secrets.VERCEL_TOKEN }}
          vercel-org-id: ${{ secrets.ORG_ID }}
          vercel-project-id: ${{ secrets.PROJECT_ID }}
```

## 📞 Support

If you encounter issues:

1. Check platform-specific documentation
2. Review error logs carefully
3. Test locally first: `npm run build && npm start`
4. Search community forums for similar issues

## ✅ Post-Deployment Checklist

- [ ] All pages load correctly
- [ ] Contact form works
- [ ] Theme toggle functions
- [ ] Mobile responsiveness
- [ ] Performance scores > 90
- [ ] SSL certificate active
- [ ] Custom domain configured (if applicable)
- [ ] Analytics/monitoring set up

---

🎉 **Congratulations!** Your portfolio is now live and accessible to the world!