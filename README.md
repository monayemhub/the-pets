# The Pets 🐾

A modern, responsive web application showcasing cute and playful pet companions. Discover adorable cats, their unique personalities, favorite activities, and lovable traits.

### [Live link](https://the-pets.vercel.app/)

## ✨ Features

- **Responsive Pet Showcase**: Clean and modern grid layout displaying pet profiles that adapts seamlessly across mobile, tablet, and desktop screens.
- **Interactive Pet Cards**: Smooth hover effects with gentle elevation, scale, and drop shadows for an engaging user experience.
- **Detailed Profiles**: Each pet card highlights photos, descriptions, and skill/personality badges (e.g., napping, climbing, cuddling).
- **Optimized Media**: Next.js Image optimization with placeholders and remote image support via Unsplash.
- **Custom Typography & Branding**: Styled using the friendly [Fredoka](https://fonts.google.com/specimen/Fredoka) font and custom paw branding.
- **Modern React Stack**: Powered by React 19 with the experimental React Compiler enabled for optimal re-rendering performance.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16](https://nextjs.org/) (App Router)
- **Library**: [React 19](https://react.dev/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Compiler**: React Compiler (`babel-plugin-react-compiler`)
- **Linting**: [ESLint](https://eslint.org/)

## 📁 Project Structure

```text
the-pets/
├── public/                # Static assets (logo, icons, etc.)
├── src/
│   ├── app/
│   │   ├── globals.css    # Global CSS & Tailwind imports
│   │   ├── layout.tsx     # Root layout & SEO metadata
│   │   ├── page.tsx       # Main home page component
│   │   └── ui/
│   │       └── cat-card.tsx # Reusable CatCard component
│   ├── data/
│   │   └── cat-data.ts    # Pet catalog data
│   └── types/
│       └── cat.ts         # TypeScript interface for Cat entities
├── next.config.ts         # Next.js configuration (images, React Compiler)
├── package.json           # Scripts and dependencies
├── tsconfig.json          # TypeScript configuration
└── README.md
```

## 🚀 Getting Started

### Prerequisites

Ensure you have [Node.js](https://nodejs.org/) (version 18.17.0 or higher recommended) and `npm` installed.

### Installation

1. Clone the repository and navigate to the project directory:

   ```bash
   cd the-pets
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

### Running Locally

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the application.

## 📜 Available Scripts

In the project directory, you can run:

| Command         | Description                                            |
| :-------------- | :----------------------------------------------------- |
| `npm run dev`   | Starts the Next.js development server with Turbopack   |
| `npm run build` | Compiles and builds the production application         |
| `npm run start` | Runs the compiled production server                    |
| `npm run lint`  | Runs ESLint to check for code quality and style issues |

## 👤 Author

**Monayem Kabir Khan**

## 📄 License

This project is private and intended for personal/showcase use.
