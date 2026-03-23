import type { Hackathon } from "@/types/portfolio/hackathons"

export const HACKATHONS: Hackathon[] = [
  {
    id: "kanan-hackathon",
    title: "Kanan Hackathon Solution C1-P1",
    period: {
      start: "03.2026",
    },
    link: "https://github.com/nihalmachhi2006/Kanan-hackathon-solution-C1-P1",
    skills: ["TypeScript", "Hackathon", "Open Source"],
    description: "Solution for Kanan Hackathon (C1-P1).",
    isExpanded: true,
  },
  {
    id: "odoo-parul-hackathon-26",
    title: "Odoo x Parul University Hackathon 26",
    period: {
      start: "13.06.2026",
      end: "14.06.2026",
    },
    status: {
      label: "Next Target",
      type: "info",
    },
    isBlurred: false,
    link: "https://www.odoo.com/event/odoo-x-parul-university-hackathon-26-8012/register",
    skills: ["Odoo", "Python", "Hackathon"],
    description: "A 24-hour coding marathon where talent meets technology.",
    isExpanded: true,
  },
]
