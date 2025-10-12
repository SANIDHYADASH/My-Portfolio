import { FileText, Lock, Clock, Search, BarChart3, Globe, Shield, Database, Code2 } from "lucide-react";
import architectureDiagram from "@/assets/architecture-flink.png";
import { useState } from "react";

export const getFlinkDocumentation = () => ({
  title: "Flink - The NextGen File and Text Sharing Platform",
  description: "A modern, secure, and responsive web application for sharing files and text snippets with others using simple 6-digit sharing codes.",
  
  features: [
    {
      title: "Secure Authentication",
      description: "Email/password authentication with Supabase Auth and automatic session management",
      icon: <Shield className="h-5 w-5 text-primary" />,
    },
    {
      title: "File Sharing",
      description: "Upload and share files with automatic 6-digit code generation. Supports all file types up to 10MB",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      title: "Rich Text Sharing",
      description: "Share formatted text with full WYSIWYG editor support including headers, lists, and code blocks",
      icon: <Code2 className="h-5 w-5 text-primary" />,
    },
    {
      title: "Password Protection",
      description: "Optional password protection for sensitive content with SHA256 encryption",
      icon: <Lock className="h-5 w-5 text-primary" />,
    },
    {
      title: "Expiration Control",
      description: "Set custom expiration dates (1, 3, 7, 14, 30 days) or never-expire options",
      icon: <Clock className="h-5 w-5 text-primary" />,
    },
    {
      title: "Search & Filter",
      description: "Easily find and manage your shared content with powerful search capabilities",
      icon: <Search className="h-5 w-5 text-primary" />,
    },
    {
      title: "Analytics",
      description: "Track download counts and access statistics for all your shares",
      icon: <BarChart3 className="h-5 w-5 text-primary" />,
    },
    {
      title: "Public Access",
      description: "Share content without requiring recipients to sign up or create accounts",
      icon: <Globe className="h-5 w-5 text-primary" />,
    },
  ],

  techStack: [
    { category: "Frontend", name: "React", version: "18.3.1", purpose: "UI Framework with hooks and concurrent features" },
    { category: "Frontend", name: "TypeScript", version: "5.5.3", purpose: "Type-safe development environment" },
    { category: "Frontend", name: "Tailwind CSS", version: "3.4.0", purpose: "Utility-first CSS framework for styling" },
    { category: "Frontend", name: "Vite", version: "5.4.2", purpose: "Fast development server and build tool" },
    { category: "Frontend", name: "React Router", version: "6.22.3", purpose: "Client-side routing and navigation" },
    { category: "Frontend", name: "Framer Motion", version: "11.0.8", purpose: "Smooth animations and transitions" },
    { category: "Frontend", name: "React Quill", version: "2.0.0", purpose: "WYSIWYG rich text editor" },
    { category: "Frontend", name: "Lucide React", version: "0.344.0", purpose: "Modern icon library" },
    { category: "Backend", name: "Supabase", version: "Latest", purpose: "Database, authentication, and storage backend" },
    { category: "Backend", name: "PostgreSQL", version: "Latest", purpose: "Relational database via Supabase" },
    { category: "Backend", name: "Supabase Storage", version: "Latest", purpose: "Secure file storage with access policies" },
  ],

  architecture: {
    description: "Flink follows a modern client-server architecture with Supabase as the backend. The frontend is built with React and TypeScript, using Vite for fast development. Authentication, database, and storage are all handled by Supabase, providing enterprise-grade security with Row Level Security (RLS) policies.",
    diagram: (() => {
      const [expanded, setExpanded] = useState(false);
      return (
        <>
          <img
            src={architectureDiagram}
            alt="Flink Architecture Diagram"
            className="w-full h-auto max-w-3xl mx-auto rounded-xl cursor-zoom-in"
            style={{ display: 'block' }}
            onClick={() => setExpanded(true)}
          />
          {expanded && (
            <div
              className="fixed inset-0 z-[9999] bg-black/80 flex items-center justify-center cursor-zoom-out"
              onClick={() => setExpanded(false)}
            >
              <img
                src={architectureDiagram}
                alt="Flink Architecture Diagram Fullscreen"
                className="max-w-full max-h-full rounded-2xl shadow-2xl"
                style={{ width: '90vw', height: 'auto', maxHeight: '90vh', objectFit: 'contain' }}
              />
            </div>
          )}
        </>
      );
    })(),
  },

  dataModel: [
    {
      title: "shares Table",
      description: "The core table that stores all shared files and text content with access control",
      code: `CREATE TABLE shares (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
  type text NOT NULL CHECK (type IN ('file', 'text')),
  name text NOT NULL,
  title text,
  content text NOT NULL,
  file_type text,
  file_size bigint,
  access_code text NOT NULL UNIQUE,
  has_password boolean DEFAULT false,
  password_hash text,
  expires_at timestamptz,
  created_at timestamptz DEFAULT now(),
  download_count integer DEFAULT 0,
  file_path text
);`,
    },
    {
      title: "TypeScript Interface",
      description: "Type-safe data model for shares",
      code: `interface ShareItem {
  id: string;
  userId: string;
  type: 'file' | 'text';
  name: string;
  title?: string;
  content: string;
  fileType?: string;
  size?: number;
  accessCode: string;
  hasPassword: boolean;
  password?: string;
  expiresAt: string;
  createdAt: string;
  downloadCount: number;
  filePath?: string;
}`,
    },
  ],

  security: [
    "Industry-standard Supabase Auth with email/password authentication",
    "Automatic session management with token refresh and validation",
    "Protected routes with route-level authentication guards",
    "Row Level Security (RLS) at the database level for access control",
    "SHA256 encryption for password-protected shares",
    "Secure file storage with Supabase Storage and proper access policies",
    "Client and server-side input validation",
    "User isolation - users can only access their own shares",
    "Controlled public access via unique access codes",
    "Automatic content expiration management",
    "Download tracking and access pattern monitoring",
  ],

  installation: [
    "Clone the repository from GitHub",
    "Install dependencies using npm or yarn",
    "Create a Supabase account and new project",
    "Copy your Supabase project URL and anon key",
    "Run the database migration scripts in Supabase SQL editor",
    "Configure environment variables (.env file)",
    "Start the development server",
  ],

  usageGuide: [
    {
      title: "For Users",
      steps: [
        "Create an account with email and password",
        "Upload files or create rich text snippets",
        "Add optional password protection",
        "Set expiration date or choose never expire",
        "Get a unique 6-digit access code",
        "Share the code with recipients",
        "Track downloads and access statistics",
      ],
    },
    {
      title: "For Recipients",
      steps: [
        "No account required to access content",
        "Enter the 6-digit access code",
        "Provide password if content is protected",
        "View text content or download files",
        "Content automatically expires based on settings",
      ],
    },
  ],
});
