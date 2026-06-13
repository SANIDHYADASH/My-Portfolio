import { Sparkles, Palette, Smartphone, Zap, MousePointerClick, FolderKanban, Mail, Search, Layers, Route } from "lucide-react";

export const getPortfolioDocumentation = () => ({
  title: "Sanidhya Dash — Software Engineer Portfolio",
  description:
    "A modern, fully responsive personal portfolio website showcasing my journey as a Software Engineer — built with React, TypeScript, Tailwind CSS, and shadcn/ui, with smooth animations, dark/light theme support, and dedicated project documentation pages.",

  features: [
    {
      title: "Modern UI/UX",
      description:
        "Clean, professional design with smooth scroll-triggered animations, gradient accents, and engaging hover effects across every section.",
      icon: <Sparkles className="h-5 w-5 text-primary" />,
    },
    {
      title: "Dual Theme",
      description:
        "Dark and light mode support with seamless transitions powered by next-themes and HSL-based design tokens.",
      icon: <Palette className="h-5 w-5 text-primary" />,
    },
    {
      title: "Fully Responsive",
      description:
        "Optimized layouts for mobile, tablet, and desktop devices using Tailwind's responsive utilities and adaptive components.",
      icon: <Smartphone className="h-5 w-5 text-primary" />,
    },
    {
      title: "Performance Optimized",
      description:
        "Fast loading via Vite, lazy loading, code splitting, tree shaking, and a session-based loading screen that shows only once per session.",
      icon: <Zap className="h-5 w-5 text-primary" />,
    },
    {
      title: "Interactive Hero",
      description:
        "Animated typing effect, floating gradient orbs, social media links, CTA buttons, and an animated scroll indicator.",
      icon: <MousePointerClick className="h-5 w-5 text-primary" />,
    },
    {
      title: "Project Showcase",
      description:
        "Featured projects in an Embla carousel on the home page plus a full grid on /projects, each with its own detailed documentation page.",
      icon: <FolderKanban className="h-5 w-5 text-primary" />,
    },
    {
      title: "Contact Integration",
      description:
        "Contact form with name, email and message fields that opens the user's default email client with pre-filled content, plus toast feedback via Sonner.",
      icon: <Mail className="h-5 w-5 text-primary" />,
    },
    {
      title: "SEO Optimized",
      description:
        "Proper meta tags, semantic HTML structure, single H1 per page, and accessible navigation.",
      icon: <Search className="h-5 w-5 text-primary" />,
    },
    {
      title: "Design System",
      description:
        "HSL-based semantic color tokens, shared gradient and shadow utilities, and shadcn/ui component variants for a consistent look across themes.",
      icon: <Layers className="h-5 w-5 text-primary" />,
    },
    {
      title: "Smart Routing",
      description:
        "React Router with hash-based section navigation on the home page and dedicated routes for /projects and /projects/:projectId.",
      icon: <Route className="h-5 w-5 text-primary" />,
    },
  ],

  techStack: [
    { category: "Frontend", name: "React", version: "18.3.1", purpose: "UI library for building components" },
    { category: "Frontend", name: "TypeScript", version: "5.0+", purpose: "Type-safe JavaScript" },
    { category: "Build", name: "Vite", version: "Latest", purpose: "Fast build tool and dev server" },
    { category: "Styling", name: "Tailwind CSS", version: "3.4+", purpose: "Utility-first CSS framework" },
    { category: "UI", name: "shadcn/ui", version: "Latest", purpose: "Pre-built accessible UI components" },
    { category: "UI", name: "Radix UI", version: "Latest", purpose: "Unstyled accessible primitives" },
    { category: "UI", name: "Lucide React", version: "Latest", purpose: "Modern icon library" },
    { category: "UI", name: "Embla Carousel", version: "Latest", purpose: "Touch-friendly project carousel" },
    { category: "Routing", name: "React Router DOM", version: "v6", purpose: "Client-side routing" },
    { category: "Forms", name: "React Hook Form + Zod", version: "Latest", purpose: "Form state and schema validation" },
    { category: "Data", name: "TanStack Query", version: "Latest", purpose: "Data fetching and caching" },
    { category: "Theme", name: "next-themes", version: "Latest", purpose: "Dark/light theme management" },
    { category: "UX", name: "Sonner", version: "Latest", purpose: "Toast notifications" },
    { category: "Tooling", name: "ESLint + PostCSS + Autoprefixer", version: "Latest", purpose: "Linting and CSS processing" },
  ],

  architecture: {
    description:
      "A client-side React single-page application bootstrapped with Vite. Providers (Theme, QueryClient, Tooltip, Router) wrap the app, a session-based loading screen runs once per session, and React Router serves the home page, the All Projects grid, and dynamic Project Detail pages driven by a documentation data layer.",
    diagram: `┌──────────────────────────────────────────────────────────┐
│                       Browser (SPA)                      │
│         React 18 + TypeScript + Vite + Tailwind          │
└──────────────────────────┬───────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────┐
│                     App Providers                        │
│  ThemeProvider → QueryClientProvider → TooltipProvider   │
│                  → BrowserRouter                         │
│                       │                                  │
│            LoadingScreen (session-based)                 │
└──────────────────────────┬───────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────┐
│                         Routes                           │
│                                                          │
│   /                    → Index (Home)                    │
│     Navigation · Hero · About · Skills · Education       │
│     · Experience · Projects · Contact · Footer           │
│                                                          │
│   /projects            → AllProjects (grid)              │
│   /projects/:projectId → ProjectDetail (docs)            │
│   *                    → NotFound                        │
└──────────────────────────┬───────────────────────────────┘
                           │
                           ▼
              Project docs data layer
       (flink · founderconnect · musical · splitmate
        · smartbook · portfolio)`,
  },

  dataModel: [
    {
      title: "Directory Structure",
      description: "Top-level layout of the src/ directory.",
      code: `src/
├── assets/                # Static assets (images, icons)
├── components/
│   ├── ui/                # shadcn/ui components
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Skills.tsx
│   ├── Education.tsx
│   ├── Experience.tsx
│   ├── Projects.tsx
│   ├── Contact.tsx
│   ├── Footer.tsx
│   ├── LoadingScreen.tsx
│   └── ProjectDocumentation.tsx
├── data/                  # Per-project documentation data
├── pages/
│   ├── Index.tsx
│   ├── AllProjects.tsx
│   ├── ProjectDetail.tsx
│   └── NotFound.tsx
├── hooks/                 # Custom React hooks
├── lib/utils.ts           # Utility helpers (cn, etc.)
└── main.tsx               # App entry`,
    },
    {
      title: "Project Documentation Shape",
      description: "Each featured project exports a typed documentation object consumed by ProjectDetail.",
      code: `type ProjectDoc = {
  title: string;
  description: string;
  features: { title: string; description: string; icon: ReactNode }[];
  techStack: { category: string; name: string; version: string; purpose: string }[];
  architecture: { description: string; diagram: string };
  dataModel: { title: string; description: string; code: string }[];
  security?: string[];
  installation: string[];
  usageGuide: { title: string; steps: string[] }[];
};`,
    },
    {
      title: "Design Tokens (HSL)",
      description: "Semantic color tokens defined in index.css for both light and dark modes.",
      code: `:root {
  --primary:   190 95% 55%;  /* Cyan Blue */
  --secondary: 260 60% 55%;  /* Purple    */
  --accent:    290 70% 60%;  /* Magenta   */
  --radius:    0.75rem;      /* 12px base */
}

/* Used as: bg-primary, text-secondary, border-accent, etc. */`,
    },
  ],

  installation: [
    "Clone the repository from GitHub (SANIDHYADASH/My-Portfolio)",
    "Install dependencies using npm install (or pnpm/yarn/bun)",
    "Start the dev server with npm run dev",
    "Open http://localhost:8080 (or the port Vite reports)",
    "Build for production with npm run build",
    "Preview the production build with npm run preview",
  ],

  usageGuide: [
    {
      title: "Updating Personal Info",
      steps: [
        "Edit src/components/Hero.tsx to change the headline and tagline",
        "Edit src/components/About.tsx to update bio and highlight cards",
        "Update social links (GitHub, LinkedIn, Email) in Hero and Footer",
        "Swap the profile photo in src/assets/",
      ],
    },
    {
      title: "Adding Skills, Education & Experience",
      steps: [
        "Update the skills arrays in src/components/Skills.tsx by category",
        "Add new entries to src/components/Education.tsx at the top of the array",
        "Add new roles to src/components/Experience.tsx with logo, dates, and tags",
      ],
    },
    {
      title: "Adding a New Project",
      steps: [
        "Create src/data/<project>-docs.tsx exporting a get<Project>Documentation() function",
        "Add the project entry to src/components/Projects.tsx (home carousel)",
        "Add the project entry to src/pages/AllProjects.tsx (full grid)",
        "Register the project in src/pages/ProjectDetail.tsx (projectsData + getDocumentation switch)",
      ],
    },
    {
      title: "Theming & Design System",
      steps: [
        "Adjust HSL color tokens in src/index.css for both :root and .dark",
        "Extend Tailwind tokens in tailwind.config.ts when adding new colors",
        "Prefer semantic classes (bg-primary, text-foreground) over raw colors",
        "Use shadcn/ui variants instead of overriding components inline",
      ],
    },
    {
      title: "Deployment",
      steps: [
        "Deploy to Vercel via the Vercel CLI or Git integration (vercel.json is included)",
        "Or build with npm run build and deploy the dist/ folder to any static host",
        "Configure a custom domain (e.g., sanidhya.in) in the hosting provider",
      ],
    },
  ],
});
