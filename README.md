# 🥊 The Real Boxing Club - Website

A modern, responsive website for **The Real Boxing Club** built with React, Tailwind CSS, and Framer Motion. Features a professional blue-themed design optimized for boxing clubs and gyms.

![The Real Boxing Club](https://img.shields.io/badge/React-18.2.0-blue) ![Tailwind CSS](https://img.shields.io/badge/Tailwind-CSS-38B2AC) ![Framer Motion](https://img.shields.io/badge/Framer-Motion-0055FF) ![Responsive](https://img.shields.io/badge/Responsive-Yes-green)

## ✨ Features

### 🎯 Core Functionality
- **Responsive Navigation** - Mobile-first design with smooth animations
- **Program Management** - Multiple boxing programs with detailed descriptions
- **Class Scheduling** - Integrated schedule system
- **Member Portal** - User accounts and booking system
- **Contact Integration** - Easy coach communication

### 🎨 Design Features
- **Modern Blue Theme** - Professional boxing club aesthetic
- **Smooth Animations** - Framer Motion powered transitions
- **Mobile-Optimized** - Perfect experience on all devices
- **Accessibility** - WCAG compliant design
- **Fast Performance** - Optimized loading speeds

### 📱 Pages & Sections
- **Home** - Hero section with call-to-action
- **About** - Club history and philosophy
- **Programs** - Training programs for all levels
- **Schedule** - Class timetables
- **Coaches** - Trainer profiles and credentials
- **Gallery** - Photos and videos
- **Blog** - Training tips and news
- **Contact** - Location and inquiry forms

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ 
- npm or yarn

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/your-username/real-boxing-club.git
cd real-boxing-club
```

2. **Install dependencies**
```bash
npm install
# or
yarn install
```

3. **Start development server**
```bash
npm run dev
# or
yarn dev
```

4. **Open your browser**
```
http://localhost:3000
```

## 📁 Project Structure

```
real-boxing-club/
├── public/
│   ├── images/
│   └── favicon.ico
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Main navigation component
│   │   ├── Footer.jsx          # Site footer
│   │   ├── Hero.jsx            # Homepage hero section
│   │   ├── Programs.jsx        # Programs showcase
│   │   └── Schedule.jsx        # Class schedule
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Programs.jsx
│   │   └── Contact.jsx
│   ├── styles/
│   │   └── globals.css         # Global styles
│   ├── hooks/                  # Custom React hooks
│   ├── utils/                  # Utility functions
│   └── App.jsx                 # Main app component
├── package.json
└── tailwind.config.js
```

## 🛠️ Technology Stack

| Technology | Purpose |
|------------|---------|
| **React 18** | Frontend framework |
| **Tailwind CSS** | Utility-first CSS |
| **Framer Motion** | Animations & transitions |
| **React Router** | Navigation & routing |
| **Lucide React** | Modern icons |
| **Vite** | Build tool & dev server |

## 🎨 Customization

### Color Scheme
The website uses a professional blue theme:

```css
/* Primary Colors */
--blue-600: #2563eb;
--blue-700: #1d4ed8;
--blue-800: #1e40af;

/* Background */
--slate-900: #0f172a;
--slate-800: #1e293b;
```

### Adding New Programs
Edit the `programsMenu` array in `Navbar.jsx`:

```jsx
const programsMenu = [
  { 
    name: "Your Program", 
    to: "/programs/your-program",
    icon: Dumbbell,
    description: "Program description"
  },
  // Add more programs...
];
```

### Modifying Schedule
Update the schedule component with your class times:

```jsx
// In Schedule.jsx
const classSchedule = [
  { day: "Monday", time: "6:00 AM - 7:30 AM", class: "Boxing Fundamentals" },
  // Add more classes...
];
```

## 📱 Responsive Breakpoints

| Device | Breakpoint | Features |
|--------|------------|----------|
| Mobile | < 768px | Hamburger menu, stacked layout |
| Tablet | 768px - 1024px | Adapted navigation, optimized layouts |
| Desktop | > 1024px | Full navigation, hover effects |

## 🔧 Build & Deployment

### Build for Production
```bash
npm run build
# or
yarn build
```

### Deploy to Netlify
1. Build the project: `npm run build`
2. Drag the `dist` folder to Netlify
3. Configure build settings if needed

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

## 📞 Contact & Support

For support or questions about this website:

- **Email**: info@realboxingclub.com
- **Phone**: (555) 123-4567
- **Address**: 123 Boxing Street, Fitness City

## 🤝 Contributing

We welcome contributions! Please:

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details.

## 🏆 Boxing Club Features

### Training Programs
- 🥊 **Boxing Fundamentals** - Beginner techniques
- 💪 **Advanced Training** - Competition preparation
- 🏃 **Boxing Fitness** - Cardio and strength
- 👦 **Kids & Teens** - Youth development
- 👤 **Private Training** - One-on-one coaching

### Member Benefits
- ✅ Free trial class for new members
- ✅ Professional certified coaches
- ✅ Modern training facilities
- ✅ Flexible scheduling
- ✅ Community events

---

**Built with ❤️ for The Real Boxing Club** 🥊

*Become a champion. Start your journey today.*