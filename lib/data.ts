export interface Project {
  id: string
  slug: string
  num: string
  role: string
  title: string
  description: string
  section: 'ux' | 'ar'
  images: string[]
  tags: string[]
  year: string
  url?: string
}

export const projects: Project[] = [
  {
    id: '1',
    slug: 'lica',
    num: '01',
    role: 'Founding Designer',
    title: "Lica's Product & Motion",
    description: 'Wearing multiple hats to design an AI creative platform for static and video ads.',
    section: 'ux',
    images: [
      'https://framerusercontent.com/images/ZnyMzUD9njvUPHwpSFxkSrs0ec.png',
      'https://framerusercontent.com/images/rWSLPHQupCHdazP1fF9HszxwOg.png',
    ],
    tags: ['Product Design', 'Motion', 'AI'],
    year: '2024',
  },
  {
    id: '2',
    slug: 'apple',
    num: '02',
    role: 'Human Interface Design Intern',
    title: 'Video Apps',
    description: 'Designed concepts and shipped features for Final Cut Pro on iPadOS, macOS, and visionOS.',
    section: 'ux',
    images: [
      'https://framerusercontent.com/images/JT8xm50txOdlgI5dsCepnwCBQo.png',
      'https://framerusercontent.com/images/8XJinru2z2764NmWgBgmFqXcU.png',
    ],
    tags: ['Product Design', 'iOS', 'visionOS'],
    year: '2024',
  },
  {
    id: '3',
    slug: 'visavis',
    num: '03',
    role: 'Product Designer',
    title: 'Visavis App Development',
    description: 'A walkthrough of my mobile app designs at Visavis for iOS and Android.',
    section: 'ux',
    images: [
      'https://framerusercontent.com/images/G7ltBpOmltBpn8AZagtXT1ZCPzY.png',
      'https://framerusercontent.com/images/i3Dm8sAq8sXyPophzS6cG9Dq1mA.png',
    ],
    tags: ['Mobile', 'iOS', 'Android'],
    year: '2023',
  },
  {
    id: '4',
    slug: 'soundcloud',
    num: '04',
    role: 'Product Designer',
    title: 'SoundCloud Case Study',
    description: 'A walkthrough of my design challenge submission for the Kleiner Perkins Fellowship.',
    section: 'ux',
    images: [
      'https://framerusercontent.com/images/ap9D96aU5naPrRcfXYDrVW0MjY.png',
    ],
    tags: ['Case Study', 'UX Research', 'Product'],
    year: '2023',
  },
  {
    id: '5',
    slug: 'forbes',
    num: '05',
    role: 'Product Designer',
    title: 'Forbes Case Study',
    description: 'A walkthrough of my mobile app redesign for Forbes Magazine\'s app.',
    section: 'ux',
    images: [
      'https://framerusercontent.com/images/7sQNov2YklB5DjDLaDhHS6jm4.png',
      'https://framerusercontent.com/images/xJLXJYVtIB9FDyJ31xIke636SyU.png',
    ],
    tags: ['Case Study', 'Mobile', 'Redesign'],
    year: '2023',
  },
  {
    id: '6',
    slug: 'covision',
    num: '01',
    role: 'AR Product Designer & Developer',
    title: 'CoVision',
    description: 'An Apple Vision Pro concept for the future of design brainstorming.',
    section: 'ar',
    images: [
      'https://framerusercontent.com/images/QMv58rD5jRHqHwXOR3dYUYKT5aE.png',
    ],
    tags: ['visionOS', 'AR', 'Concept'],
    year: '2024',
  },
  {
    id: '7',
    slug: 'snap',
    num: '02',
    role: 'AR Developer',
    title: 'Snap inc. Externship',
    description: 'A walkthrough of my development for the 2024 Lens Challenge.',
    section: 'ar',
    images: [
      'https://framerusercontent.com/images/1eqW2qgkdTYAxXlB0ebJwJZWV8c.png',
      'https://framerusercontent.com/images/H2XlNF0DktWOjUHc0fDMv2vCkyI.png',
    ],
    tags: ['Snap', 'Lens Studio', 'AR'],
    year: '2024',
  },
  {
    id: '8',
    slug: 'spatialsense',
    num: '03',
    role: 'AR Developer',
    title: 'SpatialSense',
    description: 'An AR Hologram to help visually impaired users understand artworks.',
    section: 'ar',
    images: [
      'https://framerusercontent.com/images/oX96vhnpmIqqxXaQGtsvlgGaQ.png',
      'https://framerusercontent.com/images/TV0rPzDf5sylH8T3ybw4ZbW6p4.png',
    ],
    tags: ['AR', 'Accessibility', 'Hologram'],
    year: '2023',
  },
  {
    id: '9',
    slug: 'inst639p',
    num: '04',
    role: 'AR Developer',
    title: 'INST639P',
    description: 'My projects during my AR Mobile Design graduate level class.',
    section: 'ar',
    images: [
      'https://framerusercontent.com/images/1eqW2qgkdTYAxXlB0ebJwJZWV8c.png',
      'https://framerusercontent.com/images/nu1jusU10CeBD0RSsZwX10Uq4g.png',
    ],
    tags: ['AR', 'Mobile', 'Graduate'],
    year: '2023',
  },
]

export const uxProjects = projects.filter(p => p.section === 'ux')
export const arProjects = projects.filter(p => p.section === 'ar')
