import { Building2, Receipt, Boxes, Users, FileBarChart, CreditCard, Shield, Database, ScrollText, Share2 } from "lucide-react";

export const getSmartBookDocumentation = () => ({
  title: "SmartBooks — Accounting, Inventory & Invoicing Platform",
  description:
    "A multi-tenant, full-featured invoicing and accounting SaaS built for Indian businesses with GST compliance, multi-company support, role-based access, Razorpay payments, and a rich set of business reports.",

  features: [
    {
      title: "GST-Compliant Invoicing",
      description:
        "Create sale, purchase, sale-return (credit note) and purchase-return (debit note) invoices with automatic CGST/SGST/IGST calculations across all GST rates (0/5/12/18/28%).",
      icon: <Receipt className="h-5 w-5 text-primary" />,
    },
    {
      title: "Multi-Company Support",
      description:
        "Manage multiple businesses under a single account with full data isolation enforced by Row Level Security at the database layer.",
      icon: <Building2 className="h-5 w-5 text-primary" />,
    },
    {
      title: "Inventory Management",
      description:
        "Track products and services with dual-unit support (e.g., 1 box = 12 pcs), stock movement, categories, and low-stock alerts.",
      icon: <Boxes className="h-5 w-5 text-primary" />,
    },
    {
      title: "Party Management",
      description:
        "Customer and supplier directory with GSTIN validation, opening balances, credit limits, and per-party ledgers.",
      icon: <Users className="h-5 w-5 text-primary" />,
    },
    {
      title: "Payments & Outstanding",
      description:
        "Record payment-in and payment-out with automatic outstanding balance tracking against invoices.",
      icon: <CreditCard className="h-5 w-5 text-primary" />,
    },
    {
      title: "14+ Business Reports",
      description:
        "Sale/Purchase, Day Book, Profit & Loss, Party-wise & Item-wise P&L, Party Statement, GSTR-1/2/3B and more — exportable as PDF/Excel.",
      icon: <FileBarChart className="h-5 w-5 text-primary" />,
    },
    {
      title: "Team Collaboration & RBAC",
      description:
        "Invite staff with granular page-level permissions (view/create/edit/delete) and role-based access control.",
      icon: <Shield className="h-5 w-5 text-primary" />,
    },
    {
      title: "Party Portal & Shared Reports",
      description:
        "External customers/suppliers can log in to view their invoices, payments, and shared reports via WhatsApp-shareable links.",
      icon: <Share2 className="h-5 w-5 text-primary" />,
    },
    {
      title: "Licensing & Razorpay Billing",
      description:
        "Trial / paid / complimentary licenses with Razorpay payment integration, coupon system, and server-verified orders.",
      icon: <ScrollText className="h-5 w-5 text-primary" />,
    },
    {
      title: "Backup & Restore",
      description:
        "Full company data export and import with foreign-key aware ordering for safe migrations.",
      icon: <Database className="h-5 w-5 text-primary" />,
    },
  ],

  techStack: [
    { category: "Frontend", name: "React", version: "18", purpose: "UI framework with hooks" },
    { category: "Frontend", name: "TypeScript", version: "Latest", purpose: "Type-safe development" },
    { category: "Frontend", name: "Vite", version: "5", purpose: "Fast build tool and dev server" },
    { category: "Styling", name: "Tailwind CSS", version: "3", purpose: "Utility-first CSS framework" },
    { category: "Styling", name: "shadcn/ui", version: "Latest", purpose: "Radix UI based component library" },
    { category: "State", name: "React Context + TanStack React Query", version: "Latest", purpose: "App / Auth / Company / License contexts + server state" },
    { category: "Routing", name: "React Router DOM", version: "v6", purpose: "Client-side routing with page guards" },
    { category: "Forms", name: "React Hook Form + Zod", version: "Latest", purpose: "Form management and schema validation" },
    { category: "Animations", name: "Framer Motion", version: "Latest", purpose: "UI animations" },
    { category: "Charts", name: "Recharts", version: "Latest", purpose: "Dashboard and report charts" },
    { category: "Backend", name: "Supabase", version: "Latest", purpose: "PostgreSQL, Auth, Edge Functions, Storage" },
    { category: "Payments", name: "Razorpay", version: "Latest", purpose: "Checkout SDK + server-side Orders API" },
    { category: "Files", name: "xlsx + papaparse", version: "Latest", purpose: "Excel/CSV import & export" },
    { category: "PDF", name: "HTML-to-print + qrcode", version: "Latest", purpose: "Invoice/report PDFs with QR codes" },
    { category: "Testing", name: "Vitest + Testing Library + Playwright", version: "Latest", purpose: "Unit and e2e testing" },
  ],

  architecture: {
    description:
      "SmartBooks is a single-page React application backed by Supabase. Auth, multi-tenancy, and licensing are layered as React Contexts (AuthContext → CompanyContext → LicenseContext). PostgreSQL holds all business data with strict Row Level Security; every business table carries a company_id and policies enforce is_company_member(company_id, auth.uid()). Supabase Edge Functions handle privileged operations like Razorpay order creation, payment verification, admin user management, and email lookup. Razorpay Checkout runs on the client and is verified server-side before activating a license.",
    diagram: `┌──────────────────────────────────────────────────────────┐
│                        Browser (SPA)                     │
│   React + Vite + TypeScript + Tailwind + shadcn/ui       │
│                                                          │
│   AuthCtx ─► CompanyCtx ─► LicenseCtx                    │
│        │           │              │                      │
│        ▼           ▼              ▼                      │
│   React Router · React Query · React Hook Form + Zod     │
└──────────────────────────┬───────────────────────────────┘
                           │
                           ▼
┌──────────────────────────────────────────────────────────┐
│                    SUPABASE BACKEND                      │
│                                                          │
│   Edge Functions                                         │
│   ─ razorpay-create-order   ─ razorpay-verify-payment    │
│   ─ admin-user-management   ─ lookup-email               │
│                                                          │
│   PostgreSQL (RLS everywhere)                            │
│   profiles · companies · company_members                 │
│   business_profiles · parties · items · categories       │
│   invoices · invoice_items · payments · custom_units     │
│   licenses · subscription_payments · coupons             │
│                                                          │
│   Supabase Auth — Email/Password + JWT                   │
│   Storage — shared-pdfs (public), private buckets        │
└──────────────────────────┬───────────────────────────────┘
                           │
                           ▼
              Razorpay Checkout + Orders API`,
  },

  dataModel: [
    {
      title: "companies & company_members",
      description: "Tenant boundary plus user membership with role and granular permissions.",
      code: `CREATE TABLE companies (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  owner_id uuid REFERENCES auth.users(id),
  created_at timestamptz DEFAULT now()
);

CREATE TABLE company_members (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  user_id uuid REFERENCES auth.users(id) ON DELETE CASCADE,
  role text NOT NULL, -- owner | admin | staff
  can_edit_payments boolean DEFAULT false,
  permissions jsonb DEFAULT '{}',
  UNIQUE(company_id, user_id)
);`,
    },
    {
      title: "parties & items",
      description: "Customers/suppliers with GST details, and inventory items with dual-unit support.",
      code: `CREATE TABLE parties (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  name text NOT NULL,
  gstin text,
  gst_type text DEFAULT 'unregistered',
  opening_balance numeric DEFAULT 0,
  credit_limit numeric DEFAULT 0
);

CREATE TABLE items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  name text NOT NULL,
  hsn_code text,
  gst_rate numeric DEFAULT 0,
  sale_price numeric DEFAULT 0,
  purchase_price numeric DEFAULT 0,
  unit text, secondary_unit text, conversion numeric,
  stock numeric DEFAULT 0,
  is_active boolean DEFAULT true
);`,
    },
    {
      title: "invoices & invoice_items",
      description: "Sales, purchases and returns with line items; stock and party balances update via triggers.",
      code: `CREATE TABLE invoices (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  company_id uuid REFERENCES companies(id) ON DELETE CASCADE,
  type text NOT NULL,           -- sale | purchase | sale_return | purchase_return
  number text NOT NULL,
  party_id uuid REFERENCES parties(id),
  party_gstin text DEFAULT '',
  place_of_supply text,
  cgst numeric, sgst numeric, igst numeric,
  total numeric,
  paid numeric DEFAULT 0,
  created_at timestamptz DEFAULT now()
);

CREATE TABLE invoice_items (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  invoice_id uuid REFERENCES invoices(id) ON DELETE CASCADE,
  item_id uuid REFERENCES items(id),
  qty numeric, rate numeric, gst_rate numeric, amount numeric
);`,
    },
    {
      title: "licenses & subscription_payments",
      description: "Per-user licenses with trial/paid/complimentary types and Razorpay-verified payments.",
      code: `CREATE TYPE license_type AS ENUM ('trial', 'paid', 'complimentary');

CREATE TABLE licenses (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  type license_type NOT NULL DEFAULT 'trial',
  valid_from timestamptz NOT NULL DEFAULT now(),
  valid_until timestamptz NOT NULL
);

CREATE TABLE subscription_payments (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id uuid REFERENCES auth.users(id),
  razorpay_order_id text NOT NULL,
  razorpay_payment_id text,
  amount numeric NOT NULL,
  status text NOT NULL,
  coupon_id uuid,
  UNIQUE(coupon_id, user_id)
);`,
    },
    {
      title: "GST Logic",
      description: "Place of supply drives the CGST/SGST vs IGST split.",
      code: `// Intra-state (supplier state == place of supply):
//   CGST = total * rate/2
//   SGST = total * rate/2
//
// Inter-state:
//   IGST = total * rate
//
// Supported rates: 0%, 5%, 12%, 18%, 28%
// All 36 Indian States/UTs supported as Place of Supply
// GSTIN validated client- and server-side`,
    },
  ],

  security: [
    "Supabase Auth with email/password and JWT session management",
    "Row Level Security on every business table using is_company_member(company_id, auth.uid())",
    "All business tables carry company_id — even SQL injection cannot cross tenant boundaries",
    "Role-based access control (owner / admin / staff) with granular page-level permissions",
    "Razorpay payments are server-verified via Edge Function (HMAC signature check)",
    "Admin operations validate caller role before executing",
    "lookup-email function intentionally public but exposes no other PII",
    "Public shared-pdfs storage bucket scoped to a single prefix; all other buckets private",
  ],

  installation: [
    "Clone the repository from GitHub (SANIDHYADASH/SmartBook)",
    "Install dependencies using bun install (or npm install)",
    "Create a Supabase project and copy the URL and anon key",
    "Run the SQL migrations to create tables, RLS policies, functions, and triggers",
    "Deploy the Edge Functions (razorpay-create-order, razorpay-verify-payment, admin-user-management, lookup-email)",
    "Create a Razorpay account and copy the Key ID, Key Secret, and Webhook Secret",
    "Set environment variables: VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY, VITE_RAZORPAY_KEY_ID (and server-side SUPABASE_SERVICE_ROLE_KEY, RAZORPAY_KEY_SECRET, RAZORPAY_WEBHOOK_SECRET)",
    "Start the dev server with bun run dev",
  ],

  usageGuide: [
    {
      title: "Setting Up Your Business",
      steps: [
        "Sign up with email and password — a Default Company is auto-created",
        "Fill in business profile: legal name, GSTIN, state, address",
        "Add parties (customers/suppliers) with GSTIN and opening balances",
        "Add items/services with HSN codes, GST rates, units, and stock",
        "Invite staff and assign role + page-level permissions",
      ],
    },
    {
      title: "Creating Invoices",
      steps: [
        "Choose invoice type: sale, purchase, sale return, or purchase return",
        "Select party — GSTIN and place of supply auto-populate",
        "Add line items; CGST/SGST or IGST is computed automatically",
        "Record payment received (or made) along with the invoice",
        "Print or share the invoice as a PDF with QR code",
      ],
    },
    {
      title: "Reports & GST Filing",
      steps: [
        "Open Reports → choose from 14+ reports (Sale, Purchase, Day Book, P&L, Party Statement, etc.)",
        "Generate GSTR-1, GSTR-2, GSTR-3B for any period",
        "Export reports as Excel or PDF",
        "Share via WhatsApp link from the shared-pdfs bucket",
      ],
    },
    {
      title: "Licensing & Billing",
      steps: [
        "Start on a trial license automatically on signup",
        "Upgrade via the Billing page — Razorpay Checkout opens",
        "Apply a coupon (one redemption per user per coupon)",
        "Payment is server-verified before the license is activated",
      ],
    },
    {
      title: "Backup & Restore",
      steps: [
        "Open Settings → Backup to export the entire company as a structured file",
        "Use Restore to import a backup with FK-aware ordering",
        "Useful for migrating between environments or recovering data",
      ],
    },
  ],
});
