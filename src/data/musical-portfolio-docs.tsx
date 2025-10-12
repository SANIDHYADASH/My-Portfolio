import { Music, Ticket, QrCode, Shield, Users, BarChart3, Calendar, FileText, Lock, Globe } from "lucide-react";

export const getMusicalPortfolioDocumentation = () => ({
  title: "Musical Artist Portfolio Platform",
  description: "A comprehensive full-stack web application for artist to showcase their work, manage events, and handle ticket sales with advanced QR code verification system.",
  
  features: [
    {
      title: "Hero Section",
      description: "Dynamic landing page with animated elements and artist branding",
      icon: <Music className="h-5 w-5 text-primary" />,
    },
    {
      title: "Show Management",
      description: "Create, edit, and manage live performances with venue details and capacity tracking",
      icon: <Calendar className="h-5 w-5 text-primary" />,
    },
    {
      title: "Ticket Booking",
      description: "Real-time booking system with customer information collection and price calculation",
      icon: <Ticket className="h-5 w-5 text-primary" />,
    },
    {
      title: "QR Code Generation",
      description: "Automatic PDF ticket generation with embedded QR codes for verification",
      icon: <QrCode className="h-5 w-5 text-primary" />,
    },
    {
      title: "Ticket Verification",
      description: "Dual verification methods - QR scanner and manual code entry with anti-fraud protection",
      icon: <Shield className="h-5 w-5 text-primary" />,
    },
    {
      title: "Admin Dashboard",
      description: "Multi-tab interface for shows, bookings, announcements, and YouTube content management",
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
    },
    {
      title: "Authentication",
      description: "Secure Supabase authentication with role-based permissions for admin access",
      icon: <Lock className="h-5 w-5 text-primary" />,
    },
    {
      title: "Social Integration",
      description: "YouTube Shorts feed display and Tawk.to live chat integration",
      icon: <Globe className="h-5 w-5 text-primary" />,
    },
    {
      title: "Contact Management",
      description: "Direct contact form and live chat for fan engagement",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
  ],

  techStack: [
    { category: "Frontend", name: "React", version: "18.3.1", purpose: "Modern React with hooks and concurrent features" },
    { category: "Frontend", name: "TypeScript", version: "5.8.3", purpose: "Type-safe development environment" },
    { category: "Frontend", name: "Vite", version: "5.4.19", purpose: "Lightning-fast build tool and dev server" },
    { category: "Frontend", name: "Tailwind CSS", version: "3.4.17", purpose: "Utility-first CSS framework" },
    { category: "Frontend", name: "shadcn/ui", version: "Latest", purpose: "Modern React component library" },
    { category: "Frontend", name: "Lucide React", version: "Latest", purpose: "Beautiful, customizable icons" },
    { category: "Backend", name: "Supabase", version: "Latest", purpose: "PostgreSQL database and authentication" },
    { category: "Backend", name: "PostgreSQL", version: "Latest", purpose: "Relational database via Supabase" },
    { category: "Backend", name: "Supabase Storage", version: "Latest", purpose: "File uploads for show images" },
    { category: "Backend", name: "Row Level Security", version: "Built-in", purpose: "Database-level access control" },
    { category: "State Management", name: "React Query", version: "5.83.0", purpose: "Server state management" },
    { category: "Forms", name: "React Hook Form", version: "7.63.0", purpose: "Form handling and validation" },
    { category: "Validation", name: "Zod", version: "4.1.11", purpose: "Runtime type validation" },
    { category: "PDF", name: "jsPDF", version: "3.0.3", purpose: "PDF ticket generation" },
    { category: "QR Code", name: "qrcode", version: "1.5.4", purpose: "QR code generation" },
    { category: "QR Scanner", name: "react-qr-reader", version: "3.0.0", purpose: "QR code scanning" },
    { category: "Utilities", name: "date-fns", version: "2.30.0", purpose: "Date manipulation and formatting" },
  ],

  architecture: {
    description: "The platform follows a unidirectional data flow pattern with React Query for server state and React hooks for local state. Supabase handles authentication, database, and storage with real-time subscriptions for live updates.",
    diagram: `src/
├── components/
│   ├── ui/                    # Reusable UI components (shadcn/ui)
│   ├── admin/                 # Admin-specific components
│   ├── Header.tsx             # Navigation header
│   ├── Hero.tsx               # Landing page hero section
│   ├── Shows.tsx              # Show display component
│   ├── Contact.tsx            # Contact form
│   └── ...                    # Other feature components
├── pages/                     # Route-level page components
├── hooks/                     # Custom React hooks
├── lib/                       # Utility functions and services
├── integrations/              # External service integrations
└── types/                     # TypeScript type definitions`,
  },

  dataModel: [
    {
      title: "shows Table",
      description: "Store show information including venue, dates, pricing, and capacity",
      code: `CREATE TABLE shows (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title VARCHAR NOT NULL,
  venue VARCHAR NOT NULL,
  location VARCHAR NOT NULL,
  show_date DATE NOT NULL,
  show_time TIME NOT NULL,
  ticket_price DECIMAL(10,2) NOT NULL,
  available_tickets INTEGER NOT NULL,
  max_capacity INTEGER NOT NULL,
  status VARCHAR DEFAULT 'upcoming',
  image_url TEXT,
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`,
    },
    {
      title: "bookings Table",
      description: "Store ticket bookings with customer information and verification codes",
      code: `CREATE TABLE bookings (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  show_id UUID REFERENCES shows(id),
  customer_name VARCHAR NOT NULL,
  customer_email VARCHAR NOT NULL,
  customer_phone VARCHAR,
  tickets_count INTEGER NOT NULL,
  total_amount DECIMAL(10,2) NOT NULL,
  verification_code VARCHAR(6) NOT NULL,
  booking_status VARCHAR DEFAULT 'confirmed',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`,
    },
    {
      title: "profiles Table",
      description: "User profiles with role management for admin access",
      code: `CREATE TABLE profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id),
  user_id UUID REFERENCES auth.users(id),
  full_name VARCHAR,
  role VARCHAR DEFAULT 'user',
  created_at TIMESTAMP WITH TIME ZONE DEFAULT NOW(),
  updated_at TIMESTAMP WITH TIME ZONE DEFAULT NOW()
);`,
    },
  ],

  security: [
    "Supabase Authentication with email/password",
    "Role-based permissions (User and Admin roles)",
    "Persistent login with automatic token refresh",
    "Protected routes with route-level security",
    "Row Level Security (RLS) policies on all tables",
    "Anti-fraud protection in ticket verification",
    "Prevents double-scanning of tickets",
    "Complete audit trail of ticket usage",
    "Secure file uploads for show images",
    "Input validation with Zod schemas",
  ],

  installation: [
    "Clone the repository from GitHub",
    "Install dependencies using npm",
    "Create a Supabase account and new project",
    "Run database migration scripts",
    "Enable Row Level Security (RLS)",
    "Set up authentication providers",
    "Configure environment variables",
    "Start the development server",
  ],

  usageGuide: [
    {
      title: "For Users",
      steps: [
        "Browse upcoming shows on the homepage",
        "Click 'Book Tickets' on desired show",
        "Fill in personal information",
        "Select number of tickets",
        "Complete booking process",
        "Download PDF ticket with QR code",
        "Present ticket at venue for verification",
      ],
    },
    {
      title: "For Administrators",
      steps: [
        "Login to admin dashboard",
        "Create and manage shows",
        "Set ticket prices and capacity",
        "Upload show images",
        "View and manage bookings",
        "Track verification status",
        "Monitor sales statistics",
        "Manage announcements and content",
      ],
    },
    {
      title: "For Venue Staff",
      steps: [
        "Open verification page",
        "Use QR scanner or manual entry",
        "Scan customer's QR code",
        "Verify ticket validity",
        "Grant or deny entry",
        "View ticket details",
      ],
    },
  ],
});
