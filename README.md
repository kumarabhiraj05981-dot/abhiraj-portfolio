# Abhiraj Kumar — Advanced Portfolio

Premium React + Vite portfolio with a client-side Admin Studio.

## Features
- Modern dark/glassmorphism UI
- Animated hero, grid background, floating code card and scroll reveal
- Responsive navigation
- Projects, skills, education and profile sections
- Contact form that stores messages in browser localStorage
- Admin Studio at `#/admin`
- Edit profile, projects, skills and education without changing component code
- Reset portfolio data to defaults
- Data is stored in `localStorage`

## Run
```bash
npm install
npm run dev
```

## Admin
Open:
`http://localhost:5173/#/admin`

This admin is intentionally frontend/localStorage based. It is suitable for a personal/demo portfolio, but it is **not secure for production** because there is no server-side authentication or database.

For a production admin panel, connect the same UI to a backend such as Node/Express + MongoDB and add authentication/session/JWT protection.

## Main files
- `src/data.js` — portfolio data + localStorage persistence
- `src/components/Admin.jsx` — admin dashboard
- `src/components/Hero.jsx` — hero section
- `src/components/Projects.jsx` — project cards
- `src/components/Contact.jsx` — contact form
- `src/App.css` — portfolio + admin styling
