export const siteConfig = {
  name: "Fisch Foundations",
  tagline: "Build. Renovate. Construct.",
  description:
    "Licensed general contractor serving the tri-state area. Ground-up residential and commercial construction, precision renovation — built on firsthand experience across NY, NJ, and CT.",
  url: "https://fischfoundations.com",
  phone: "(347) 359-2910",
  phoneHref: "tel:+13473592910",
  email: "Quote@FischFoundations.com",
  emailHref: "mailto:Quote@FischFoundations.com",
  serviceArea: "New York · New Jersey · Connecticut",
  license: "General Contractor",
  insurance: "Fully Insured & Bonded",
} as const;

export const navLinks = [
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Process", href: "#process" },
  { label: "Projects", href: "#projects" },
  { label: "Contact", href: "#contact" },
] as const;

export const heroStats = [
  { label: "Service Area", value: "NY · NJ · CT" },
  { label: "Project Types", value: "Residential + Commercial" },
  { label: "Insurance", value: "Fully Licensed & Bonded" },
  { label: "Project Experience", value: "10 Projects" },
] as const;

export const trustBadges = [
  "General Contractor License",
  "Fully Insured & Bonded",
  "NY · NJ · CT Tri-State Area",
  "Ground-Up & Renovation",
  "Developer Background",
  "Residential + Commercial",
] as const;

export const services = [
  {
    number: "01",
    title: "Ground-Up Residential",
    description:
      "Custom homes and multi-family builds from foundation to finish. Every trade, every phase — single point of accountability for complex residential projects.",
  },
  {
    number: "02",
    title: "Commercial Construction",
    description:
      "Retail, office, mixed-use, and industrial builds. Tenant improvements to full shell-and-core. On schedule, on spec, regardless of complexity.",
  },
  {
    number: "03",
    title: "Renovation & Gut Rehab",
    description:
      "Full-scope renovations from cosmetic upgrades to complete structural overhauls. Historic preservation, adaptive reuse, and high-end interior builds.",
  },
  {
    number: "04",
    title: "Design-Build",
    description:
      "Architecture, engineering, and construction under one roof. Streamlined path from concept to CO — faster timelines, fewer handoffs, lower risk.",
  },
  {
    number: "05",
    title: "Project Management",
    description:
      "Owner's representative and CM services. We protect your budget, enforce your schedule, and manage subcontractors on your behalf.",
  },
  {
    number: "06",
    title: "Site Development",
    description:
      "Land clearing, grading, utilities, and infrastructure. We prepare sites for construction and handle the complex early-stage work.",
  },
] as const;

export const aboutHighlights = [
  { label: "License", value: "General Contractor" },
  { label: "Insurance", value: "Fully Insured & Bonded" },
  { label: "Service Area", value: "NY · NJ · CT Tri-State" },
  { label: "Specialty", value: "Residential + Commercial" },
] as const;

export const processSteps = [
  {
    step: "01",
    title: "Consultation",
    description:
      "We meet on-site or virtually to understand your scope, timeline, and goals. No cost, no obligation — ever.",
  },
  {
    step: "02",
    title: "Scope & Estimate",
    description:
      "Detailed written proposal with itemized costs, phasing, and a realistic timeline. Nothing vague, nothing hidden.",
  },
  {
    step: "03",
    title: "Permitting & Preconstruction",
    description:
      "We handle permitting, trade coordination, and procurement. You're kept informed at every milestone.",
  },
  {
    step: "04",
    title: "Build & Deliver",
    description:
      "Active site management, daily oversight, weekly reporting, and a final walkthrough before keys are handed over.",
  },
] as const;

export type ProjectRegion = "All" | "Manhattan" | "Brooklyn" | "Queens / LIC";

export const projectRegions: { label: ProjectRegion; count: number }[] = [
  { label: "All", count: 10 },
  { label: "Manhattan", count: 2 },
  { label: "Brooklyn", count: 5 },
  { label: "Queens / LIC", count: 3 },
];

export const projectTypes = [
  "Ground-Up Residential",
  "Ground-Up Commercial",
  "Renovation",
  "Design-Build",
  "Project Management",
  "Other",
] as const;
