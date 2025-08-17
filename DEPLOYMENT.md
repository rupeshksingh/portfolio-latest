# 🚀 Deployment Guide

This guide will walk you through deploying your portfolio website using completely free services.

2. Click "Generate"
3. Select "Mail" and "Other (Custom name)"
4. Name it "Portfolio Website"
5. Copy the generated password (16 characters)

## 🐙 Step 3: Push to GitHub

### 3.1 Create Repository
1. Go to [GitHub](https://github.com)
2. Click "New repository"
3. Name it `portfolio` or similar
4. Make it public
5. Don't initialize with README (we already have one)

### 3.2 Push Your Code
```bash
# Initialize git and push
git init
git add .
git commit -m "Initial commit: Portfolio website"
git branch -M main
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

## 🔧 Step 4: Backend Deployment (Render)

### 4.1 Create Render Account
1. Go to [Render](https://render.com)
2. Sign up with your GitHub account

### 4.2 Deploy Backend Service
1. Click "New +" and select "Web Service"
2. Connect your GitHub repository
3. Configure the service:
   - **Name**: `rupesh-portfolio-backend`
   - **Environment**: `Node`
   - **Build Command**: `cd server && npm install`
   - **Start Command**: `cd server && npm start`
   - **Plan**: `Free`

### 4.3 Set Environment Variables
In your Render service, go to "Environment" and add:
```
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/rupesh-portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-gmail-app-password
NODE_ENV=production
PORT=10000
```

### 4.4 Deploy
1. Click "Create Web Service"
2. Wait for deployment to complete
3. Copy your service URL (e.g., `https://your-app.onrender.com`)

## 🎨 Step 5: Frontend Deployment (Vercel)

### 5.1 Create Vercel Account
1. Go to [Vercel](https://vercel.com)
2. Sign up with your GitHub account

### 5.2 Deploy Frontend
1. Click "New Project"
2. Import your GitHub repository
3. Configure the project:
   - **Framework Preset**: `Vite`
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

### 5.3 Set Environment Variables
Add this environment variable:
```
REACT_APP_API_URL=https://your-backend-url.onrender.com
```

### 5.4 Deploy
1. Click "Deploy"
2. Wait for deployment to complete
3. Your site will be live at `https://your-project.vercel.app`

## 🔗 Step 6: Update API URLs

### 6.1 Update Frontend Configuration
In `client/src/components/Contact.jsx`, update the API call:
```javascript
// Replace this line:
const response = await axios.post('/api/review', formData)

// With this:
const response = await axios.post(`${process.env.REACT_APP_API_URL}/api/review`, formData)
```

### 6.2 Update Vite Configuration
In `client/vite.config.js`, update the proxy:
```javascript
server: {
  port: 3000,
  proxy: {
    '/api': {
      target: process.env.REACT_APP_API_URL || 'http://localhost:5000',
      changeOrigin: true,
    },
  },
},
```

## 🧪 Step 7: Test Your Deployment

### 7.1 Test Backend
1. Visit your backend URL + `/api/health`
2. Should return: `{"status":"OK","timestamp":"..."}`

### 7.2 Test Frontend
1. Visit your Vercel URL
2. Navigate to the Contact section
3. Submit a test review
4. Check if you receive an email

### 7.3 Test Database
1. Check MongoDB Atlas dashboard
2. Look for your database and collections
3. Verify that reviews are being stored

## 🔄 Step 8: Continuous Deployment

### 8.1 Automatic Updates
Both Vercel and Render will automatically redeploy when you push to GitHub:
```bash
git add .
git commit -m "Update portfolio content"
git push origin main
```

### 8.2 Environment Variable Updates
- **Vercel**: Update in project settings
- **Render**: Update in service environment variables

## 🚨 Troubleshooting

### Common Issues

#### Backend Not Starting
- Check environment variables in Render
- Verify MongoDB connection string
- Check Render logs for errors

#### Frontend API Errors
- Verify `REACT_APP_API_URL` is set correctly
- Check if backend is running
- Verify CORS settings

#### Email Not Working
- Check Gmail app password
- Verify `EMAIL_USER` and `EMAIL_PASS`
- Check Render logs for email errors

#### Database Connection Issues
- Verify MongoDB Atlas network access
- Check connection string format
- Ensure database user has correct permissions

### Getting Help
- Check Render logs in your service dashboard
- Check Vercel deployment logs
- Verify all environment variables are set
- Test locally first before deploying

## 🎉 Congratulations!

Your portfolio website is now live and fully functional with:
- ✅ Modern, responsive frontend
- ✅ Secure backend API
- ✅ Database storage
- ✅ Email notifications
- ✅ Free hosting
- ✅ Automatic deployments

## 🔗 Your Live URLs

- **Frontend**: `https://your-project.vercel.app`
- **Backend**: `https://your-app.onrender.com`
- **Database**: MongoDB Atlas (managed)

## 📱 Next Steps

1. **Customize Content**: Update the content in your components
2. **Add Domain**: Connect a custom domain (optional)
3. **Monitor**: Set up monitoring and analytics
4. **SEO**: Optimize for search engines
5. **Performance**: Monitor and optimize loading times

---

**Need help?** Check the troubleshooting section or reach out to the community!

## 📋 Prerequisites

- GitHub account
- MongoDB Atlas account (free)
- Gmail account (for email functionality)

## 🌐 Step 1: Database Setup (MongoDB Atlas)

### 1.1 Create MongoDB Atlas Account
1. Go to [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Click "Try Free" and create an account
3. Choose the free tier (M0 Sandbox)

### 1.2 Create Cluster
1. Click "Build a Database"
2. Choose "FREE" tier
3. Select your preferred cloud provider and region
4. Click "Create"

### 1.3 Set Up Database Access
1. Go to "Database Access" in the left sidebar
2. Click "Add New Database User"
3. Choose "Password" authentication
4. Create a username and password (save these!)
5. Select "Read and write to any database"
6. Click "Add User"

### 1.4 Set Up Network Access
1. Go to "Network Access" in the left sidebar
2. Click "Add IP Address"
3. Click "Allow Access from Anywhere" (for development)
4. Click "Confirm"

### 1.5 Get Connection String
1. Go to "Database" in the left sidebar
2. Click "Connect"
3. Choose "Connect your application"
4. Copy the connection string
5. Replace `<password>` with your actual password

## 📧 Step 2: Email Setup (Gmail)

### 2.1 Enable 2-Factor Authentication
1. Go to your Google Account settings
2. Navigate to "Security"
3. Enable "2-Step Verification"

### 2.2 Generate App Password
1. In Security settings, find "App passwords"