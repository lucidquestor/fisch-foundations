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

export const aboutRegions = [
  { label: "Manhattan", count: "2 Projects" },
  { label: "Brooklyn", count: "5 Projects" },
  { label: "Queens / LIC / Astoria", count: "3 Projects" },
] as const;

export const aboutHighlights = [
  { label: "License", value: "General Contractor" },
  { label: "Insurance", value: "Fully Insured & Bonded" },
  { label: "Service Area", value: "NY · NJ · CT Tri-State" },
  { label: "Specialty", value: "Residential + Commercial" },
] as const;

export const processSteps = [
  {
    step: "Step 01",
    title: "Consultation",
    description:
      "We meet on-site or virtually to understand your scope, timeline, and goals. No cost, no obligation — ever.",
  },
  {
    step: "Step 02",
    title: "Scope & Estimate",
    description:
      "Detailed written proposal with itemized costs, phasing, and a realistic timeline. Nothing vague, nothing hidden.",
  },
  {
    step: "Step 03",
    title: "Permitting & Preconstruction",
    description:
      "We handle permitting, trade coordination, and procurement. You're kept informed at every milestone.",
  },
  {
    step: "Step 04",
    title: "Build & Deliver",
    description:
      "Active site management, daily oversight, weekly reporting, and a final walkthrough before keys are handed over.",
  },
] as const;

export type ProjectBorough = "all" | "manhattan" | "brooklyn" | "queens";

export const projectFilters: { id: ProjectBorough; label: string }[] = [
  { id: "all", label: "All" },
  { id: "manhattan", label: "Manhattan" },
  { id: "brooklyn", label: "Brooklyn" },
  { id: "queens", label: "Queens / LIC" },
];

export type Project = {
  num: string;
  address: string;
  city: string;
  borough: Exclude<ProjectBorough, "all">;
  type: string;
  note?: string;
  image?: string;
  large?: boolean;
};

export const projects: Project[] = [
  {
    num: "01",
    address: "26 Sherman Ave",
    city: "Fort George, Manhattan",
    borough: "manhattan",
    type: "Mixed-Use Residential",
    note: "58,000 sf · 2021",
    image:
      "https://images1.apartments.com/i2/tJuNt8kZ--ACXEeKlKeMalYr7auvZqtx2Asoo-bo4L8/116/pointe-26-new-york-ny-primary-photo.jpg",
    large: true,
  },
  {
    num: "02",
    address: "165 Lexington Ave",
    city: "Kips Bay, Manhattan",
    borough: "manhattan",
    type: "Luxury Condominium",
    note: "53,841 sf · 2020",
    image:
      "https://images1.apartments.com/i2/MsQFWPQeLkLGulYQCdXc3fBeKKHaRRoLQKQg-HIwwpU/116/lexi-condos-new-york-ny-exterior-building-view-165-lexington-ave.jpg",
  },
  {
    num: "03",
    address: "597 / 575 Grand Street",
    city: "Williamsburg, Brooklyn",
    borough: "brooklyn",
    type: "Multi-Family Residential",
    note: "126,478 sf · 185 units",
    image:
      "https://images1.apartments.com/i2/yxNFETpZn-W_lFgyfhZa7TGtHiIfloJWK_uXHjBOyQs/116/597-grand-st-brooklyn-ny-primary-photo.jpg",
  },
  {
    num: "04",
    address: "570 Fulton Street",
    city: "Fort Greene, Brooklyn",
    borough: "brooklyn",
    type: "Mixed-Use · 23 Stories",
    note: "128,872 sf · 163 units",
    image:
      "https://images1.apartments.com/i2/2PlM9FueG24PCSfQARDNwBM5c6MBOByYuNE7fhEv1X8/116/fulton-greene-brooklyn-ny-primary-photo.jpg",
    large: true,
  },
  {
    num: "05",
    address: "38-38 32nd Street",
    city: "Long Island City, Queens",
    borough: "queens",
    type: "Residential · The Northern I",
    note: "9 stories · 64 units",
    image:
      "https://images1.apartments.com/i2/Zm1lsMXMdxqa4FCMNjk8fhS_QHNXHB1vLFyQES-JdHQ/116/the-northern-long-island-city-ny-3838-32nd-st.jpg",
  },
  {
    num: "06",
    address: "38-27 32nd Street",
    city: "Long Island City, Queens",
    borough: "queens",
    type: "Residential · The Northern II",
    note: "10 stories · 52 units",
    image:
      "https://images1.apartments.com/i2/UKi3lCo8fQO4oJaAMQqjpaQSCiq1_-tQWnkEZapEoyw/116/the-northern-long-island-city-ny-building-photo.jpg",
  },
  {
    num: "07",
    address: "1200 Bedford Ave",
    city: "Bedford-Stuyvesant, Brooklyn",
    borough: "brooklyn",
    type: "Mixed-Use Residential",
    note: "Bed-Stuy",
  },
  {
    num: "08",
    address: "2-24 26th Ave",
    city: "Astoria, Queens",
    borough: "queens",
    type: "Multi-Family Residential",
    note: "Astoria",
  },
  {
    num: "09",
    address: "362-372 Livingston Ave",
    city: "Brooklyn",
    borough: "brooklyn",
    type: "Multi-Family Residential",
    note: "Brooklyn",
  },
  {
    num: "10",
    address: "268 Bergen Street",
    city: "Boerum Hill, Brooklyn",
    borough: "brooklyn",
    type: "Residential",
    note: "Boerum Hill",
  },
];

export const projectTypes = [
  "Ground-Up Residential",
  "Ground-Up Commercial",
  "Renovation",
  "Design-Build",
  "Project Management",
  "Other",
] as const;
