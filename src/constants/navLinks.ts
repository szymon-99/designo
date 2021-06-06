interface navLink {
  label: string
  url: string
  id: number
}

export const navLinks: navLink[] = [
  {
    label: "our company",
    url: "/company",
    id: 1,
  },
  {
    label: "locations",
    url: "/locations",
    id: 2,
  },
  {
    label: "contact",
    url: "/contact",
    id: 3,
  },
]
