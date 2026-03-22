import type { Experience } from "@/types/portfolio/experiences"

export const EXPERIENCES: Experience[] = [
  {
    id: "tacttree-llp",
    companyName: "TactTree LLP",
    positions: [
      {
        id: "1",
        title: "Data Analyst",
        employmentPeriod: {
          start: "11.2025",
        },
        employmentType: "Freelance",
        icon: "code",
      },
      {
        id: "2",
        title: "Data Analyst",
        employmentPeriod: {
          start: "05.2025",
          end: "10.2025",
        },
        employmentType: "Internship",
        icon: "code",
      },
    ],
    isCurrentEmployer: true,
    isBlurred: true,
  },
  {
    id: "parul-university",
    companyName: "Parul University",
    positions: [
      {
        id: "1",
        title: "Placement Coordinator",
        employmentPeriod: {
          start: "08.2024",
          end: "05.2025",
        },
        employmentType: "Internship",
        icon: "business",
      },
    ],
  },
]
