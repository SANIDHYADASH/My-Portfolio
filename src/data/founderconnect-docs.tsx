import { Users, Briefcase, Shield, MessageSquare, TrendingUp, Search, FileText, Lock } from "lucide-react";

export const getFounderConnectDocumentation = () => ({
  title: "FounderConnect",
  description: "A web platform designed to connect startup founders with technical co-founders, facilitating the process of finding the right technical partner.",
  
  features: [
    {
      title: "Post Startup Ideas",
      description: "Founders can share their startup vision with detailed descriptions, equity ranges, and required skills",
      icon: <Briefcase className="h-5 w-5 text-primary" />,
    },
    {
      title: "Browse Opportunities",
      description: "Developers can explore available startup ideas and find projects that match their skills",
      icon: <Search className="h-5 w-5 text-primary" />,
    },
    {
      title: "Easy Application",
      description: "Apply to interesting projects with your proposal, equity request, and salary expectations",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      title: "Manage Applications",
      description: "Founders can review and respond to developer applications with acceptance or rejection",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      title: "Equity & Compensation",
      description: "Set clear expectations for equity shares and compensation from the start",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
    },
    {
      title: "Professional Profiles",
      description: "Showcase GitHub and LinkedIn profiles to establish credibility",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      title: "Application Tracking",
      description: "Monitor the status of your applications (pending, accepted, rejected)",
      icon: <TrendingUp className="h-5 w-5 text-primary" />,
    },
    {
      title: "Role-Based Access",
      description: "Different views and functionalities for founders and developers",
      icon: <Shield className="h-5 w-5 text-primary" />,
    },
  ],

  techStack: [
    { category: "Frontend", name: "React.js", version: "18+", purpose: "Modern UI framework with hooks" },
    { category: "Frontend", name: "TypeScript", version: "Latest", purpose: "Type-safe development" },
    { category: "Frontend", name: "Tailwind CSS", version: "Latest", purpose: "Utility-first CSS framework" },
    { category: "Frontend", name: "Vite", version: "Latest", purpose: "Fast build tool and dev server" },
    { category: "Frontend", name: "Lucide React", version: "Latest", purpose: "Icon library" },
    { category: "Backend", name: "Firebase Auth", version: "Latest", purpose: "Authentication and user management" },
    { category: "Backend", name: "Firebase Firestore", version: "Latest", purpose: "NoSQL database for data storage" },
    { category: "State Management", name: "React Context API", version: "Built-in", purpose: "Global state management" },
    { category: "Form Handling", name: "React Hook Form", version: "Latest", purpose: "Form validation and handling" },
  ],

  architecture: {
    description: "FounderConnect uses a component-based architecture with Firebase as the backend. Authentication is handled by Firebase Auth with role-based access control. Firestore provides real-time data synchronization for startup ideas and applications.",
    diagram: `src/
├── components/
│   ├── Navbar.tsx            # Navigation component
│   └── ProtectedRoute.tsx    # Route protection wrapper
├── contexts/
│   └── AuthContext.tsx       # Authentication state management
├── lib/
│   └── firebase.ts           # Firebase configuration
├── pages/
│   ├── BrowseIdeas.tsx       # Developer view of ideas
│   ├── Dashboard.tsx         # User dashboard
│   ├── Home.tsx              # Landing page
│   ├── Login.tsx             # Login page
│   ├── PostIdea.tsx          # Founder posts ideas
│   ├── Profile.tsx           # User profile
│   └── Register.tsx          # Registration page
└── types/
    └── index.ts              # TypeScript type definitions`,
  },

  dataModel: [
    {
      title: "User Model",
      description: "User authentication and profile information with role-based access",
      code: `type UserRole = 'founder' | 'developer';

interface User {
  uid: string;
  email: string;
  role: UserRole;
  name: string;
  githubProfile?: string;
  linkedinProfile?: string;
  whatsappNumber?: string;
}`,
    },
    {
      title: "Startup Idea Model",
      description: "Startup idea posted by founders",
      code: `interface StartupIdea {
  id: string;
  founderId: string;
  title: string;
  description: string;
  equityRange: string;
  salaryRange: string;
  skills: string[];
  createdAt: Date;
}`,
    },
    {
      title: "Application Model",
      description: "Developer applications to startup ideas",
      code: `interface Application {
  id: string;
  ideaId: string;
  developerId: string;
  proposal: string;
  equityRequest: string;
  salaryRequest: string;
  status: 'pending' | 'accepted' | 'rejected';
  rejectionReason?: string;
  createdAt: Date;
}`,
    },
  ],

  security: [
    "Firebase Authentication for secure user management",
    "Protected routes using React Router",
    "Role-based access control (Founder/Developer)",
    "Secure data access patterns in Firestore",
    "Email/password authentication with Firebase Auth",
    "Automatic session management",
    "Data validation on client and server side",
  ],

  installation: [
    "Clone the repository from GitHub",
    "Install dependencies using npm or yarn",
    "Create a Firebase project",
    "Enable Authentication and Firestore in Firebase console",
    "Copy Firebase configuration to src/lib/firebase.ts",
    "Start the development server",
  ],

  usageGuide: [
    {
      title: "For Founders",
      steps: [
        "Register as a founder",
        "Create your profile with contact information",
        "Post startup ideas with detailed descriptions",
        "Set equity ranges and compensation expectations",
        "Review developer applications",
        "Accept or reject applications with reasons",
        "Connect with selected developers",
      ],
    },
    {
      title: "For Developers",
      steps: [
        "Register as a developer",
        "Add GitHub and LinkedIn profiles",
        "Browse available startup ideas",
        "Filter by skills and requirements",
        "Apply with detailed proposals",
        "Set equity and salary expectations",
        "Track application status",
      ],
    },
  ],
});
