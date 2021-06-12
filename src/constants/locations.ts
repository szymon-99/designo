import { LatLngLiteral } from "leaflet"

export type map = {
  cords: LatLngLiteral
}

export type mapInfo = {
  name: string
  slug: string
  adress: string[]
  number: string
  mail: string
}

export interface location {
  map: map
  mapInfo: mapInfo
  id: number
}
export const data: location[] = [
  {
    id: 1241,
    map: {
      cords: {
        lat: 43.6440706259402,
        lng: -79.39472179236512,
      },
    },
    mapInfo: {
      name: "canada",
      slug: "Central",
      adress: ["3886 Wellington Street", "Toronto, Ontario M9C 3J5"],
      number: "+1 253-863-8967",
      mail: "contact@designo.co",
    },
  },
  {
    id: 4124,
    map: {
      cords: {
        lat: -30.324012711277298,
        lng: 149.7856146552035,
      },
    },
    mapInfo: {
      name: "australia",
      slug: "AU",
      adress: ["19 Balonne Street", "New South Wales 2443"],
      number: "(02) 6720 9092",
      mail: "contact@designo.au",
    },
  },
  {
    id: 4155,
    map: {
      cords: {
        lat: 53.709756681802496,
        lng: -1.3431659440930503,
      },
    },
    mapInfo: {
      name: "united kingdom",
      slug: "UK",
      adress: ["13  Colorado Way", "Rhyd-y-fro SA8 9GA"],
      number: "078 3115 1400",
      mail: "contact@designo.uk",
    },
  },
]
