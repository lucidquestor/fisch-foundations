export const siteConfig = {
  name: "Fisch Foundations",
  descriptor: "General Contracting & Construction",
  tagline: "Build. Renovate. Construct.",
  description:
    "General contractor serving NY, NJ, and CT — ground-up multi-family, commercial builds, and major renovations, led by someone who has worked the developer side of the table.",
  url: "https://fischfoundations.com",
  phone: "(347) 359-2910",
  phoneHref: "tel:+13473592910",
  email: "Quote@FischFoundations.com",
  emailHref: "mailto:Quote@FischFoundations.com",
  serviceArea: "New York · New Jersey · Connecticut",
  licenseNote:
    "Licensed and insured for applicable projects and jurisdictions.",
} as const;

export const copy = {
  hero: {
    subhead:
      "Ground-up multi-family, commercial, and major renovation work across the tri-state — managed with an understanding of how projects are financed, phased, and delivered.",
    credibility:
      "Licensed & Insured · NY · NJ · CT · Residential & Commercial",
  },
  cta: {
    title: "Planning a Ground-Up Build or Major Renovation?",
    subtitle:
      "Share your scope, location, and timeline — we respond within one business day.",
  },
  contact: {
    intro:
      "Tell us where the project stands — permits, plans, budget, timeline — and we'll help identify the next practical step.",
    pageDescription:
      "Describe your project and we'll follow up within one business day with next steps.",
  },
  about: {
    pageTitle: "Construction From a Developer's Perspective",
    pageDescription:
      "How projects get financed, phased, and delivered — not just how they get built in the field.",
    quote:
      "We approach every engagement the way a developer does — with an eye on financing, phasing, carry costs, and what has to happen before the first trade mobilizes.",
    approachTitle: "A Developer's Perspective",
  },
  jobsite: {
    eyebrow: "Field Execution",
    title: "Ground Break Through Certificate of Occupancy",
    subtitle:
      "Superintendent-level oversight, trade coordination, and weekly reporting on complex residential and commercial sites.",
  },
  services: {
    previewIntro:
      "Three core capabilities for owners who need one accountable team from preconstruction through closeout.",
    fullIntro:
      "Permit filings through punch list — one point of accountability across the full construction lifecycle.",
  },
  projects: {
    fullIntro:
      "Addresses, square footage, and building types from direct professional involvement across NYC and the tri-state.",
  },
} as const;

/** Replace jobsite with "/jobsite.jpg" once you add your own photo to /public */
export const siteImages = {
  jobsite:
    "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1800&q=80",
} as const;

export const navLinks = [
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" },
] as const;

export const trustBadges = [
  "Licensed & Insured",
  "NY · NJ · CT Tri-State",
  "Residential + Commercial",
  "Ground-Up & Renovation",
] as const;

export const founder = {
  /** Set to display a name on the About page and founder section */
  name: "",
  title: "Principal · General Contractor",
  bio: "Brings firsthand experience from complex residential and commercial developments across New York City — including ground-up multi-family work in Brooklyn and Queens and commercial projects in Manhattan.",
  extendedBio:
    "That background shapes how Fisch Foundations approaches every engagement: grounded in how developers actually think, plan, and build. Clients get a contractor who understands financing, phasing, and delivery — not just field execution.",
} as const;

export const projectDisclosure =
  "Selected projects reflect the founder's direct professional involvement prior to and through the formation of Fisch Foundations. Roles have included development oversight, construction management, and general contracting depending on the project.";

export const primaryServices = [
  {
    number: "01",
    title: "Ground-Up Construction",
    description:
      "Multi-family, mixed-use, and commercial builds where one team owns every trade — from excavation and structure through MEP, finishes, and final inspection.",
  },
  {
    number: "02",
    title: "Major Renovations",
    description:
      "Gut rehabs and structural work in occupied, landmark, or tight urban sites — sequenced to control noise, access, and cost exposure.",
  },
  {
    number: "03",
    title: "Construction Management",
    description:
      "Owner's rep and CM for clients who need budget discipline, subcontractor accountability, and schedule enforcement without running the site day to day.",
  },
] as const;

export const additionalServices = [
  {
    title: "Commercial Construction",
    description:
      "Retail, office, and shell-and-core fit-outs — scoped for tenant delivery dates and landlord coordination.",
  },
  {
    title: "Design-Build",
    description:
      "Architecture, engineering, and construction coordinated under one contract when speed and fewer handoffs matter.",
  },
  {
    title: "Site Development",
    description:
      "Grading, utilities, and infrastructure work that has to be right before vertical construction starts.",
  },
] as const;

/** @deprecated Use primaryServices + additionalServices */
export const services = [...primaryServices] as const;

export const aboutRegions = [
  { label: "Manhattan", count: "2 Projects" },
  { label: "Brooklyn", count: "3 Projects" },
  { label: "Queens / LIC", count: "1 Project" },
] as const;

export const aboutHighlights = [
  { label: "Credentials", value: "Licensed & Insured" },
  { label: "Service Area", value: "NY · NJ · CT Tri-State" },
  { label: "Focus", value: "Residential + Commercial" },
  { label: "Experience", value: "Ground-Up & Renovation" },
] as const;

export const processSteps = [
  {
    step: "Step 01",
    title: "Site & Scope Review",
    description:
      "We walk the property or review your drawings to understand constraints, entitlement status, and where the project actually stands today.",
  },
  {
    step: "Step 02",
    title: "Scope & Estimate",
    description:
      "A written proposal with line-item costs, phased milestones, and a schedule tied to how the work will sequence — not a lump-sum guess.",
  },
  {
    step: "Step 03",
    title: "Permitting & Preconstruction",
    description:
      "Filings, trade buyout, and procurement handled before mobilization — with status at each gate so there are no surprises at startup.",
  },
  {
    step: "Step 04",
    title: "Build & Turnover",
    description:
      "Daily field oversight, weekly progress reports, and a documented punch-list walkthrough before keys or CO.",
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
];

export const featuredProjects = projects.slice(0, 4);

export const projectTypes = [
  "Ground-Up Residential",
  "Ground-Up Commercial",
  "Renovation",
  "Design-Build",
  "Project Management",
  "Other",
] as const;

export const budgetRanges = [
  "Under $250,000",
  "$250,000 – $500,000",
  "$500,000 – $1M",
  "$1M – $5M",
  "$5M+",
  "Not sure yet",
] as const;

export const startTimelines = [
  "Within 3 months",
  "3–6 months",
  "6–12 months",
  "12+ months",
  "Exploring options",
] as const;
