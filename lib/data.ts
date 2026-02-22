export interface Project {
  id: string
  slug: string
  num: string
  role: string
  title: string
  description: string
  section: 'ux' | 'ar'
  image: string
  tags: string[]
  year: string
  url?: string
  logoUrl?: string
}

export const projects: Project[] = [
  // ── UX ──────────────────────────────────────────────────────────────────
  {
    id: '1',
    slug: 'lica',
    num: '01',
    role: 'Founding Designer',
    title: "Lica's Product & Motion",
    description: 'Wearing multiple hats to design an AI creative platform for static and video ads.',
    section: 'ux',
    image: '/projectcard.png',           // ← put your image filename here
    tags: ['Product Design', 'Motion', 'AI'],
    year: '2024',
    logoUrl: 'https://framerusercontent.com/images/ZnyMzUD9njvUPHwpSFxkSrs0ec.png',
  },
  {
    id: '2',
    slug: 'apple',
    num: '02',
    role: 'Human Interface Design Intern',
    title: 'Video Apps',
    description: 'Designed concepts and shipped features for Final Cut Pro on iPadOS, macOS, and visionOS.',
    section: 'ux',
    image: '/projectcard.png',          // ← put your image filename here
    tags: ['Product Design', 'iOS', 'visionOS'],
    year: '2024',
    logoUrl: '__apple__',
  },
  {
    id: '3',
    slug: 'visavis',
    num: '03',
    role: 'Product Designer',
    title: 'Visavis App Development',
    description: 'A walkthrough of my mobile app designs at Visavis for iOS and Android.',
    section: 'ux',
    image: '/projectcard.png',        // ← put your image filename here
    tags: ['Mobile', 'iOS', 'Android'],
    year: '2023',
    logoUrl: '__visavis__',
  },
  {
    id: '4',
    slug: 'soundcloud',
    num: '04',
    role: 'Product Designer',
    title: 'SoundCloud Case Study',
    description: 'A walkthrough of my design challenge submission for the Kleiner Perkins Fellowship.',
    section: 'ux',
    image: '/projectcard.png',     // ← put your image filename here
    tags: ['Case Study', 'UX Research', 'Product'],
    year: '2023',
    logoUrl: '__soundcloud__',
  },
  {
    id: '5',
    slug: 'forbes',
    num: '05',
    role: 'Product Designer',
    title: 'Forbes Case Study',
    description: "A walkthrough of my mobile app redesign for Forbes Magazine's app.",
    section: 'ux',
    image: '/projectcard.png',         // ← put your image filename here
    tags: ['Case Study', 'Mobile', 'Redesign'],
    year: '2023',
    logoUrl: '__forbes__',
  },
  // ── AR ──────────────────────────────────────────────────────────────────
  {
    id: '6',
    slug: 'covision',
    num: '01',
    role: 'AR Product Designer & Developer',
    title: 'CoVision',
    description: 'An Apple Vision Pro concept for the future of design brainstorming.',
    section: 'ar',
    image: '/projectcard.png',       // ← put your image filename here
    tags: ['visionOS', 'AR', 'Concept'],
    year: '2024',
    logoUrl: '__apple__',
  },
  {
    id: '7',
    slug: 'snap',
    num: '02',
    role: 'AR Developer',
    title: 'Snap inc. Externship',
    description: 'A walkthrough of my development for the 2024 Lens Challenge.',
    section: 'ar',
    image: '/projectcard.png',           // ← put your image filename here
    tags: ['Snap', 'Lens Studio', 'AR'],
    year: '2024',
    logoUrl: '__snap__',
  },
  {
    id: '8',
    slug: 'spatialsense',
    num: '03',
    role: 'AR Developer',
    title: 'SpatialSense',
    description: 'An AR Hologram to help visually impaired users understand artworks.',
    section: 'ar',
    image: '/projectcard.png',   // ← put your image filename here
    tags: ['AR', 'Accessibility', 'Hologram'],
    year: '2023',
    logoUrl: '__spatial__',
  },
  {
    id: '9',
    slug: 'inst639p',
    num: '04',
    role: 'AR Developer',
    title: 'INST639P',
    description: 'My projects during my AR Mobile Design graduate level class.',
    section: 'ar',
    image: '/projectcard.png',       // ← put your image filename here
    tags: ['AR', 'Mobile', 'Graduate'],
    year: '2023',
    logoUrl: '__clock__',
  },
]

export const uxProjects = projects.filter(p => p.section === 'ux')
export const arProjects = projects.filter(p => p.section === 'ar')