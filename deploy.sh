#!/bin/bash

# Portfolio Deployment Script
# This script helps deploy the portfolio to various platforms

echo "🚀 Portfolio Deployment Helper"
echo "=============================="

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check if npm is installed
if ! command -v npm &> /dev/null; then
    echo "❌ npm is not installed. Please install npm first."
    exit 1
fi

echo "✅ Node.js and npm are installed"

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
    if [ $? -ne 0 ]; then
        echo "❌ Failed to install dependencies"
        exit 1
    fi
    echo "✅ Dependencies installed successfully"
fi

# Build the project
echo "🔨 Building the project..."
npm run build
if [ $? -ne 0 ]; then
    echo "❌ Build failed"
    exit 1
fi
echo "✅ Build completed successfully"

echo ""
echo "🌐 Deployment Options:"
echo "======================"
echo ""

echo "1. Vercel:"
echo "   - Install Vercel CLI: npm i -g vercel"
echo "   - Deploy: vercel"
echo "   - Config: vercel.json is ready"
echo ""

echo "2. Netlify:"
echo "   - Install Netlify CLI: npm i -g netlify-cli"
echo "   - Deploy: netlify deploy --prod --dir=client/dist"
echo "   - Config: netlify.toml is ready"
echo ""

echo "3. Railway:"
echo "   - Install Railway CLI: npm i -g @railway/cli"
echo "   - Deploy: railway login && railway deploy"
echo "   - Config: railway.json is ready"
echo ""

echo "4. Heroku:"
echo "   - Install Heroku CLI: Follow https://devcenter.heroku.com/articles/heroku-cli"
echo "   - Deploy: git push heroku main"
echo "   - Config: Procfile is ready"
echo ""

echo "5. DigitalOcean App Platform:"
echo "   - Use the .do/app.yaml file"
echo "   - Connect your GitHub repo in DO dashboard"
echo ""

echo "6. Docker:"
echo "   - Build: docker build -t portfolio ."
echo "   - Run: docker run -p 5000:5000 portfolio"
echo "   - Or use: docker-compose up"
echo ""

echo "📁 Files created for deployment:"
echo "- README.md (comprehensive documentation)"
echo "- vercel.json (Vercel configuration)"
echo "- netlify.toml (Netlify configuration)" 
echo "- Procfile (Heroku configuration)"
echo "- railway.json (Railway configuration)"
echo "- .do/app.yaml (DigitalOcean configuration)"
echo "- Dockerfile (Docker configuration)"
echo "- docker-compose.yml (Docker Compose)"
echo "- .env.example (Environment variables template)"
echo ""

echo "✅ Your portfolio is ready for deployment!"
echo "Choose any platform above and follow the instructions."