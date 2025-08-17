# Rupesh Kumar Singh - Portfolio Website

A modern, responsive portfolio website showcasing my skills, experience, and projects in AI/ML, Data Science, and Software Engineering.

## 🌟 Features

- **Modern Design**: Eye-catching UI with smooth animations and gradients
- **Responsive Layout**: Optimized for all devices and screen sizes
- **Interactive Elements**: Smooth scrolling, hover effects, and micro-interactions
- **Review System**: Backend API for storing and managing user reviews
- **Email Integration**: Automatic email notifications for new reviews
- **Database Storage**: MongoDB integration for persistent data storage
- **Performance Optimized**: Fast loading with modern build tools

## 🚀 Tech Stack

### Frontend
- **React 18** - Modern React with hooks and functional components
- **Vite** - Fast build tool and development server
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Smooth animations and transitions
- **React Icons** - Beautiful icon library

### Backend
- **Node.js** - JavaScript runtime
- **Express.js** - Web application framework
- **MongoDB** - NoSQL database with Mongoose ODM
- **Nodemailer** - Email functionality
- **Helmet** - Security middleware
- **CORS** - Cross-origin resource sharing

## 📁 Project Structure

```
Portfolio/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/    # React components
│   │   ├── App.jsx        # Main application component
│   │   ├── main.jsx       # Application entry point
│   │   └── index.css      # Global styles
│   ├── public/            # Static assets
│   ├── package.json       # Frontend dependencies
│   ├── vite.config.js     # Vite configuration
│   ├── tailwind.config.js # Tailwind CSS configuration
│   └── postcss.config.js  # PostCSS configuration
├── server/                 # Backend Node.js application
│   ├── index.js           # Express server
│   ├── package.json       # Backend dependencies
│   └── env.example        # Environment variables template
├── package.json            # Root package.json
└── README.md              # Project documentation
```

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB Atlas account (free tier available)

### 1. Clone the Repository
```bash
git clone <repository-url>
cd Portfolio
```

### 2. Install Dependencies
```bash
# Install root dependencies
npm install

# Install all dependencies (frontend + backend)
npm run install-all
```

### 3. Environment Setup

#### Backend Environment Variables
Create a `.env` file in the `server/` directory:

```bash
# Copy the example file
cp server/env.example server/.env

# Edit the .env file with your values
MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/rupesh-portfolio
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-password
PORT=5000
```

#### MongoDB Atlas Setup
1. Create a free account at [MongoDB Atlas](https://www.mongodb.com/atlas)
2. Create a new cluster
3. Get your connection string
4. Replace `MONGODB_URI` in your `.env` file

#### Gmail App Password Setup
1. Enable 2-factor authentication on your Gmail account
2. Generate an App Password
3. Use this password in `EMAIL_PASS` (not your regular Gmail password)

### 4. Run the Application

#### Development Mode
```bash
# Run both frontend and backend concurrently
npm run dev

# Or run separately:
npm run server    # Backend on port 5000
npm run client    # Frontend on port 3000
```

#### Production Build
```bash
# Build the frontend
npm run build

# Start production server
npm start
```

## 🌐 Deployment

### Frontend Deployment (Vercel - Free)
1. Push your code to GitHub
2. Connect your repository to [Vercel](https://vercel.com)
3. Vercel will automatically deploy and provide a URL

### Backend Deployment (Render - Free)
1. Create an account on [Render](https://render.com)
2. Create a new Web Service
3. Connect your GitHub repository
4. Set environment variables
5. Deploy

### Database (MongoDB Atlas - Free)
- Use the free tier (512MB storage)
- Set up IP whitelist for security
- Use connection string in your environment variables

## 📱 Sections

### 1. Hero Section
- Animated introduction with gradient text
- Call-to-action buttons
- Floating background elements

### 2. About Section
- Personal information and achievements
- Education details
- Mission statement

### 3. Skills Section
- Interactive skill bars with percentages
- Categorized technical skills
- Certifications display

### 4. Experience Section
- Timeline layout for work history
- Detailed role descriptions
- Technology tags

### 5. Projects Section
- Featured projects showcase
- Category filtering
- Technology stacks

### 6. Contact Section
- Contact information
- Review submission form
- Email integration

## 🔧 Customization

### Colors
Edit `client/tailwind.config.js` to customize the color scheme:
```javascript
colors: {
  primary: {
    50: '#eff6ff',
    500: '#3b82f6',
    600: '#2563eb',
    // ... more shades
  }
}
```

### Content
Update the content in each component file:
- `Hero.jsx` - Personal introduction
- `About.jsx` - Personal details and education
- `Skills.jsx` - Skills and certifications
- `Experience.jsx` - Work experience
- `Projects.jsx` - Project showcase
- `Contact.jsx` - Contact information

### Styling
Modify `client/src/index.css` for global styles and custom CSS classes.

## 🚀 Performance Features

- **Lazy Loading**: Components load as they come into view
- **Optimized Images**: Efficient image handling
- **Minified CSS/JS**: Production builds are optimized
- **CDN Ready**: Static assets can be served from CDN
- **Mobile First**: Responsive design for all devices

## 🔒 Security Features

- **Helmet.js**: Security headers
- **Rate Limiting**: API request throttling
- **Input Validation**: Form data sanitization
- **CORS Protection**: Cross-origin request handling
- **Environment Variables**: Secure configuration management

## 📊 API Endpoints

### Reviews
- `POST /api/review` - Submit a new review
- `GET /api/reviews` - Get all reviews
- `GET /api/health` - Health check endpoint

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 📞 Support

If you have any questions or need help:
- Email: rupeshkumarsingh908@gmail.com
- LinkedIn: [Rupesh Kumar Singh](https://www.linkedin.com/in/rupesh-kumar-singh-542040235)

## 🙏 Acknowledgments

- Icons from [React Icons](https://react-icons.github.io/react-icons/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)
- Styling with [Tailwind CSS](https://tailwindcss.com/)
- Build tool [Vite](https://vitejs.dev/)

---

**Made with ❤️ by Rupesh Kumar Singh**
