# 🏥 Abba Sena Hospital Portfolio

A modern, premium healthcare website built with React, TypeScript, and Tailwind CSS. This portfolio showcases Abba Sena Hospital's services, facilities, medical professionals, and provides seamless appointment booking functionality.

![React](https://img.shields.io/badge/React-19.0.0-61DAFB?style=flat&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.8.2-3178C6?style=flat&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind%20CSS-4.1.14-06B6D4?style=flat&logo=tailwind-css)
![Vite](https://img.shields.io/badge/Vite-6.2.0-646CFF?style=flat&logo=vite)

---

## ✨ Features

### Core Functionality
- **Responsive Design** — Fully optimized for desktop, tablet, and mobile devices
- **Dynamic Navigation** — Smooth scrolling and route-based navigation
- **Appointment Booking** — Comprehensive appointment scheduling system with date/time selection
- **Interactive Modals** — Newsletter signup and booking confirmation modals

### Pages & Sections
- **Home** — Hero section with call-to-action, facility highlights, statistics counter
- **Services** — Comprehensive medical services overview with detailed descriptions
- **Facilities** — Hospital facilities showcase with images and descriptions
- **Doctors** — Medical team profiles with specialties and qualifications
- **About Us** — Hospital history, mission, vision, and values
- **Contact** — Contact form, location map, and essential information

### Technical Highlights
- React Router for seamless page transitions
- Motion (Framer Motion) for elegant animations
- Lucide React for consistent iconography
- TypeScript for type-safe development
- Vite for lightning-fast development and build performance

---

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (v18 or higher)
- **npm** or **yarn**

### Installation

```bash
# Clone the repository
git clone <repository-url>

# Navigate to project directory
cd Abba-Sena-Hospital-Portfolio-main

# Install dependencies
npm install
```

### Development

```bash
# Start development server
npm run dev
```

The application will be available at `http://localhost:3000`

### Build

```bash
# Create production build
npm run build
```

### Preview Production Build

```bash
# Preview the built application
npm run preview
```

---

## 📁 Project Structure

```
├── src/
│   ├── components/          # Reusable React components
│   │   ├── Footer.tsx       # Site footer with links and newsletter
│   │   ├── Modals.tsx       # Modal dialogs for booking & newsletter
│   │   └── Navbar.tsx       # Navigation header with menu
│   ├── pages/               # Page components
│   │   ├── Home.tsx         # Landing page
│   │   ├── About.tsx        # About the hospital
│   │   ├── Services.tsx     # Medical services
│   │   ├── Facilities.tsx   # Hospital facilities
│   │   ├── Doctors.tsx      # Medical professionals
│   │   ├── Contact.tsx      # Contact page & form
│   │   └── Appointment.tsx  # Appointment booking page
│   ├── App.tsx              # Main application component
│   ├── main.tsx             # Application entry point
│   └── index.css            # Global styles & Tailwind imports
├── assets/
│   └── img/                 # Images and assets
├── public/                  # Static assets
├── index.html               # HTML entry point
├── package.json             # Dependencies and scripts
├── tsconfig.json            # TypeScript configuration
├── vite.config.ts           # Vite configuration
└── README.md                # Project documentation
```

---

## 🛠️ Technology Stack

| Category | Technology |
|----------|------------|
| **Framework** | React 19 |
| **Language** | TypeScript 5.8 |
| **Styling** | Tailwind CSS 4.1 |
| **Routing** | React Router DOM 7 |
| **Animations** | Motion (Framer Motion) |
| **Build Tool** | Vite 6.2 |
| **Icons** | Lucide React |

---

## 📋 Available Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server on port 3000 |
| `npm run build` | Create production build |
| `npm run preview` | Preview production build locally |
| `npm run lint` | Run TypeScript type checking |
| `npm run clean` | Remove build artifacts |

---

## 🎨 Customization

### Environment Variables

Create a `.env.local` file in the root directory:

```env
GEMINI_API_KEY=your_api_key_here
```

### Tailwind Configuration

The project uses Tailwind CSS v4 with the Vite plugin. Styles are defined in [`src/index.css`](src/index.css).

---

## 📱 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

---

## 📄 License

This project is private and confidential. All rights reserved.

---

## 🤝 Contact

For questions or inquiries, please contact the development team.

---

<div align="center">

**Built with ❤️ using React & Tailwind CSS**

</div>
