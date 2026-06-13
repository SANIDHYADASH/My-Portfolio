import { Users, Receipt, Calculator, FileText, Shield, Share2, Wallet, Activity, Lock, PieChart } from "lucide-react";

export const getSplitMateDocumentation = () => ({
  title: "SplitMate — Group Expense Splitting Application",
  description: "A full-stack web application for splitting expenses among friends and groups. Built with React, TypeScript, Tailwind CSS, and Supabase.",

  features: [
    {
      title: "Expense Groups",
      description: "Create groups and invite friends with a simple 4-digit join code",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      title: "Expense Management",
      description: "Add, edit, and delete expenses with categories and custom date selection",
      icon: <Receipt className="h-5 w-5 text-primary" />,
    },
    {
      title: "Smart Settlements",
      description: "Greedy settlement algorithm minimizes the number of transactions needed to settle all debts",
      icon: <Calculator className="h-5 w-5 text-primary" />,
    },
    {
      title: "Budgets & Income",
      description: "Create personal or group budgets, track income, and set spending caps",
      icon: <Wallet className="h-5 w-5 text-primary" />,
    },
    {
      title: "Activity Log",
      description: "Full audit trail of every change — group, expense, member, and settlement events",
      icon: <Activity className="h-5 w-5 text-primary" />,
    },
    {
      title: "PDF Export",
      description: "Export expense reports and dedicated budget reports as PDFs",
      icon: <FileText className="h-5 w-5 text-primary" />,
    },
    {
      title: "Public Shared View",
      description: "Share read-only expense summaries via a code + password protected public link",
      icon: <Share2 className="h-5 w-5 text-primary" />,
    },
    {
      title: "Filter, Search & Sort",
      description: "Consolidated filter UI with type, member, sort, and date-range filtering",
      icon: <PieChart className="h-5 w-5 text-primary" />,
    },
  ],

  techStack: [
    { category: "Frontend", name: "React", version: "18", purpose: "UI framework with hooks" },
    { category: "Frontend", name: "TypeScript", version: "Latest", purpose: "Type-safe development" },
    { category: "Frontend", name: "Vite", version: "Latest", purpose: "Fast build tool and dev server" },
    { category: "Styling", name: "Tailwind CSS", version: "Latest", purpose: "Utility-first CSS framework" },
    { category: "Styling", name: "shadcn/ui", version: "Latest", purpose: "Accessible component library" },
    { category: "State", name: "TanStack React Query", version: "Latest", purpose: "Server state & caching" },
    { category: "Routing", name: "React Router", version: "v6", purpose: "Client-side routing" },
    { category: "Backend", name: "Supabase", version: "Latest", purpose: "PostgreSQL + Auth + Edge Functions" },
    { category: "PDF", name: "jsPDF + jspdf-autotable", version: "Latest", purpose: "PDF report generation" },
  ],

  architecture: {
    description: "SplitMate uses a Supabase backend that exposes business logic through Edge Functions (REST APIs) consumable by both the web app and native mobile clients. PostgreSQL stores groups, members, expenses, settlements, budgets, income entries, and activity logs. Supabase Auth handles email/password signup and JWT session management. Row Level Security policies enforce access control at the database layer.",
    diagram: `┌──────────────────────────────────────────────────────────┐
│                        CLIENTS                           │
│   React Web App   │   Mobile Apps   │   Public Share UI  │
└──────────┬─────────────────┬────────────────┬────────────┘
           │                 │                │
           ▼                 ▼                ▼
┌──────────────────────────────────────────────────────────┐
│                    SUPABASE BACKEND                      │
│                                                          │
│   Edge Functions (REST API)                              │
│   ─ api-groups        ─ api-expenses     ─ api-members   │
│   ─ api-settlements   ─ api-activity     ─ api-share     │
│   ─ api-shared-view (PUBLIC)                             │
│                                                          │
│   PostgreSQL Database                                    │
│   expense_groups │ group_members │ expenses              │
│   settlements    │ activity_log  │ profiles              │
│   budgets        │ income_entries                        │
│                                                          │
│   Supabase Auth — Email/Password + JWT                   │
└──────────────────────────────────────────────────────────┘`,
  },

  dataModel: [
    {
      title: "expense_groups",
      description: "Groups that contain members, expenses, and budgets",
      code: `CREATE TABLE expense_groups (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  code text NOT NULL UNIQUE,        -- 4-digit join code
  created_by uuid REFERENCES auth.users(id),
  sharing_enabled boolean DEFAULT false,
  share_password_hash text,
  created_at timestamptz DEFAULT now(),
  updated_at timestamptz DEFAULT now()
);`,
    },
    {
      title: "expenses",
      description: "Individual expenses inside a group with split tracking",
      code: `CREATE TABLE expenses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  group_id uuid REFERENCES expense_groups(id) ON DELETE CASCADE,
  description text,
  amount numeric NOT NULL,
  paid_by uuid REFERENCES group_members(id),
  split_among uuid[] NOT NULL,
  category text,
  created_at timestamptz DEFAULT now()
);`,
    },
    {
      title: "budgets & income_entries",
      description: "Personal or group budgets with linked income records",
      code: `CREATE TABLE budgets (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  group_id uuid REFERENCES expense_groups(id),
  name text NOT NULL,
  cap_amount numeric,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE income_entries (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  budget_id uuid REFERENCES budgets(id) ON DELETE CASCADE,
  amount numeric NOT NULL,
  source text,
  created_at timestamptz DEFAULT now()
);`,
    },
    {
      title: "Settlement Algorithm",
      description: "Greedy approach that minimizes the number of transactions",
      code: `// 1. Compute each member's net balance (paid - owed)
// 2. Sort creditors (positive) and debtors (negative)
// 3. Match the largest debtor with the largest creditor
// 4. Transfer = min(|debtor.balance|, creditor.balance)
// 5. Adjust balances; advance pointer when a balance hits 0
// 6. Repeat until all balances are settled
//
// Example — Alice (+30), Bob (-20), Charlie (-10):
//   Bob     → Alice : 20
//   Charlie → Alice : 10`,
    },
  ],

  security: [
    "Supabase Auth with email/password and JWT session management",
    "Row Level Security (RLS) policies on every table",
    "Creator-only policies for destructive group/member operations",
    "Public shared view gated by group code + password hash",
    "Edge Functions validate ownership before mutating data",
    "Client and server-side input validation",
    "Automatic token refresh and secure session storage",
  ],

  installation: [
    "Clone the repository from GitHub",
    "Install dependencies using npm or bun",
    "Create a Supabase project and copy the URL + anon key",
    "Run the SQL migrations to create tables, policies, and triggers",
    "Deploy the Edge Functions (api-groups, api-expenses, api-members, api-settlements, api-activity, api-share-settings, api-shared-view)",
    "Configure environment variables (.env)",
    "Start the development server",
  ],

  usageGuide: [
    {
      title: "Creating & Joining Groups",
      steps: [
        "Sign up with email and password",
        "Create a new group — a 4-digit join code is generated",
        "Share the code with friends so they can join",
        "Manage member names and remove members (creator only)",
      ],
    },
    {
      title: "Tracking Expenses & Settling Up",
      steps: [
        "Add expenses with amount, payer, split members, category, and date",
        "View real-time balances per member (green = owed, red = owes)",
        "Run the settlement algorithm to see the minimum set of transactions",
        "Export the full expense report as a PDF",
      ],
    },
    {
      title: "Budgets",
      steps: [
        "Create a personal or group budget with an optional spending cap",
        "Add income entries to track inflows",
        "Filter and search budgets by type, member, date range, and sort order",
        "Export a dedicated budget report PDF",
      ],
    },
    {
      title: "Sharing",
      steps: [
        "Enable sharing on a group (creator only) and set a password",
        "Share the public link with anyone — no account required",
        "Viewers enter the code and password for read-only access",
      ],
    },
  ],
});
